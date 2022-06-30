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

function Quiz(sorular) {
    this.sorular = sorular;
    this.soruIndex = 0;
}

Quiz.prototype.soruGetir = function () {
    return this.sorular[this.soruIndex];
}
const quiz = new Quiz(sorular);
//console.log(quiz.sorular[0].soruMetni); new Quiz(sorular) ile function Quiz(sorular) nesne kurucusuna sorular dizisini yolladık.Daha sonra bir alt satırında yazan kod ile gelen sorulardan 0.indexte bulunan 1.soruyu çektik.Deneme amaçlı yazdığım konsol kodunda quiz içindeki sorular dizisinin 0.indexteki elemanının soru metnini aldım.
document.querySelector(".btn-start").addEventListener("click", function (e) {
    if (quiz.sorular.length != quiz.soruIndex) {
        document.querySelector(".quiz_box").classList.add("active");
        soruGoster(quiz.soruGetir());   
        quiz.soruIndex += 1;
    } else {
        console.log("Soruları tamamladınız.");
    }
});

function soruGoster(soru) {
    let question = `<span>${soru.soruMetni}</span>`;
    let options = '';

    for (let cevap in soru.cevapSecenekleri) {
        options +=
            `
            <div class="option">
                <span><b>${cevap}</b>:${soru.cevapSecenekleri[cevap]}</span>;
            </div>

            `;
    }
    document.querySelector(".question_text").innerHTML = question;
    document.querySelector(".option_list").innerHTML = options;
}