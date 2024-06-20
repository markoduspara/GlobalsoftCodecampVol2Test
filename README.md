# GlobalsoftCodecampVol2Test

GlobalsoftCodecampVol2Test

## Zadatak: Izrada aplikacije za prikazivanje slika

**Opis projekta**

Izradite web aplikaciju koja omogućava korisnicima da dodaju, pregledaju, i brišu slike. Aplikacija će imati front-end i back-end komponentu, kao i bazu podataka za pohranu podataka o slikama.

**Frontend (React)**

1.  Napravite React aplikaciju koja omogućava korisnicima da:

- Dodaju novu sliku sa imenom, opisom, linkom I boolean poljem za grayscale
- Prikazuju učitane slike u tablici sa paginacijom kao na slici
- Brišu slike iz tablice

3.  Koristite odgovarajući CSS za stiliziranje aplikacije.
4.  Koristiti useState I useEffect Hookove za upravljanje radom frontenda.

**Backend (NestJS)**

1.  Napravite NestJS aplikaciju koja omogućava:

- Dodavanje URLova slika s frontenda
- Dohvaćanje podataka iz baze za prikaz na frontu
- Uređivanje podataka o slikama
- Brisanje slika sa servera.

3.  Rute koje trebate implementirati:

- POST /images: ruta za dodavanje slika.
- GET /images: ruta za dohvaćanje svih slika.
- DELETE /images/:id : ruta za brisanje određene slike.
- PATCH /images/:id : ruta za uređivanje podataka slika

**Baza podataka (MYSQL)**

1.  Spremite informacije o učitanim slikama (name,descrpition,link,grayscale) u MySQL bazu podataka u tablicu web_images.

**Dodatni zahtjevi**

1.  Implementirajte migraciju kako bi ste omogućili spremanje grayscale u bazu
2.  Implementirajte CSS na frontendu baziran na vrijednosti grayscale dobivene iz baze. (npr: _img {  
    -webkit-filter: grayscale(100%);  
    filter: grayscale(100%);  
    }_

3.  Kreirati Entity za tablicu iz baze sa svim kolonama

4.  Primjenite DTO validacije na svim kontorlerima I servisima backenda, zajedno sa class validatorima
5.  Omogućiti prikaz samo 6 slika sa implementiranom paginacijom na frontu I backu.
6.  Korigirati docker-compose file kako bi se applikacija mogla uspješno pokrenuti.

Mockup frontenda se nalazi u file-u \_mockup.png.
