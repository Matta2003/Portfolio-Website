const Titel1 = "Vestiginsmanager groothandel";
const Titel2 = "Associate degree Informatica";
const DefaultlTitel = document.getElementById("TitelIk").textContent;

const Image1 = "image1.jpg"; // Replace with the path to your first image
const Image2 = "image2.jpg"; // Replace with the path to your second image
const DefaultImage = "default-image.jpg";

const Tekst1 = "<p>Bij mijn eerste vervolgopleiding heb ik mijn diploma voor Vestiginsmanager groothandel gehaald Crebo-code Kerntaken van de Vestiginsmanager groothandel is:</p> <br><br> <ul> <li>Onderzoekt de markt en doet voorstellen voor commercieel beleid</li> <li>Voert het verkooptraject uit</li> <li>Zorgt voor relatiebeheer en klantenservice</li> <li>Geeft het vestiginsbeleid vorm</li> <li>Runt de vestiging</li> </ul> <br><br> <p>ook kreeg ik door deze diploma een bij behorende kwalificatiedossier: Commercie (Crebo-code 23064)</p>";

const Tekst2 = "<p>Nu ben ik bezig met associate degree informatica hier word ik opgeleid tot een softwareontwikkelaar die een belangrijke bijdrage kan leveren aan het bouwen van software voor toepassingen in bijvoorbeeld de zorg, de logistiek en de financiële wereld </p><br><br> <p>In mijn opleiding ik leer over:</p> <br><br> <ul><li>Web Applicaties</li> <li>Systeem Applicaties</li> <li>Mobiele Applicaties</li> <li>Machine Learning</li> <li>Internet of Things</li></ul><br><br> <p>na de 3de blok kan je 3 richtingen kiezen namelijk:</p> <br><br> <ul> <li>Appdesigner en -developer</li> <li>systemdeveloper</li> <li>websitedesigner en -developer</li></u><br><br> <p>wat mijn keuze word weet ik nog niet omdat ik net begonnen met deze opleiding</p>";
const DefaultTekst = document.getElementById("TekstIk").textContent;

let getal2 = 0; 


function updateContent() {
    if (getal2 === 1) {
        document.getElementById("TitelIk").textContent = Titel1;
        document.getElementById("TekstIk").innerHTML = Tekst1;
		// document.getElementById("imageIk").src = Image1;
    } else if (getal2 === 2) {
        document.getElementById("TitelIk").textContent = Titel2;
        document.getElementById("TekstIk").innerHTML = Tekst2;
        // document.getElementById("imageIk").src = Image1;
    } else if (getal2 === 0) {
        document.getElementById("TitelIk").textContent = DefaultlTitel;
        document.getElementById("TekstIk").textContent = DefaultTekst;


    }
}


document.getElementById("Rechts").addEventListener("click", () => {
    getal2++; 
    if (getal2 > 2) getal2 = 0; 
    updateContent(); 
});

document.getElementById("Links").addEventListener("click", () => {
    getal2--; 
    if (getal2 < 0) getal2 = 2; // If less than 0, set it to 2
    updateContent(); 
});

