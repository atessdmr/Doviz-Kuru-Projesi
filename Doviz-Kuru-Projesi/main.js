const miktarKutusu = document.querySelector("#miktarGirin");
const birinciParaKutusu = document.querySelector("#birinciParaBirimi");
const ikinciParaKutusu = document.querySelector("#ikinciParaBirimi");
const sonucKutusu = document.querySelector("#sonuc");
runEventListeners();
const currency = new Currency();
function runEventListeners() {
    miktarKutusu.addEventListener("input", eylem);
}
function eylem() {
    const miktarKutusuNumber = Number(miktarKutusu.value.trim())
    const birinciKutuEylemi = birinciParaKutusu.options[birinciParaKutusu.selectedIndex].textContent;
    const ikinciKutuEylemi = ikinciParaKutusu.options[ikinciParaKutusu.selectedIndex].textContent;

    currency.eylem(miktarKutusuNumber, birinciKutuEylemi, ikinciKutuEylemi)
        .then((result) => {
            sonucKutusu.value = result.toFixed(2);
        })
}