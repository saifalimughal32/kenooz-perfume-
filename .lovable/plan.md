## Change

`src/components/layout/AlSyediBadge.tsx` में inner logo की class update करें:

- `h-12 w-12 object-contain` → `h-20 w-20 object-contain`

Outer badge container (`h-14 w-14`) same रहेगा — सिर्फ अंदर का logo बड़ा होगा (container से overflow होकर fill करेगा)।

Note: अगर logo container से बाहर निकल कर अजीब लगे, तो container size भी थोड़ा बढ़ाना पड़ सकता है — लेकिन पहले सिर्फ logo बढ़ाकर देखते हैं जैसा आपने कहा।
