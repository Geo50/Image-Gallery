let norway = document.getElementsByClassName("nor");
let italy = document.getElementsByClassName("it");
let germany = document.getElementsByClassName("ger");
let greece = document.getElementsByClassName("gre");

//GERMANY BUTTON

function germ_btn() {
    for (let i = 0; i < norway.length; i++) {
        if (norway[i].style.display === "inline-block") {
            norway[i].style.display = "none";
        }
        else {
            norway[i].style.display = "inline-block";
        }
    }
    for (let j = 0; j < italy.length; j++) {
        if (italy[j].style.display === "inline-block") {
            italy[j].style.display = "none";
        }
        else {
            italy[j].style.display = "inline-block";
        }
    }
    for (let k = 0; k < greece.length; k++) {
        if (greece[k].style.display === "inline-block") {
            greece[k].style.display = "none";
        }
        else {
            greece[k].style.display = "inline-block";
        }
    }
}


//NORWAY BUTTON

function nor_btn() {
    for (let i = 0; i < italy.length; i++) {
        if (italy[i].style.display === "inline-block") {
            italy[i].style.display = "none";
        } else {
            italy[i].style.display = "inline-block";
        }
    }
    for (let j = 0; j < greece.length; j++) {
        if (greece[j].style.display === "inline-block") {
            greece[j].style.display = "none";
        }
        else {
            greece[j].style.display = "inline-block";
        }
    }
    for (let k = 0; k < germany.length; k++) {
        if (germany[k].style.display === "inline-block") {
            germany[k].style.display = "none";
        }
        else {
            germany[k].style.display = "inline-block";
        }
    }
}


//GREECE BUTTON

function gre_btn() {
    for (let i = 0; i < norway.length; i++) {
        if (norway[i].style.display === "inline-block") {
            norway[i].style.display = "none";
        }
        else {
            norway[i].style.display = "inline-block";
        }
    }
    for (let j = 0; j < italy.length; j++) {
        if (italy[j].style.display === "inline-block") {
            italy[j].style.display = "none";
        }
        else {
            italy[j].style.display = "inline-block";
        }
    }
    for (let k = 0; k < germany.length; k++) {
        if (germany[k].style.display === "inline-block") {
            germany[k].style.display = "none";
        }
        else {
            germany[k].style.display = "inline-block";
        }
    }
}



//ITALY BUTTON

function it_btn() {
    for (let i = 0; i < norway.length; i++) {
        if (norway[i].style.display === "inline-block") {
            norway[i].style.display = "none";
        }
        else {
            norway[i].style.display = "inline-block";
        }
    }
    for (let j = 0; j < greece.length; j++) {
        if (greece[j].style.display === "inline-block") {
            greece[j].style.display = "none";
        }
        else {
            greece[j].style.display = "inline-block";
        }
    }
    for (let k = 0; k < germany.length; k++) {
        if (germany[k].style.display === "inline-block") {
            germany[k].style.display = "none";
        }
        else {
            germany[k].style.display = "inline-block";
        }
    }

}

