---
title: "Verbeteringen aan reijn.dev: Prestaties, Privacy en een eigen thema fork"
date: 2026-04-05T12:00:00+02:00
draft: false
description: "Een blik op de recente wijzigingen aan deze site: Google Analytics verwijderd, het thema geforkt, overgestapt op Hugo's eigen asset pipeline, en een betere Lighthouse-score nagestreefd."
tags:
  - Hugo
  - Prestaties
  - Privacy
---

De afgelopen weken heb ik een reeks verbeteringen doorgevoerd aan deze site. Van de buitenkant weinig zichtbaar, maar onder de motorkap een flinke opschoning. Hier een kort overzicht van wat er is veranderd en waarom.

## Google Analytics verwijderd

De meest voor de hand liggende wijziging: Google Analytics is eruit. Lighthouse signaleerde 60 KiB aan ongebruikte JavaScript die bij elk paginabezoek van Google's servers werd geladen. Naast de prestatiekosten voelde het ook tegenstrijdig om een site over privacy te beheren terwijl er stilzwijgend een externe tracker meedraaide. Weg ermee.

## Het thema geforkt

Deze site gebruikt [hello-friend-ng](https://github.com/rhazdon/hugo-theme-hello-friend-ng) als thema. In de loop van de tijd had ik een verzameling layout-overschrijvingen opgebouwd die verspreid lagen over de `layouts/` map van de site. In plaats van die losse overschrijvingen bij te houden, heb ik het thema geforkt naar [Reijnn/hugo-theme-hello-friend-ng](https://github.com/Reijnn/hugo-theme-hello-friend-ng) en de wijzigingen daar geconsolideerd. De `layouts/` map op siteniveau bevat nu alleen wat echt sitespecifiek is (zoals `robots.txt`), terwijl de rest in de fork zit. Dit maakt de verhouding tussen site en thema veel overzichtelijker.

## Vite ingeruild voor Hugo's eigen asset pipeline

De JS-build werd voorheen verzorgd door Vite, wat extra configuratie en een extra bouwstap vereiste. Hugo heeft al een tijdje een capabele ingebouwde asset pipeline — die kan bundelen, minificeren, fingerprinting toepassen en SRI-hashes genereren. Door daarnaar over te stappen kon ik Vite en zijn configuratie volledig verwijderen, JS-bronbestanden naar `assets/` verplaatsen waar Hugo ze verwacht, en een hoop lijmcode schrappen.

Als onderdeel hiervan ben ik ook overgestapt van `config.toml` naar `hugo.toml` en heb ik het Content-Security-Policy in `firebase.json` aangescherpt.

## Lighthouse-optimalisaties

Met de basis op orde heb ik een Lighthouse-ronde gedaan:

- **Typewriter-script inline gezet** op de homepage. Het werd als apart bestand geladen, wat een kritieke request chain van 499ms veroorzaakte. Door het als IIFE direct in de HTML in te linjen, vervalt die extra roundtrip.
- **Font preload hints toegevoegd** voor Inter Regular en Bold, zodat de browser lettertypen eerder in het laadproces ophaalt.
- **Absolute font-paden gecorrigeerd** in de thema-fork, zodat lettertypen correct worden opgelost ongeacht de base URL.
- **Voettekstcontrast verbeterd** om te voldoen aan WCAG AA — de tekst in de footer haalde de vereiste contrastverhouding niet.

Kleine wijzigingen, maar de site is sneller, privacyvriendelijker en makkelijker te onderhouden.
