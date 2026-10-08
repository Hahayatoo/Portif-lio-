const botoes = document.querySelectorAll('.filtro');
const cards = document.querySelectorAll('.card');
const contador = document.getElementById('contador');

// filtro dos trabalhos
botoes.forEach(function (botao) {
  botao.addEventListener('click', function () {
    const filtro = botao.dataset.filtro;
    let visiveis = 0;

    botoes.forEach(function (b) {
      b.classList.remove('ativo');
    });
    botao.classList.add('ativo');

    cards.forEach(function (card) {
      if (filtro === 'todos' || card.dataset.categoria === filtro) {
        card.classList.remove('escondido');
        visiveis++;
      } else {
        card.classList.add('escondido');
      }
    });

    // atualiza o numero la do lado do titulo, tipo (02)
    contador.textContent = '(' + String(visiveis).padStart(2, '0') + ')';
  });
});

// se a imagem do projeto nao existir, esconde ela e fica so a letra
document.querySelectorAll('.card-img img').forEach(function (img) {
  img.addEventListener('error', function () {
    img.style.display = 'none';
  });
});

// menu do celular
const botaoMenu = document.getElementById('botaoMenu');
const menu = document.getElementById('menu');

function fecharMenu() {
  menu.classList.remove('aberto');
  botaoMenu.textContent = '☰';
  botaoMenu.setAttribute('aria-expanded', 'false');
  botaoMenu.setAttribute('aria-label', 'Abrir menu');
}

botaoMenu.addEventListener('click', function () {
  const abriu = menu.classList.toggle('aberto');

  if (abriu) {
    botaoMenu.textContent = '✕';
    botaoMenu.setAttribute('aria-expanded', 'true');
    botaoMenu.setAttribute('aria-label', 'Fechar menu');
  } else {
    fecharMenu();
  }
});

// fecha o menu quando clica em um link
menu.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', fecharMenu);
});

// se aumentar a tela (ex: virar o celular), fecha o menu
window.addEventListener('resize', function () {
  if (window.innerWidth > 800) {
    fecharMenu();
  }
});

// ano do rodape automatico
document.getElementById('ano').textContent = new Date().getFullYear();
