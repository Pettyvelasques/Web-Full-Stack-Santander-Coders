window.addEventListener("load", () => {
    const botao = document.getElementById("botao");

    botao.addEventListener("click",() => {
    // window.addEventListener("load", () => {
    
    // Tempo total que queremos contar, em segundos.
    let sec = 120;
    
    const countDiv = document.getElementById("timer");
    
    const secpass = () => {
    
        let min = Math.floor(sec/60);
        let segundosRestantes = sec % 60;
    
        if (segundosRestantes < 10) {
            segundosRestantes = "0" + segundosRestantes;
        }
    
        if (min < 10) {
            min = "0" + min;
        }
    
        // gera o formato de relogio com duas casas antes e depois dos dois pontos
        countDiv.innerHTML = min + ":" + segundosRestantes;
    
        // final do timer
        if (sec > 0) {
            sec = sec - 1;
        }
        else {
            countDiv.innerHTML = "Acabou!";
        }
    
    };
    
    const countDown = setInterval(() => secpass(), 1000);
    
    });
})