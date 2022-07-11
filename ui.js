function UI(){
    this.btn_start = document.querySelector(".btn-start"),
    this.btn_next = document.querySelector(".next_btn"),
    this.quiz_box = document.querySelector(".quiz_box"),
    this.option_list = document.querySelector(".option_list"),
    this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>',
    this.incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>'
} 

UI.prototype.soruGoster = function(soru) {
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
    this.option_list.innerHTML = options;

    const option = this.option_list.querySelectorAll(".option")

    for(let opt of option){
        // console.log(opt);
        opt.setAttribute("onClick","optionSelected(this)");
    }
}
UI.prototype.soruSayisi = function(soruSirasi,toplamSoru){
    let tag = `<span class="badge bg-warning">${soruSirasi}/${toplamSoru}</span>`;
    document.querySelector(".quiz_box .number_questions").innerHTML = tag;
}