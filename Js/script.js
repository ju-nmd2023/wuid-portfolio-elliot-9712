document.getElementById("submitBtn").addEventListener("click", function(){

    let fname = document.getElementById("fname").value;

    if(fname !== ""){ // check if 'fname' input is not empty
        alert("Thanks for your message, " + fname);
    }
});