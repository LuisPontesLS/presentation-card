/*
OBJETIVO FINAL-  quando clicarmos na aba, temos que mostrar
o conteúdo da aba que foi clicada pelo usuário e esconder
o conteúdo da outra aba.

1 - dar um jeito de pegar es elementos HTML que 
representam as abas;

2 - dar um jeito de identificar o clique no elemento
que represnta a aba;

3 - quando o usuário clicar, desmarcar a outra aba;

4 - marcar a aba clicada como "selecionado";

5 - esconder o conteúdo anterios;

6 - mostrar o conteúdo da aba selecionada.
 */
//=================================================================
/*1 - dar um jeito de pegar es elementos HTML que 
representam as abas; CADA ABA É UMA 'LI' COM UMA
.aba*/

const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
    // 2 - dar um jeito de identificar o clique no elemento que represnta a aba;
    aba.addEventListener("click", function () {
        if (aba.classList.contains("selecionado")) {
            return;
        }
        //Fatoração:
        selecionarAba(aba)
        mostrarInformacoesDaAba(aba)
        // console.log("clicou na aba", aba); 
    })  
})

function selecionarAba(aba) {
     /* 3 - quando o usuário clicar, desmarcar a outra aba;
        VAI USAR A 'DOM' PARA DEMOVER A CLASS selecionado (linha 42 html)*/
        const abaSelecionada = document.querySelector(".aba.selecionado")
        abaSelecionada.classList.remove("selecionado")
        // 4 - marcar a aba clicada como "selecionado";
        aba.classList.add("selecionado")
}

function mostrarInformacoesDaAba(aba) {
    // 5 - esconder o conteúdo anterios;
    const informacaoSelecionada = document.querySelector(".informacao.selecionado")
    console.log(informacaoSelecionada);
    //escondendo o conteúdo:
    informacaoSelecionada.classList.remove("selecionado")

    // 6 - mostrar o conteúdo da aba selecionada.
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`
    
    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
    informacaoASerMostrada.classList.add("selecionado")
}