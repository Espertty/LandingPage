function enviaWhats(){
    if (validaForm()){
        vaiProWhats();
    }
}

function vaiProWhats(){
    const nome = document.getElementById('name')?.value;
    const email = document.getElementById('email')?.value;
    const whatsApp = document.getElementById('whatsApp')?.value;
    const msg = document.getElementById('msg')?.value;

    const texto = `Name: ${nome}\nEmail: ${email}\nWhatsApp: ${whatsApp}\nMensagem: ${msg}`;
    const textoCodificado = encodeURIComponent(texto);
    const numeroWhatsApp = '5547992848725'; // Insira o número de telefone do WhatsApp aqui (apenas números)
    const url = `https://wa.me/${numeroWhatsApp}?text=${textoCodificado}`;

    window.open(url, '_blank');

}

function validaForm(){
    const form = document.querySelector('form');
    const inputs = form.querySelectorAll('input');
    const textarea = form.querySelector('textarea');
    let formValido = true

    inputs.forEach(input => {
        if (!input.checkValidity()) {
            input.classList.add('invalid');
            formValido = false;
        } else {
            input.classList.remove('invalid');
        }
    });

    const textareaValue = textarea.value.trim()

    if (textareaValue.length === 0 ) {
        textarea.classList.add('invalid');
        formValido = false;
    } else {
        textarea.classList.remove('invalid');
    }  

    return formValido
}

function mascaraTelefone(telefone){
const text = telefone.value;
const formatedText = text.replace(/\D/g, '').substring(0, 11);

let telefoneFormatado = formatedText.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');

if (textoApenasNumeros.length < 11) {
    telefoneFormatado = formatedText.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
}

telefone.value = telefoneFormatado;

}

const campoTelefone = document.getElementById('whatsApp');
campoTelefone.addEventListener('input', function () {
    mascaraTelefone(this);
});