# Objektorienteret programmering

_Online forløb afviklet i marts/april 2020 af Michell Cronberg._

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
    - Objektorienteret principper
      - Abstraktion
      - Indkapsling
      - Nedarvning
      - Polymorfi
    - Klasser og strukturer
    - Hukommelsesteori
      - Stack/Heap
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

### Meget nem "Hello World"

Sørg for at have .NET Core og Visual Studio Code installeret, og få oprettet og afviklet en Hello world-applikation. Find videoer til alle tre ting ovenfor.

### Lidt mere kompleks "Hello World x2"

Skab en ny konsol applikation (se video ovenfor - dit første program), men i stedet for at udskrive "Hello world!" skal applikationen:

- Ved hjælp af en for-løkke tælle og udskrive tal fra 0-9
  - Hvis tallet er mindre eller lig med 4 skal den skrive \* samt tal
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

</details>

### Den svære ti-tabel

Ved hjælp af 2 for-løkker skal du skabe en 10-tabel på console der ser således ud:

```csharp
  1   2   3   4   5   6   7   8   9  10
  2   4   6   8  10  12  14  16  18  20
  3   6   9  12  15  18  21  24  27  30
  4   8  12  16  20  24  28  32  36  40
  5  10  15  20  25  30  35  40  45  50
  6  12  18  24  30  36  42  48  54  60
  7  14  21  28  35  42  49  56  63  70
  8  16  24  32  40  48  56  64  72  80
  9  18  27  36  45  54  63  72  81  90
 10  20  30  40  50  60  70  80  90 100
```

For at løse den som jeg brugt [PadLeft](https://docs.microsoft.com/en-us/dotnet/api/system.string.padleft?view=netframework-4.8)-metoden på string for at få beløb til at stå under hinanden - men se hvordan du kan løse opgaven.

### Løsning

<details><summary>Her er min løsning</summary>

```csharp
using System;

namespace demo
{
    class Program
    {
        static void Main(string[] args)
        {
            for (int xx = 1; xx < 11; xx++)
            {
                string linie = "";
                for (int yy = 1; yy < 11; yy++)
                {
                    string tal = (xx * yy).ToString();
                    linie += tal.PadLeft(4);
                }
                Console.WriteLine(linie);
            }
        }
    }
}
```

</details>
