class Currency {
    constructor() {
        this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_B22GJJjWjkKNFj2NBtcs4PcwUh1URapjx0Ddz6E5&base_currency="
    }
    async eylem(miktar, birinciKutu, ikinciKutu) {
        const istek = await fetch(`${this.url}${birinciKutu}`)
        const istekVeri = await istek.json()
        const sonuc = miktar * istekVeri.data[ikinciKutu]
        return sonuc;
    }
}



