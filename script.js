var cislo1 = 0;
var cislo2 = 0;
var spusteno = false;

window.addEventListener('load', (event) => {
    nactiPriklad();
  });

function nactiPriklad(){
    cislo1 = Math.floor(Math.random() * 51);
    cislo2 = Math.floor(Math.random() * 51);
    document.getElementById("cislo1").innerHTML = cislo1;
    document.getElementById("cislo2").innerHTML = cislo2;
    document.getElementById("vysledek").value = "";
}

document.getElementById("formular").onsubmit = function(event) {
    event.preventDefault();
    if(document.getElementById("vysledek").value == cislo1 + cislo2){
        document.getElementById("jidlo").value += 5;
    }

    spustHru();
    nactiPriklad();
}

function uberJidlo(){
    document.getElementById("jidlo").value -= 1;

    if(document.getElementById("jidlo").value == 0){
        alert("Čert je kaput!");
        zastavHru();
    }else{
        window.setTimeout(uberJidlo, 1000);   
    }
    
}

function spustHru(){
    if(spusteno == false){
        uberJidlo();
    }

    spusteno = true;
}

function zastavHru(){
    spusteno = false;
    document.getElementById("jidlo").value = 30;
}