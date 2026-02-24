# Projekt: Williams Hårstudio – Modern & Elegant Hair Design

## 1. Övergripande Vibe & Målgrupp
- **Målgrupp:** Könsneutral men med ett tydligt fokus på kvinnliga kunder som söker kvalitet och lyx.
- **Känsla:** Ljus, luftig, minimalistisk (Scandi-chic). Tänk exklusivt magasin snarare än barberarsalong.
- **Färgpalett:** - Bakgrund: `#FAF9F6` (Off-white/Bone)
  - Accenter: `#E5D3B3` (Champagne) och `#D4B996` (Sand)
  - Text: `#1A1A1A` (Mjuk svart för läsbarhet)

## 2. Teknisk Stack (Gemini 3 Flash / Vite)
- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS (Focus på utility classes för spacing och typography)
- **Animationer:** GSAP för "smooth reveal" och mjuka fades.
- **Hosting:** Vercel (Hobby plan)

## 3. Sidstruktur & Innehåll

### Header
- Minimalistisk logotyp (Serif-font).
- Navigering: Hem, Tjänster, Om oss, Boka.
- "Boka tid"-knapp i hörnet (Outline-stil eller fylld med Champagne-färg).

### Hero Section
- **Rubrik:** "Skräddarsydd hårvård för din unika stil."
- **Underrubrik:** "En lugn oas i hjärtat av staden där din vision blir verklighet."
- **CTA:** "Upptäck våra behandlingar".
- **Design:** Stor, mjuk bild (Airy/Bright) med en subtil fade-in effekt.

### Tjänster (Services)
*Presenteras i en elegant lista eller ett grid med generösa marginaler.*
- **Klippning & Styling:** Inklusive konsultation och tvätt.
- **Balayage & Slingor:** För ett naturligt, solkysst resultat.
- **Färgning:** Från rot-touch-up till helförändring.
- **Olaplex & Kur:** Återuppbyggande behandlingar för maximal glans.

### Om William / Salongen
- En sektion som betonar hantverket, personlig service och den lugna miljön.
- Bild på William eller salongens inredning (ljusa ytor, speglar, guldiga detaljer).

### Footer
- Kontaktinfo, Instagram-länk, adress.
- Öppettider med en "Pulse-dot" som visar om salongen är öppen nu.

## 4. Design-detaljer (CSS Requirements)
- **Hörn:** Använd `rounded-full` för knappar och minst `rounded-3xl` för kort.
- **Typsnitt:** - Rubriker: 'Playfair Display' (Serif)
  - Brödtext: 'Inter' (Sans-serif) med `tracking-wide`.
- **Interaktion:** Hovring över en tjänst ska ge en mjuk färgförändring eller en subtil uppskalning av bilden.