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

const quiz = new Quiz(sorular);
//console.log(quiz.sorular[0].soruMetni); new Quiz(sorular) ile function Quiz(sorular) nesne kurucusuna sorular dizisini yolladık.Daha sonra bir alt satırında yazan kod ile gelen sorulardan 0.indexte bulunan 1.soruyu çektik.Deneme amaçlı yazdığım konsol kodunda quiz içindeki sorular dizisinin 0.indexteki elemanının soru metnini aldım.
const ui = new UI();

ui.btn_start.addEventListener("click", function (e) {
    ui.quiz_box.classList.add("active");
    ui.soruGoster(quiz.soruGetir());
    ui.soruSayisi(quiz.soruIndex + 1,quiz.sorular.length);
    ui.btn_next.classList.remove("show");
});

ui.btn_next.addEventListener("click", function () {
    if (quiz.sorular.length != quiz.soruIndex +1) {
        quiz.soruIndex += 1;
        ui.soruGoster(quiz.soruGetir());   
        ui.soruSayisi(quiz.soruIndex + 1,quiz.sorular.length);
        ui.btn_next.classList.remove("show");
    } else {
        console.log("Soruları tamamladınız.");
    }
});
//Moved to ui.js
// const option_list = document.querySelector(".option_list");
// const correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
// const incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>';


function optionSelected(option){
    // console.log(option);
    let cevap = option.querySelector("span b").textContent;
    // console.log(cevap); 
    let soru = quiz.soruGetir();
    // console.log(soru);
    if(soru.cevapKontrol(cevap)){
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend", ui.correctIcon);
        //Option div'inin içine "beforeend" yani bitişten önce son eleman olarak correctIcon değişkenini ekledik. Değişkenide 62.satırda tanımladık.
    }else{
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend", ui.incorrectIcon);
    }
    for(let i=0; i < ui.option_list.children.length; i++){
        ui.option_list.children[i].classList.add("disabled");
    }
    ui.btn_next.classList.add("show");
}

