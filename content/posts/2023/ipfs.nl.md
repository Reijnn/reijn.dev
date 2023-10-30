---
title: "Hugo Websites Hosten op IPFS"
date: 2023-10-30T20:05:27+01:00
draft: false
tags:
  - IPFS
  - Hugo
---

De IPFS versie van deze pagina is te vinden op: https://ipfs.reijn.dev

Het gedecentraliseerde web is de toekomst, en IPFS (InterPlanetary File System) is een van de pioniers op dit gebied. IPFS is een peer-to-peer protocol voor het opslaan en benaderen van bestanden, websites, applicaties en meer. Combineer dat met Hugo - een snelle en moderne static site generator, en je hebt een recept voor een gedecentraliseerde en razendsnelle website. Hier lees je hoe je je Hugo website op IPFS host.

1. Wat je nodig hebt:
   Een website gebouwd met Hugo
   IPFS geïnstalleerd op je computer
   Een vleugje enthousiasme voor het gedecentraliseerde web!
2. Bouw je Hugo website:
   Voordat je iets naar IPFS kunt uploaden, moet je je website bouwen met Hugo. Navigeer naar de hoofdmap van je Hugo-site en voer uit:

```
hugo --minify
```
Dit genereert een 'public' map met daarin je gebouwde site.

3. Voeg je website toe aan IPFS:
   Navigeer naar de 'public' map:

```
cd public
```
Voeg nu deze map toe aan IPFS:

```
ipfs add -r .
```
Je krijgt een hash voor elk bestand en één voor de hele map. Noteer de hash voor de map, omdat dit het adres van je website op IPFS vertegenwoordigt.

4. Toegang tot je website:
   Je website is nu live op IPFS! Om er toegang toe te krijgen, ga je naar elke openbare IPFS gateway en voeg je jouw hash toe:

```
https://ipfs.io/ipfs/[Your_Directory_Hash]
```
Vervang [Jouw_Map_Hash] door de hash die je in de vorige stap hebt genoteerd.

5. Houd je site toegankelijk:
   IPFS vertrouwt op peers om inhoud te hosten. Als niemand gedurende een langere periode toegang heeft tot je website, kan deze ontoegankelijk worden. Overweeg om je website vast te zetten met services zoals Pinata of je eigen dedicated IPFS node te draaien voor consistente beschikbaarheid.

## Conclusie:
Het hosten van een Hugo-website op IPFS is een eenvoudig proces dat het beste van statische webgeneratie combineert met de veerkracht en visie van het gedecentraliseerde web. Het is niet alleen in lijn met een opener en vrijer internet, maar biedt ook een blik op hoe het web van de toekomst eruit zou kunnen zien.