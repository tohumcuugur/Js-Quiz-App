// *************Başlamadan for...in ve for...of kullanımı****************

// var dizi = ["Kayısı","Kiraz", "Muz"];

// for (var i in dizi) {

//   console.log(i);
// }
// 0
// 1
// 2

// for (var i of dizi) {

//   console.log(i);
// }
// Kayısı
// Kiraz
// Muz

//NOT : for...in tanımladığımız değişkene ( var i ) key değerlerini döndürür.  for...of  value değerlerini döndürür. fakat objectler ile kullanılamıyor.

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
    document.querySelector(".quiz_box").classList.add("active");
    soruGoster(quiz.soruGetir());
    soruSayisi(quiz.soruIndex + 1,quiz.sorular.length);
});

document.querySelector(".next_btn").addEventListener("click", function () {
    if (quiz.sorular.length != quiz.soruIndex +1) {
        quiz.soruIndex += 1;
        soruGoster(quiz.soruGetir());   
        soruSayisi(quiz.soruIndex + 1,quiz.sorular.length);
        document.querySelector(".next_btn").classList.remove("show");
    } else {
        console.log("Soruları tamamladınız.");
    }
});

const option_list = document.querySelector(".option_list");
const correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
const incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>';

function soruGoster(soru) {
    let question = `<span>${soru.soruMetni}</span>`;
    let options = '';

    for (let cevap in soru.cevapSecenekleri) { //Bu şekilde yazdığımızda eğer console.log(cevap) yazarsak bize a,b,c şeklinde bir dönüş verir. İndis değeri yani key değeri olan a,b,c cevap içine for döngüsü ile sırasıyla getirilir. Value değerine (a,b,c içerisindeki cevaplar) ulaşmak için ise console.log(soru.cevapSecenekleri[cevap]) şeklinde yazarsak soru.cevapSecenekleri[0,1,2,3] şeklinde yazmış oluruz ve bize value değerlerini döndürür. for(let cevap of .soru.cevapSecenekleri){console.log(cevap)} şeklinde bir kullanımda ise çıktı diğer value değerleri şeklinde olur. yani bu uygulamamızda şıkları direkt olarak verir.
        options +=
            `
            <div class="option">
                <span><b>${cevap}</b>:${soru.cevapSecenekleri[cevap]}</span>
            </div>
            `;
    }
    document.querySelector(".question_text").innerHTML = question;
    option_list.innerHTML = options;

    const option = option_list.querySelectorAll(".option")

    for(let opt of option){
        // console.log(opt);
        opt.setAttribute("onClick","optionSelected(this)");
    }
}

function optionSelected(option){
    // console.log(option);
    let cevap = option.querySelector("span b").textContent;
    // console.log(cevap); 
    let soru = quiz.soruGetir();
    // console.log(soru);
    if(soru.cevapKontrol(cevap)){
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend", correctIcon);
        //Option div'inin içine "beforeend" yani bitişten önce son eleman olarak correctIcon değişkenini ekledik. Değişkenide 62.satırda tanımladık.
    }else{
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend", incorrectIcon);
    }
    for(let i=0; i < option_list.children.length; i++){
        option_list.children[i].classList.add("disabled");
    }
    document.querySelector(".next_btn").classList.add("show");
}

function soruSayisi(soruSirasi,toplamSoru){
    let tag = `<span class="badge bg-warning">${soruSirasi}/${toplamSoru}</span>`;
    document.querySelector(".quiz_box .number_questions").innerHTML = tag;
}