import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";

type Msg = { role: "user" | "assistant"; content: string };

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`;

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm the **Kenooz Assistant**. Ask me anything about our perfume manufacturing, private label services, MOQs, or certifications.",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    const userMsg: Msg = { role: "user", content: text };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({
          messages: next.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      if (!resp.ok || !resp.body) {
        const errText =
          resp.status === 429
            ? "Too many requests — please try again in a moment."
            : resp.status === 402
            ? "Service temporarily unavailable. Please contact us directly."
            : "Sorry, I couldn't reach the assistant. Please try again.";
        setMessages((p) => [...p, { role: "assistant", content: errText }]);
        setLoading(false);
        return;
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let buf = "";
      let acc = "";
      let done = false;
      let assistantStarted = false;

      while (!done) {
        const { done: d, value } = await reader.read();
        if (d) break;
        buf += decoder.decode(value, { stream: true });
        let nl: number;
        while ((nl = buf.indexOf("\n")) !== -1) {
          let line = buf.slice(0, nl);
          buf = buf.slice(nl + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (!line.startsWith("data: ")) continue;
          const j = line.slice(6).trim();
          if (j === "[DONE]") {
            done = true;
            break;
          }
          try {
            const parsed = JSON.parse(j);
            const delta = parsed.choices?.[0]?.delta?.content;
            if (delta) {
              acc += delta;
              if (!assistantStarted) {
                assistantStarted = true;
                setMessages((p) => [...p, { role: "assistant", content: acc }]);
              } else {
                setMessages((p) =>
                  p.map((m, i) => (i === p.length - 1 ? { ...m, content: acc } : m)),
                );
              }
            }
          } catch {
            buf = line + "\n" + buf;
            break;
          }
        }
      }
    } catch (e) {
      console.error(e);
      setMessages((p) => [
        ...p,
        { role: "assistant", content: "Network error — please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open AI chat"}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-[0_8px_30px_-5px_hsl(var(--primary)/0.6)] hover:scale-110 transition-transform flex items-center justify-center"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-7 w-7" />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[400px] h-[560px] max-h-[80vh] bg-card border border-primary/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-scale-in">
          <div className="px-5 py-4 border-b border-border bg-gradient-to-r from-primary/10 to-transparent">
            <p className="text-[10px] tracking-[0.25em] uppercase text-primary">AI Assistant</p>
            <h3 className="font-serif text-lg text-foreground">Kenooz Assistant</h3>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                    m.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-muted text-foreground rounded-bl-sm"
                  }`}
                >
                  {m.role === "assistant" ? (
                    <div className="prose prose-sm dark:prose-invert max-w-none prose-p:my-1 prose-ul:my-1 prose-strong:text-primary">
                      <ReactMarkdown>{m.content}</ReactMarkdown>
                    </div>
                  ) : (
                    m.content
                  )}
                </div>
              </div>
            ))}
            {loading && messages[messages.length - 1]?.role === "user" && (
              <div className="flex justify-start">
                <div className="bg-muted rounded-2xl rounded-bl-sm px-4 py-3">
                  <Loader2 className="h-4 w-4 animate-spin text-primary" />
                </div>
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
            className="border-t border-border p-3 flex gap-2 bg-background"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about MOQs, private label..."
              disabled={loading}
              className="flex-1 bg-muted text-foreground text-sm px-4 py-2.5 rounded-full outline-none focus:ring-2 focus:ring-primary/40"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send message"
              className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center disabled:opacity-50 hover:scale-105 transition-transform"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatBot;
