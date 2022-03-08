# PartnerBanka-1-zadatak
Izračunavanje vremena planirane zarade
Zadatak

Napraviti web aplikaciju koja računa koliko je sati potrebno raditi da bi zaradili neki iznos. Omogućiti unos mjesečne neto plaće, broj radnih dana u mjesecu i iznos. Pretpostavljamo da se svaki dan radi 8 sati. Nakon unosa aplikacija treba prikazati koliko je sati potrebno raditi da bi zaradili uneseni iznos. Ako je broj sati veći od 8, rješenje treba prikazati kao "X dana i Y sati".
Podatke nije potrebno spremati u bazu. Možete koristiti bilo koji programski jezik i tehnologije.

Primjer:
Input:
neto plaća: 6.700,00 kn
broj radnih dana: 22
iznos: 1.264,00 kn
Output:
4 dana i 2 sata

01 Zadatak PSEUDOKÔD vrijemeCiljaneZarade.txt
==========================================
1. zadatak poslodavca: Partner banka
==========================================
== Upotreba tehnologija
	HTML CSS Javascript
	
== PSEUDOKÔD HTML
Sastavi web-obrazac koju obuhvaća
	Polja		
		Neto-plaća
		Broj radnih dana
		Željeni iznos zarade
	Dugme
		Izračunaj 
			vrijeme potrebno za željenu zaradu

== PSEUDOKÔD CSS
Oblikuj stranicu i njezine elemente
	Minimalistički prijelom
	Minimalistički izgled

== PSEUDOKÔD Javascript
Sastavi Javascript-kôd koju obuhvaća
	Konstante		
		brojRadnihSatiDnevno
	Varijable
		ukupnoSatiRada
		cijeliDaniRada
		cijeliSatiRada
	Funkcije		
		Odredi konstante
		Očitaj unesene vrijednosti i spremi u varijable
		Izračunaj ukupne sate željene zarade
		Pretvori ukupne sate u dane i sate
