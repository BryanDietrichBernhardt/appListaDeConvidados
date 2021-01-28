class Convidados {
    constructor() {
        this.convidados = JSON.parse(localStorage.getItem("convidados")) || [];
    }
    salvarConvidados() {
        localStorage.setItem("convidados", JSON.stringify(classConvidados.convidados));
    }
    listarConvidados() {
        elLista.innerHTML = "";

        for(const convidado of classConvidados.convidados){ //cria variavel convidado armazenando todos os convidados, const faz variavel voltar do inicio depois do for para n ficar travado no ultimo elemento
            let elConvidado = document.createElement("li"); // cria um elemento em html
            let elNome = document.createTextNode("Nome: "+convidado.name); // cria um elemento de texto contendo o nome de cada convidado
            let elIdade = document.createTextNode(" | Idade: "+convidado.age);
            let elCPF = document.createTextNode(" | CPF: "+convidado.CPF + " ");

            var elExcluir = document.createElement("a"); // cria elemento do tipo 'a' (link)
            elExcluir.setAttribute("href","#"); // atribui link clicavel
            elExcluir.onclick = () => {
                classConvidados.convidados = classConvidados.convidados.filter(item => {(item.CPF !== convidado.CPF)}); //retorna todos os itens, menos o clicado
                
                classConvidados.salvarConvidados();
                classConvidados.listarConvidados();
            };

            const elExcluirTexto = document.createTextNode("Excluir"); // cria o texto "excluir"

            elExcluir.appendChild(elExcluirTexto); // coloca o elemento elExcluirTexto dentro do elExcluir
            elConvidado.appendChild(elNome); // coloca o elemento elNome dentro do elConvidado
            elConvidado.appendChild(elIdade);
            elConvidado.appendChild(elCPF);
            elConvidado.appendChild(elExcluir); // coloca o elemento elExcluir dentro do elConvidado
            elLista.appendChild(elConvidado) // coloca o elemento elConvidado dentro do elLista
        }

    }
}
const classConvidados = new Convidados();

// document.getElementByClass('lista')
// document.getElementById('#lista')
// document.querySelector('#lista li')
const elLista = document.getElementById("lista");
const elNome = document.getElementById("name");
const elIdade = document.getElementById("age");
const elCPF = document.getElementById("cpf");

document.getElementById("botao").onclick = () => {
    let name = elNome.value; //armazena o valor do campo nomes na var nome
    let age = elIdade.value;
    let CPF = elCPF.value;
    classConvidados.convidados.push({name: name, age: age, CPF:CPF});
    //convidados.push({name: name, age: age, CPF:CPF}); // adiciona o valor do var Nome nos convidados
    elNome.value = ""; // limpa o campo
    elIdade.value = "";
    elCPF.value = "";

    classConvidados.salvarConvidados();
    classConvidados.listarConvidados();
} //quando clicar no botao, chama a funcao para adicionar convidado

classConvidados.listarConvidados();