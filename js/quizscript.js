
window.addEventListener("load", loadQuiz);

function loadQuiz() {
    console.log("loadQuiz");

    document.querySelector(".next").addEventListener("click", questionOne);
    document.querySelector("#two").classList.add("display_none");
    document.querySelector("#two").addEventListener("click", questionTwo);
    document.querySelector("#three").classList.add("display_none");
    document.querySelector("#three").addEventListener("click", questionThree);
    document.querySelector("#four").classList.add("display_none");
    document.querySelector("#four").addEventListener("click", questionFour);
    document.querySelector("#five").classList.add("display_none");

}

function questionOne() {
    document.querySelector("#one").classList.add("display_none");
    document.querySelector("#two").classList.remove("display_none");
}

function questionTwo() {
    this.classList.add("display_none");
    document.querySelector("#three").classList.remove("display_none");
}

function questionThree() {
    this.classList.add("display_none");
    document.querySelector("#four").classList.remove("display_none");
}

function questionFour() {
    this.classList.add("display_none");
    document.querySelector("#five").classList.remove("display_none");
}
