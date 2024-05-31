document.addEventListener("DOMContentLoaded", function() {
    // Inicializa a biblioteca AOS
    AOS.init();

    function configurarBotao2() {
        let botao = document.getElementById("meuBotao");

        if (botao) {
            botao.addEventListener("click", function() {
                window.open("http://127.0.0.1:5500/contatos/contatos.html", "_blank");
            });
        } 
    }

    function configurarBotao1() {
        let botao2 = document.getElementById("meubotao1");

        if (botao2) {
            botao2.addEventListener("click", function() {
                window.open("http://127.0.0.1:5500/consoles/console.html", "_blank");
            });
        } 
    }

    function configurarBotaoX() {
        let botaoX = document.getElementById("meuBotaoX");

        if (botaoX) {
            botaoX.addEventListener("click", function() {
                window.open("http://127.0.0.1:5500/consoles/console.html", "_blank");
            });
        } else {
            console.error("Elemento com o ID 'meuBotaoX' não encontrado.");
        }
    }

    function configurarBotaoS() {
        let botaoS = document.getElementById("meuBotaoS");

        if (botaoS) {
            botaoS.addEventListener("click", function() {
                window.open("http://127.0.0.1:5500/consoles/console.html", "_blank");
            });
        } else {
            console.error("Elemento com o ID 'meuBotaoS' não encontrado.");
        }
    }

    function configurarBotaoPS5() {
        let meuBotaoPS5 = document.getElementById("meuBotaoPS5");

        if (meuBotaoPS5) {
            meuBotaoPS5.addEventListener("click", function() {
                window.open("http://127.0.0.1:5500/consoles/console.html", "_blank");
            });
        } else {
            console.error("Elemento com o ID 'meuBotaoS' não encontrado.");
        }
    }

    // Chama as funções para configurar os eventos de clique nos botões
    configurarBotao2();
    configurarBotao1();
    configurarBotaoX();
    configurarBotaoS();
    configurarBotaoPS5()

});
