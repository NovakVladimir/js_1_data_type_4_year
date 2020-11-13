function yearMessage() {
    let myYear = document.getElementById("yearNumb").value;
    let result = document.getElementById("message");
    if((myYear % 400 === 0) || (myYear % 100 !== 0) && (myYear % 4 === 0)) {
        result.innerHTML="It is a leap year";
        result.style.color = "orange";
        result.style.fontSize = "50px";
        result.style.border = "5px solid rgba(200,100,100,1)";
    }
    else {
        result.innerHTML="It isn't a leap year";
        result.style.color = "black";
        result.style.fontSize = "40px";
        result.style.border = "none";
    }
}
