
function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevapKontrol = function (cevap) {
    return cevap === this.dogruCevap;
}
let sorular = [
    new Soru("1-Hangisi js paket yönetimi uygulamasıdır?", {
        a: "Node.Js",
        b: "TypeScript",
        c: "Npm",
        d: "Nuget",
    }, "c"),
    new Soru("2-Hangisi .NET paket yönetimi uygulamasıdır?", {
        a: "Node.Js",
        b: "Nuget",
        c: "Npm",
    }, "b"),
    new Soru("3-Hangisi .NET paket yönetimi uygulamasıdır?", {
        a: "Node.Js",
        b: "Nuget",
        c: "Npm",
    }, "b"),
    new Soru("4-Hangisi .NET paket yönetimi uygulamasıdır?", {
        a: "Node.Js",
        b: "Nuget",
        c: "Npm",
    }, "b"),
]
