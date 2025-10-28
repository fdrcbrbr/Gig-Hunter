# 🏪 Event aggregator i Next.js

Detta är en skoluppgift  där målet är att skapa en **minimalistisk sida som visar information om konserter**.

Plattformen visar upp ett urval av evenemang från ett externt API, är fullt responsiv och ha interaktiva inslag. 
Målet var att få praktisk erfarenhet av att arbeta med Server Components, Client Components, statiska och dynamiska routes, hantering av asynkron data samt externa API.




---
## 📦 Innehållsförteckning
- 📖 [Om projektet](#omprojektet)
- f(🗶) [Funktioner](#funktioner)
- ✨ [Teknologier](#teknologier)
- 🛠️ [Installation](#installation)
- 🚀 [Användning](#användning)
- 🧱 [Projektstruktur](#projektstruktur)
- 🤝 [Bidra](#bidra)
- ™️ [Licens](#licens)
- 📫 [Kontakt](#kontakt)

  ---
  
## Om projektet
📖
Syfte: Projektet är en skoluppgift och jag har byggt en evenemang samlare med Next.js 15 och App Router. 
Fokus ligger på att ge praktisk erfarenhet av Server Components, Client Components, dynamiska och statiska routes, 
asynkron datahantering från olika APIs.


Teknologier: Projektet använder Next.js 15 (App Router), TypeScript, React, och externt API (t.ex. Ticketmaster, Google Maps) för evenemangs info data. Mailchimp tar hand om mailing list audience.
Styling har skett med Tailwind CSS samt Shadcn. Git och GitHub har används för versionshantering och WAVE för tillgänglighetstestning.


Funktionalitet: Sidan inkluderar en startsida med menu (bara grafisk),  Hero-sektion med möjlighet att leta efter och filtrera evenemang (med eventuellt resultat som visar direkt under sektionen), en grid som visar en del kommande evenemang och en mailinig list sektion (listan hanteras utanför sidan av Mailchimp). Det finns också en admin sida som ger möjlighet att spara artister i en lista så man kan få ett mejl om dessa artister är aktiva.


Design och Tillgänglighet: Designen är egen skapad och anpassas för att vara responsiv och tillgänglig enligt WCAG-riktlinjer. WAVE används för att kontinuerligt testa tillgängligheten under utvecklingen.


---

## Funktioner
f(🗶)
- Startsida
- Hero med sökfält
- Filter för land, genre samt datum.
- Grid med evenemangs kort
- Mailing list
- Admin sida (spara vissa specifica artister inför mailing listen)

---

## Teknologier
✨
- [React](https://react.dev/)
  React är ett JavaScript-bibliotek för att bygga interaktiva och återanvändbara
  användargränssnitt med hjälp av komponenter, som effektivt uppdaterar endast de
  nödvändiga delarna av sidan tack vare Virtual DOM.
  
- [Next.js 15 (App router)](https://nextjs.org/)
  Next.js är ett React-ramverk som förenklar utvecklingen av moderna webbapplikationer
  genom att erbjuda server-side rendering (SSR), statisk generering (SSG), routning,
  API-stöd och optimering för SEO och prestanda – allt utöver Reacts grundfunktioner.
  
- [WAVE](https://wave.webaim.org/)
  WAVE (Web Accessibility Evaluation Tool) är ett verktyg för att utvärdera
  tillgängligheten på webbplatser, som hjälper utvecklare att identifiera och
  åtgärda problem enligt   riktlinjer som WCAG (Web Content Accessibility Guidelines)
  för att säkerställa att webbinnehåll är tillgängligt för alla användare,
  inklusive personer med funktionsnedsättningar.
  
- [Tailwind](https://tailwindcss.com/)
  Tailwind CSS är ett utility-first CSS-ramverk som gör det möjligt att snabbt designa
  anpassningsbara gränssnitt direkt i HTML med fördefinierade klasser, vilket minskar behovet
  av skräddarsydd CSS och förenklar responsiv och konsekvent styling.
  
- [Lucide](https://lucide.dev/)
  Lucide är ett öppen källkod-bibliotek med enkla, skalbara och anpassningsbara
  ikoner designade för webbprojekt, optimerade för användning
  med ramverk som React och Next.js.
  
- [Shadcn](https://ui.shadcn.com/)
  shadcn/ui är en samling anpassningsbara och tillgängliga React-komponenter,
  byggda med Radix UI och stylade med Tailwind CSS, som gör det enkelt att skapa
  vackra och funktionella gränssnitt direkt i ditt projekt.

---

## Installation
🛠️
```bash
# Klona repo
git clone https://github.com/fdrcbrbr/Gig-Hunter

# Gå in projektmappen
cd Gig-Hunter

#Installera beroenden
npm install

#Starta utvecklingsserver
npm run dev
```

---

## Användning
🚀 
* Startsida -> Menu (just grafisk)
* Hero -> leta efter specifika evenemang
* Grid -> Visar alltid en del kommande evenemang
* Mailing list -> Registreringen till listen genom MailChimp
* Admin -> Spara artister och få ett mejl när de turnerar

---

## Projektstruktur
🧱
```
|-- app/
|  |--page.tsx                      # Startsida
|  |---admin/page.tsx               # Admins landing sida
|     |--conmponents/               # Återanvändbara komponenter
|--components/                      # Återanvändbara komponenter
|--data/                            # Fetching och datahantering
|--lib/                             # Utility och Interfaces
```

---


## Bidra
🤝

Vill du bidra?

1. Forka projektet
2. Skapa en feature-branch (`git checkout ......`)
3. Commit & push
4. Skicka en Pull Request

---

## Licens
™️

Detta projekt är utvecklat i utbildningssyfte och är inte avsett för produktion.


