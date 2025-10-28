// Máscara CPF
document.getElementById("cpf").addEventListener("input", function() {
    let value = this.value.replace(/\D/g, '');
    if (value.length > 3) value = value.replace(/(\d{3})(\d)/, "$1.$2");
    if (value.length > 6) value = value.replace(/(\d{3})(\d)/, "$1.$2");
    if (value.length > 9) value = value.replace(/(\d{3})(\d)/, "$1-$2");
    this.value = value;
});

// Máscara telefone
document.getElementById("telefone").addEventListener("input", function() {
    let value = this.value.replace(/\D/g, '');
    value = value.replace(/(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d{5})(\d)/, "$1-$2");
    this.value = value;
});

// Máscara CEP
document.getElementById("cep").addEventListener("input", function() {
    let value = this.value.replace(/\D/g, '');
    value = value.replace(/(\d{5})(\d)/, "$1-$2");
    this.value = value;
});

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("show");
});
