# Objektorienteret programmering
*Online forløb afviklet i marts/april 2020 af Michell Cronberg.*

## Dit første C\# program

<a target="_blank" href="http://youtu.be/-4eyBPRbwsU?hd=1"><img src="http://cdn.cronberg.dk/kurser/div/youtube.png" alt="Video" width="100"></a>

- Sørg for at have en mappe til kode - eksempelvis \\csskole\\helloworld
- Start Visual Studio Code 
  - File->Open folder
  - Vælg den nye tomme mappe (eksempelvis \\csskole\\helloworld)
  - Start terminal
    - view -> Terminal (ctrl+æ)
- Skriv i terminal

```
dotnet new console 
```
- Klik på program.cs og vent til VSC spørger om der ikke skal tilføjes konfiguration til afvikling af c# kode
  - Hvis der ikke kommer en dialog boks frem (vent lige lidt - kan godt tage lidt tid) så mangler du at installere C# extension - se [her](../Y02InstallationVSC/readme.md)
- Kør program
  - Run -> Run without debugging (Ctrl+F5)
  - Sæt et breakpoint på linje 9
    - Run -> Toggle breakpoint (F9)
    - Run -> Start debugging (F5)
      - Afvikling burde stoppe ved breakpoint
        - Fortsæt med F5
  
Tillykke - du har afviklet en C\# applikation!

