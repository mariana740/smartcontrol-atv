 const elementoBemVindo = document.querySelector("#BemVindo");
 const nomeUsuario = prompt("Digite seu nome completo:");



const DiasSemana = [

    "Domingo", "Segunda-Feira","Terça-Feira",
    "Quarta-Feira","Quinta-Feira", "Sexta-feira", 
    "Sabado"

] ;



function atualizarDataHora () {
const dataAtual = new Date();



const diaSemana = DiasSemana[dataAtual.getDay()];
const dia = String(dataAtual.getDate()).padStart(2, "0");
const mes = String(dataAtual.getMonth() + 1).padStart(2,"0");
const ano = dataAtual.getFullYear();




const hora = String(dataAtual.getHours()).padStart(2,"0");
const minuto = String(dataAtual.getMinutes()).padStart(2,"0");
const segundo = String(dataAtual.getSeconds()).padStart(2, "0");



elementoBemVindo.textContent =
    'Olá, ${nomeUsuario}! Hoje é ${diaSemana} - ${hora}: ${minuto}: ${segundo}';


elementoBemVindo.style.color = "#ffffff";


}


atualizarDataHora();


setInterval(AtualizarDataHora, 1000);

   const btnTema = document.getElementById('btnTema');
   
    if (btnTema) {
        btnTema.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            const ehEscuro = document.body.classList.contains('dark-theme');
            btnTema.textContent = ehEscuro ? 'Light Mode' : 'Dark Mode';
        });
    }


   
    const campoBusca = document.getElementById('campoBusca');
    const formBusca = document.getElementById('formBusca');
    const linhas = document.querySelectorAll('#tabelaDispositivos tbody tr');


   
    if (formBusca) {
        formBusca.addEventListener('submit', (e) => e.preventDefault());
    }


    if (campoBusca) {
        campoBusca.addEventListener('input', (e) => {
            const termo = e.target.value.toLowerCase();
           
            linhas.forEach(linha => {
                const texto = linha.textContent.toLowerCase();
                linha.style.display = texto.includes(termo) ? '' : 'none';
            });
        });
    }


   
    const btnMenuToggle = document.getElementById('btnMenuToggle');
    const sidebar = document.getElementById('sidebar');


    if (btnMenuToggle && sidebar) {
        btnMenuToggle.addEventListener('click', (e) => {
            e.preventDefault();
            sidebar.classList.toggle('active');
        });
    }
;

