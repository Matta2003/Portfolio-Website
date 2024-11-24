const Titel1 = "Waarom ik deze Opleiding doe";
const Titel2 = "Mijn Hobby's";
const DefaultlTitel = document.getElementById("TitelIk").textContent;

const Image1 = "computer.png"; 
const Image2 = "ik3.png"; 
const DefaultImage = "ik2.png";

const Tekst1 = "Ik doe deze opleiding omdat ik achterkwam in me vorige opleiding dat ik de economische soort banen niet zo interresant vond, ik besloot toen om voor ICT te kiezen omdat ik al destijds zat te twijfelen om in de ICT te gaan en toen ik hoorde dat er een associate degree informatica in de buurt was de keuze snel gemaakt.";
const Tekst2 = "Mijn hobby's zijn op het moment Tennis en voetbal, ik speel tennis bij smash met een groepje van 4 die bestaan uit familie en vrienden, voetbal deed ik vroeger bij MOC 17 alleen op het moment speel ik het niet vanwege een schouder blessure";
const DefaultTekst = document.getElementById("TekstIk").textContent;

let getal2 = 0; 


function updateContent() {
    if (getal2 === 1) {
        document.getElementById("TitelIk").textContent = Titel1;
        document.getElementById("TekstIk").textContent = Tekst1;
		document.getElementById("Foto").src = Image1;
    } else if (getal2 === 2) {
        document.getElementById("TitelIk").textContent = Titel2;
        document.getElementById("TekstIk").textContent = Tekst2;
        document.getElementById("Foto").src = Image2;
    } else if (getal2 === 0) {
        document.getElementById("TitelIk").textContent = DefaultlTitel;
        document.getElementById("TekstIk").textContent = DefaultTekst;
        document.getElementById("Foto").src = DefaultImage;
    }
}


document.getElementById("Rechts").addEventListener("click", () => {
    getal2++; 
    if (getal2 > 2) getal2 = 0; 
    updateContent(); 
});

document.getElementById("Links").addEventListener("click", () => {
    getal2--; 
    if (getal2 < 0) getal2 = 2; 
    updateContent(); 
});



function ResetKop1() {
    const width = window.innerWidth; 
    if (width <= 500) {
        document.getElementById("TitelIk").textContent = DefaultlTitel;
        document.getElementById("TekstIk").textContent = DefaultTekst;
        document.getElementById("Foto").src = DefaultImage;
       
    } 
}

window.addEventListener('resize', ResetKop1);
ResetKop1();


