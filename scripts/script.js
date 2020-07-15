let SkillsChoice = $(".section-skills__choice");
let choiceCheck = $('.section-skills__choice-check');
let checkbox = $('.checkbox');
let dynamicText = $("#dynamic-text");
let dynamicArrow = $("#dynamic-arrow");
let colorText = ["#ffc816", "#a3cd3b", "#0093d7"];

let valueCf = 1000.0 / choiceCheck.length;
let rotateCf = 180.0 / choiceCheck.length;


checkbox.on("click",function() {
    choiceCheck.eq(checkbox.index(this)).toggle();
    DisplayCountingScale();
});

function DisplayCountingScale(){
    let activeCheckBox = $('.section-skills__choice-check:visible').length;
    let deg = activeCheckBox * rotateCf;

    dynamicText.text(Math.round(activeCheckBox * valueCf));
    dynamicText.css("color", colorText[Math.floor(deg/60)]);
    console.log(deg);
    dynamicArrow.css("transform", "rotate(" + deg + "deg)");
}








function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }
    else{
        document.querySelector('body').classList.add('no-webp');
    }
});