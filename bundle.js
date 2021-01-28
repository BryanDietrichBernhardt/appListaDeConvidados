"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Convidados = /*#__PURE__*/function () {
  function Convidados() {
    _classCallCheck(this, Convidados);

    this.convidados = JSON.parse(localStorage.getItem("convidados")) || [];
  }

  _createClass(Convidados, [{
    key: "salvarConvidados",
    value: function salvarConvidados() {
      localStorage.setItem("convidados", JSON.stringify(classConvidados.convidados));
    }
  }, {
    key: "listarConvidados",
    value: function listarConvidados() {
      elLista.innerHTML = "";

      var _iterator = _createForOfIteratorHelper(classConvidados.convidados),
          _step;

      try {
        var _loop = function _loop() {
          var convidado = _step.value;
          //cria variavel convidado armazenando todos os convidados, const faz variavel voltar do inicio depois do for para n ficar travado no ultimo elemento
          var elConvidado = document.createElement("li"); // cria um elemento em html

          var elNome = document.createTextNode("Nome: " + convidado.name); // cria um elemento de texto contendo o nome de cada convidado

          var elIdade = document.createTextNode(" | Idade: " + convidado.age);
          var elCPF = document.createTextNode(" | CPF: " + convidado.CPF + " ");
          elExcluir = document.createElement("a"); // cria elemento do tipo 'a' (link)

          elExcluir.setAttribute("href", "#"); // atribui link clicavel

          elExcluir.onclick = function () {
            classConvidados.convidados = classConvidados.convidados.filter(function (item) {
              item.CPF !== convidado.CPF;
            }); //retorna todos os itens, menos o clicado

            classConvidados.salvarConvidados();
            classConvidados.listarConvidados();
          };

          var elExcluirTexto = document.createTextNode("Excluir"); // cria o texto "excluir"

          elExcluir.appendChild(elExcluirTexto); // coloca o elemento elExcluirTexto dentro do elExcluir

          elConvidado.appendChild(elNome); // coloca o elemento elNome dentro do elConvidado

          elConvidado.appendChild(elIdade);
          elConvidado.appendChild(elCPF);
          elConvidado.appendChild(elExcluir); // coloca o elemento elExcluir dentro do elConvidado

          elLista.appendChild(elConvidado); // coloca o elemento elConvidado dentro do elLista
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var elExcluir;

          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }]);

  return Convidados;
}();

var classConvidados = new Convidados(); // document.getElementByClass('lista')
// document.getElementById('#lista')
// document.querySelector('#lista li')

var elLista = document.getElementById("lista");
var elNome = document.getElementById("name");
var elIdade = document.getElementById("age");
var elCPF = document.getElementById("cpf");

document.getElementById("botao").onclick = function () {
  var name = elNome.value; //armazena o valor do campo nomes na var nome

  var age = elIdade.value;
  var CPF = elCPF.value;
  classConvidados.convidados.push({
    name: name,
    age: age,
    CPF: CPF
  }); //convidados.push({name: name, age: age, CPF:CPF}); // adiciona o valor do var Nome nos convidados

  elNome.value = ""; // limpa o campo

  elIdade.value = "";
  elCPF.value = "";
  classConvidados.salvarConvidados();
  classConvidados.listarConvidados();
}; //quando clicar no botao, chama a funcao para adicionar convidado


classConvidados.listarConvidados();
