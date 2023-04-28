// Selecionando meus elementos do html

const botao_darkmode = document.querySelector('.botao_darkmode');
const botao_lightmode = document.querySelector('.botao_lightmode');
const all = document.querySelector('.all');
const breakfast = document.querySelector('.breakfast');
const lunch = document.querySelector('.lunch');
const milkshake = document.querySelector('.milkshake');
const linhas = document.querySelectorAll('.linha');

// Funções muda-display

function mostraTudo(){
    for(linha of linhas){
        linha.style.display = "table-row";
    }
}

function mostraAlmoco(){
    reset();
    for(linha of linhas){
        if(!linha.classList.contains('lunch')){
            linha.style.display = "none";
        }
    }
}

function mostraCafe(){
    reset();
    for(linha of linhas){
        if(!linha.classList.contains('breakfast')){
            linha.style.display = "none";
        }
    }
}

function mostraShake(){
    reset();
    for(linha of linhas){
        if(!linha.classList.contains('milkshake')){
            linha.style.display = "none";
        }
    }
}

// Função reset

function reset(){
    for(linha of linhas){
        linha.style.display = "table-row";
    }
}

// Função Cores

function mudaTema(tema){
    const cssFile = document.getElementsByTagName("link")[0];

    if(tema === 'dark'){
        cssFile.setAttribute("href", "./assets/css/darkmode.css");
    }else{
        cssFile.setAttribute("href", "./assets/css/style.css");
    }
};

// Funções OnClick

all.onclick = function(){
    mostraTudo();
}

breakfast.onclick = function(){
    mostraCafe();
}

lunch.onclick = function(){
    mostraAlmoco();
}

milkshake.onclick = function(){
    mostraShake();
}

botao_darkmode.onclick = function(){
    localStorage.setItem("theme", "dark");
    mudaTema('dark');
}

botao_lightmode.onclick = function(){
    localStorage.setItem("theme", "light");
    mudaTema('light');
}
