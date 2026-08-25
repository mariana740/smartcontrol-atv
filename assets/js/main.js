function textoMensagemBoasVindas() {
    let nomeUsuario = prompt("Digite seu Nome Completo:");
    if (nomeUsuario  === "") {
        nomeUsuario = "Usuário";
    }
    const atual = new Date();
    const diaSemana = ["Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sábado"];
    const textoSemana = diaSemana[atual.getDay()];
    let dia = String(atual.getDate());
    if (atual.getDate() < 10) {
        dia = "0" + dias;
    }
    let mes = String(atual.getMonth() + 1);
    if (atual.getMonth() + 1 < 10) {
        mes = "0" + mes;
    }
    const ano = atual.getFullYear();
    let horas = String(atual.getHours());
    if (atual.getHours() < 10) {
        horas = "0" + horas;
    }
    let minutos = String(atual.getMinutes());
    if (atual.getMinutes() < 10) {
        minutos = "0" + minutos;
    }
    const fuso = "-03:00";
    const atualmente = ` ${textoSemana}, ${dia}/${mes}/${ano} - ${horas}:${minutos} (${fuso}) `;
    const texto = ` Olá, ${nomeUsuario}! Hoje é ${atualmente} `;
    const formularioLogout = document.querySelector("header form");
    if (formularioLogout) {
        formularioLogout.childNodes[0].textContent = texto + " ";
    }
    console.log(texto);
}
textoMensagemBoasVindas();

