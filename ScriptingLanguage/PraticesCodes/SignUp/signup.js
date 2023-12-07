let form = document.sign_up;
let fullname = form.fname,
email = form.email;

form.addEventListener("submit", function(e){
    if(fullname.value == ''){
    console.log("Plese fill up your form");
    e.preventDefault();
    }
    if(email.value == ''){
        console.log("plese fill up email");
        e.preventDefault();
    }
    // console.log();
});

