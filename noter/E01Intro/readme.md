# Objektorienteret programmering
*Online forløb afviklet i marts/april 2020 af Michell Cronberg.*

## Intro til forløbet


<a target="_blank" href="http://youtu.be/E7Aocm1Q0PM?hd=1"><img src="http://cdn.cronberg.dk/kurser/div/youtube.png" alt="Video" width="100"></a>

Her en agenda til video:

- Velkommen til
  - http://www.csskole.dk
  - [Videoer](https://www.youtube.com/channel/UCZ3FUWtw3OsLiEPmA_NbyDA/videos)
  - Noter
    - Hver video har sine egne noter
      - Opgaver
  - [Bogen om C#](http://www.bogenomcsharp.dk/)
  - [Generelle links](https://github.com/devcronberg/kursus/blob/master/README.md#indhold)
- Hvad er målet
  - Objektorienteret programmering med C\#
    - Klasser og strukturer
    - Hukommelsesteori
      - Stack/Heap
    - Objektorienteret principper
    - Felter
    - Indkapsling (get/set - egenskaber)
    - Metoder
    - Hændelser
      - Delegates
      - Lambda
    - Nedarvning
    - Interface
    - Polymorfi
  - Simple eksempler
    - Terning(er)
  - Prøv det selv
  - Opgaver
    - Simple
    - Lidt mere avancerede
- Installation af runtime og udviklingsmiljø
  - **EXTRA VIDEO**: [Installation af .NET Core](../Y01InstallationNetCore/readme.md)
  - **EXTRA VIDEO**: [Installation af Visual Studio Code](../Y02InstallationVSC/readme.md)
    - Kan jeg bruge Visual Studio (Windows/Mac)?
- Forudsætninger
  - Jeg antager du kender til grundlæggende programmering fra din uddannelse
    - Forløbet er ikke velegnet til studerende som ikke har nogen programmeringserfaring
      - Syntaks
      - Kompilering / Oversættelse
      - Hukommelse og variabler
      - Programflow
      - Fejlhåndtering
  - **EXTRA VIDEO**: [Introduktion til C#](..../Y04IntroCS/readme.md)
  - **EXTRA VIDEO**: [Dit første program - Hello World](../Y03HelloWorld/readme.md)

## Opgaver til dette modul

### Hello World

Sørg for at have .NET Core og Visual Studio Code installeret, og få oprettet og afviklet en Hello world-applikation. Find videoer til alle tre ting ovenfor.

### Hello World x2

Skab en ny konsol applikation (se video ovenfor - dit første program), men i stedet for at udskrive "Hello world!" skal applikationen:

- Ved hjælp af en for-løkke tælle og udskrive tal fra 0-9
  - Hvis tallet er mindre eller lig med 4 skal den skrive * samt tal
  - Hvis tallet er større end 4 skal den skrive ! samt tal

```
*0
*1
*2
*3
*4
!5
!6
!7
!8
!9
```

### Løsning

<details><summary>Her er min løsning</summary>
<p>
```csharp
using System;

namespace demo
{
    class Program
    {
        static void Main(string[] args)
        {
            for (int i = 0; i < 10; i++)
            {
                if (i <= 4)
                {
                    Console.WriteLine("*" + i);
                }
                else
                {
                    Console.WriteLine("!" + i);
                }

            }
        }
    }
}
```
</p>
</details>



