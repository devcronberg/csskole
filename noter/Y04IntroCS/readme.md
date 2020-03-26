# Objektorienteret programmering
*Online forløb afviklet i marts/april 2020 af Michell Cronberg.*

## Introduktion til C\# 

<a target="_blank" href="https://www.youtube.com/watch?v=5beTdtMZI_M"><img src="http://cdn.cronberg.dk/kurser/div/youtube.png" alt="Video" width="100"></a>

I det følgende antages at du har erfaring med programmering fra et eller andet sprog!

### C\# 

- Det primære sprog i .NET (se også F#, Visual Basic og det spændende Q#)
  - Skabt af et team ledet af [Anders Hejlsberg](https://en.wikipedia.org/wiki/Anders_Hejlsberg)
    - Borland: Turbo Pascal, Delphi
- [Historien bag](http://ithistorie.cronberg.dk/?maerker=csharp,det_vi_husker&sortering=faldende)
  - Flere runtimes
    - .NET Core
    - .NET Framework
    - Mono / Xamarin
- Benytter "c" syntaks
  - tuborg klammer
  - semikolon
- Forskel på store og små bogstaver
- Mellemrum, whitespace, tabulering, linjeskift har ingen betydning
- Ingen linjenumre
- UniCode
- Paradigmer
  - Iterativt og proceduralt
  - Objektorienteret
  - Funktionsorienteret
- Typestærkt og typesikkert
  - Alle variabler mv skal erklæres til en konkret type, og du (og runtime) kan være sikker på, at kode udelukkende kan arbejde i det adresserum det har lov til
- Alt er baseret på typer
  - Enumerations
  - Strukturer
  - Klasser
  - Interfaces
  - Delegates

### Eksempler 
  - Namespace
    - System er det grundlæggende namespace
  - Simple variabeltyper
    - int
    - double
    - string
    - bool
    - DateTime
  - Flow
    - if
    - for
  - Fejlhåndtering
    - try/catch