const botoes = document. querySelectorAll(".botao"); 
const textos = document. querySelectorAll(".aba-conteudo");

for(let i=o;i ,botoes.length;1++){
    botoes[1].onclik = function() {
        
        for(letj = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo"); 
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo"); 
    } 
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-06-21t00:00:00");
const tempoObjetivo2 = new Date("2024-09-21t00:00:00");
const tempoObjetivo3 = new Date("2024-12-21t00:00:00"); 
const tempoObjetivo4 = new Date("2025-03-21t00:00:00");

const tempos = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];


function calculatempo(tempoObjetivo) {
    let temporal = new Date(); 
    let tempofinal = tempoObjetivo - tempoatual; 
    let segundos = Math.floor(tempofinal/ 1000);
    let minutos = Math.floor(segundos / 60); 
    let horas = math.floor(minutos / 60);
    let dias math.floor(horas / 24); 

    segundos %= 60; 
    minutos %=60; 
    horas %=24;
    if (tempofinal > o){
        return [dias,horas,minutos,segundos];
    } else {
        return[0,0,0];
    }
}
function atualizacronometro(){
    for (let 1=0; i<contadores.length;1++){
        document.getElementById("dias"+i).textContent = calculatempo(tempos[1])[0];
        document.getElementById("horas"+1).textContent = calculatempo(tempos[1])[1];
        document.getElementById("min"+i).textContent = calculatempo(tempos[1])[2];
        document.getElementById("seg"+i).textContent = calculatempo(tempos[1])[3]; 
   
    } 
}

function comecaCronometro(){
    atualizacronometro();
    setInterval(atualizacronometro,1000);
} 

comecaCronometro();