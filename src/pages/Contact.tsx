import { useState } from "react";
import { z } from "zod";
import SiteLayout from "@/components/layout/SiteLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().max(40).optional(),
  message: z.string().trim().min(1, "Message is required").max(1500),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      toast.error(r.error.issues[0]?.message ?? "Please complete the form correctly.");
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("contact_messages").insert({
      name: r.data.name,
      email: r.data.email,
      phone: r.data.phone || null,
      message: r.data.message,
    });
    setLoading(false);
    if (error) {
      toast.error("Could not send message. Please try again.");
      return;
    }
    toast.success("Message sent! We'll respond within 24 hours.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <SiteLayout>
      <PageHeader title="Contact Us" breadcrumb="Contact" />

      <section className="py-20">
        <div className="container-luxury grid lg:grid-cols-2 gap-12">
          <div>
            <p className="label-gold mb-3">Get in Touch</p>
            <h2 className="heading-section mb-5">Let's Build Your Brand</h2>
            <p className="text-foreground/70 mb-8 leading-relaxed">
              We are here to help your business grow. Fill out the form or contact us
              directly for bulk orders, private label inquiries, or any other information.
            </p>

            <form onSubmit={submit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required maxLength={100} className="bg-secondary border-border rounded-none h-12" />
                <Input type="email" placeholder="Your Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required maxLength={255} className="bg-secondary border-border rounded-none h-12" />
              </div>
              <Input placeholder="Your Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} maxLength={40} className="bg-secondary border-border rounded-none h-12" />
              <Textarea placeholder="Your Message" rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required maxLength={1500} className="bg-secondary border-border rounded-none" />
              <Button type="submit" disabled={loading} className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 h-12 tracking-wider text-xs font-semibold">
                {loading ? "SENDING..." : "SEND MESSAGE"}
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            <p className="label-gold">Contact Information</p>
            {[
              { icon: MapPin, label: "United Arab Emirates" },
              { icon: Mail, label: "info@kenoozperfumes.com" },
              { icon: Phone, label: "+971 55 155 7964" },
              { icon: Clock, label: "Monday – Saturday: 9:00 AM – 6:00 PM" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-4 p-5 border border-border bg-[hsl(30_10%_8%)]">
                <div className="h-11 w-11 rounded-full border border-primary/40 flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm text-foreground/85">{label}</span>
              </div>
            ))}

            <div className="bg-[hsl(30_10%_8%)] border border-border p-8 mt-6">
              <h3 className="font-serif text-xl mb-2 text-primary">Response Time Promise</h3>
              <p className="text-sm text-foreground/70">All B2B inquiries answered within 24 business hours.</p>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Contact;
