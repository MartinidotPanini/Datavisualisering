# Datavisualisering

## Introduktion

Dette projekt er et simpelt datavisualiseringsværktøj, der bruger Holiday API til at vise kommende helligdage i Danmark for året 2024. Brugeren kan vælge en måned og en dag, og applikationen vil vise den næste helligdag efter den valgte dato.

## Opsætning

For at køre dette projekt skal du have [p5.js](https://p5js.org/) biblioteket inkluderet i dit miljø.

## Kodeforklaring

De vigtigste komponenter i koden er:

- **URL Definition**: URL'en til Holiday API er defineret for at hente helligdagsdata for Danmark i 2024.
- **Setup Funktion**: Denne funktion initialiserer lærredet, baggrunden, dropdown-menuer til valg af måned og dag samt knapper til at hente resultater og genstarte applikationen.
- **Print Data Funktion**: Denne funktion behandler helligdagsdataene hentet fra API'et. Den beregner den næste helligdag efter den valgte dato og viser den på lærredet.
- **Restart Funktion**: Denne funktion rydder lærredet for at tillade et nyt valg.

## Sådan bruges det

1. Vælg en måned fra den første dropdown-menu.
2. Vælg en dag fra den anden dropdown-menu.
3. Klik på "Resultat" knappen for at hente og vise den næste helligdag efter den valgte dato.
4. Klik på "Restart" knappen for at rydde lærredet og foretage et nyt valg.

## Eksempel

Her er et eksempel på, hvordan applikationen fungerer:

1. Vælg "Januar" og "1" fra dropdown-menuerne.
2. Klik på "Resultat".
3. Applikationen vil vise den næste helligdag efter 1. januar 2024.

## Konklusion

Dette projekt demonstrerer, hvordan man bruger Holiday API med p5.js til at skabe et interaktivt datavisualiseringsværktøj. Det giver brugerne mulighed for nemt at finde kommende helligdage baseret på deres valgte dato.