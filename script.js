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
    startTimer(10);
    startTimerLine();
});

ui.btn_next.addEventListener("click", function () {
    if (quiz.sorular.length != quiz.soruIndex +1) {
        quiz.soruIndex += 1;
        clearInterval(counter);
        clearInterval(counter_line);
        startTimerLine();
        startTimer(10);
        ui.soruGoster(quiz.soruGetir());   
        ui.soruSayisi(quiz.soruIndex + 1,quiz.sorular.length);
        ui.btn_next.classList.remove("show");
    } else {
        // console.log("Soruları tamamladınız.");
        clearInterval(counter);
        clearInterval(counter_line);
        ui.quiz_box.classList.remove("active");
        ui.score_box.classList.add("active");
        ui.skoruGoster(quiz.sorular.length , quiz.dogruCevap);
    }
});
//Moved to ui.js
// const option_list = document.querySelector(".option_list");
// const correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
// const incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>';

ui.btn_quit.addEventListener("click", function(){
    window.location.reload();
});
ui.btn_replay.addEventListener("click", function(){
    quiz.soruIndex = 0;
    quiz.dogruCevap = 0;
    ui.btn_start.click();
    ui.score_box.classList.remove("active");
});

function optionSelected(option){
    clearInterval(counter);
    clearInterval(counter_line);
    let cevap = option.querySelector("span b").textContent;
    // console.log(cevap); 
    let soru = quiz.soruGetir();
    // console.log(soru);

    if(soru.cevapKontrol(cevap)){
        quiz.dogruCevap += 1;
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
let counter;
function startTimer(time){
    counter = setInterval(timer, 1000);

    function timer(){
        ui.time_second.textContent = time;
        time--;
        if(time < 0 ){
            clearInterval(counter);
            
            ui.time_text.textContent = "Süreniz Bitti...";

            let cevap = quiz.soruGetir().dogruCevap;

            for (let option of ui.option_list.children){
                if(option.querySelector("span b").textContent ==cevap){
                    option.classList.add("correct");
                    option.insertAdjacentHTML("beforeend",ui.correctIcon);
                }
                option.classList.add("disabled");//eğer şık işaretlenmezse süre dolduğunda otomatik şıkkı işaretler ve kullanıncının işaretlemesini önler.
            }
            ui.btn_next.classList.add("show");
        }
    }
}

let counter_line;
function startTimerLine(){
    let line_width = 0;

    counter_line = setInterval(timer,20);
    
    function timer(){
        line_width +=1;
        ui.time_line.style.width = line_width + "px";
        if(line_width > 549){
            clearInterval(counter_line);
    }
}
}

