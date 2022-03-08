// Globalna konstanta - pretpostavljeni broj dnevnih radnih sati je 8
const brojDnevnihRadnihSati = 8;

function preuzmiUnosKorisnika(HTMLobrazac) {
	let netoPlaca = HTMLobrazac.netoPlaca.value;
	// Preuzimanje vrijednosti upisanih na HTML-obrascu
	let brojRadnihDanaMjesečno = HTMLobrazac.brojRadnihDanaMjesečno.value;
	let potrebanNovac = HTMLobrazac.potrebanNovac.value;

	// Iniciranje vremenskih jedinica i rečenice za ispis rezultata  =============
	let imenicaDan = "dan";
	let imenicaSat = "sat";
	let rečenicaUvod = `Za ${potrebanNovac} kn morate raditi`;
	let rečenicaDan;
	let rečenicaVeznik;
	let rečenicaSat;

	// Izračunavanje vremena potrebnog za zaradu u satima i danima  ====================
	let vrijednostRadnogSata =
		netoPlaca / brojRadnihDanaMjesečno / brojDnevnihRadnihSati;
	let potrebniRadniSati = Math.ceil(potrebanNovac / vrijednostRadnogSata);
	let konačniSati = potrebniRadniSati % 8; // Ostatak cjelobrojnog dijeljenja
	let konačniDani = (potrebniRadniSati - konačniSati) / 8;

	// Imenicu dan iz jednine korigiraj u množinu (dana)
	if (konačniDani % 10 != 1) imenicaDan = imenicaDan + "a";
	// Dodavanje dana na rečenicu za ispis rezultata
	if (konačniDani > 0) rečenicaDan = `${konačniDani} ${imenicaDan}`;

	// Imenicu sat iz jednine korigiraj u dvojinu (sata), odnosno množinu (sati)
	let znamenkaJedinicaSati = konačniSati % 10; // Za kasnije namještanje ispravne sročnosti
	if (1 < znamenkaJedinicaSati && znamenkaJedinicaSati < 5)
		imenicaSat = imenicaSat + "a";
	if (4 < znamenkaJedinicaSati) imenicaSat = imenicaSat + "i";
	if (konačniSati > 0) rečenicaSat = `${konačniSati} ${imenicaSat}`;

	// Sastavi rečanicu za ispis rezultata na HTML-stranici =================================
	if (konačniDani != 0 && konačniSati != 0) rečenicaVeznik = "i";

	rečenicaRezultat = [rečenicaUvod, rečenicaDan, rečenicaVeznik, rečenicaSat]
		.filter(Boolean)
		.join(" ");

	// Ispiši rezultirajuću rečenicu na odgovarajuće mjesto u HTML-dokumentu
	document.getElementById("rečenicaRezultat").innerHTML = rečenicaRezultat;
}
