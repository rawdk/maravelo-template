/*Her i toppen, er der 'send' knappen, som skal få alt JavaScripten til at fungere */
var btn = document.querySelector(".send");
btn.addEventListener("click", send);

//Henvendelsesvalg, de tre radiobuttons som der skal trykkes på for at vælge et bestemt emne man skriver om
var ditValg = [
    { //første plads i Arrayet - plads 0
    q:"Vælg herunder hvad du henvender dig omkring",
    a:["Split-Leasing", "Hent tilbud", "Andet"],
    },
];
var count = 0; 

var qElement = document.querySelector(".radiovalg"); 
var optionsElement = document.querySelector(".valg")


function runProgram(){
     qElement.innerHTML = ditValg[count].q

     var aElements = "<form>"

     ditValg[count].a.forEach(answer => {
         aElements += '<input type="radio" id="radio" name="answer" value="'+ answer +'"><label>'+ answer +'</label>' 
     })

 optionsElement.innerHTML = aElements 

}


runProgram();


/* Dette sættes ind for at sikre at brugeren skriver mere end et bogstav i hver boks, så man får de nødvendige oplysninger*/
function send (){
    var inputNavn = document.querySelector (".navn").value;
    var inputMail = document.querySelector (".mail").value;
    var inputEmne = document.querySelector (".emne").value;
    var inputDinBesked = document.querySelector (".dinbesked").value;

    if(inputNavn.length>=2 && inputMail.length>=5 && inputEmne.length>=5 && inputDinBesked.length>=50){
        

    var textField = document.querySelector(".text1");
    textField.innerHTML = "<h3>Din besked er sendt og du vil hurtigst muligt modtage et svar på din mail</h3>";

/* Herunder er der indsat JavaScript til at fortælle om brugeren har indtastet nok oplysninger i de forskellige felter */
    console.log(inputNavn, inputMail, inputEmne, inputDinBesked);
    }else{
        alert("Udfyld felterne eller tjek at du har sat kryds i felterne")
    }
}

/* JS elementer nedenfor, gør så teksten er rød indtil det ønskede antal tegn er skrevet */
var inputNavn1 = document.querySelector (".navn");
inputNavn1.addEventListener("keydown", function(){
    if(inputNavn1.value.length <=0){
        inputNavn1.style.color="#f21020";
    }else{
        inputNavn1.style.color="#55b650";
    }
})

var inputMail1 = document.querySelector (".mail");
inputMail1.addEventListener("keydown", function(){
    if(inputMail1.value.length <=4){
        inputMail1.style.color="#f21020";
    }else{
        inputMail1.style.color="#55b650";
    }
})

var inputEmne1 = document.querySelector (".emne");
inputEmne1.addEventListener("keydown", function(){
    if(inputEmne1.value.length <=4){
        inputEmne1.style.color="#f21020";
    }else{
        inputEmne1.style.color="#55b650";
    }
})

var inputDinBesked1 = document.querySelector (".dinbesked");
inputDinBesked1.addEventListener("keydown", function(){
    if(inputDinBesked1.value.length <=50){
        inputDinBesked1.style.color="#f21020";
    }else{
        inputDinBesked1.style.color="#55b650";
    }
})

