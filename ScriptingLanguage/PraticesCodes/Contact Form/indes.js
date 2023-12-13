let form = document.contact
let firstname = form.fullname,
lastname = form.lastname,
phone = form.phone

let span = document.createElement('span');
span.classList.add(`error`);
email.parentElement.append(span);
// addEventListener("submit", function(){
//     if(firstname.value == ""){
//         this.alert(`Your forget your name`);
//     }

//     if(lastname.value == "")
//     {
//         this.alert(`YOur Forget your last name`)
//     }
//     if(phone.value == "")
//     {
//         this.alert(`plese feel your contact`)
//     }
// })


form.addEventListener("submit", function(e){
    if(firstname.value == ''){
    console.log("Plese fill up your form");
    e.preventDefault();
    firstname.nextElementSibling.innerText =  "Full name is Empty..";
    }
    if(email.value == ''){
        // console.log("plese fill up email");
        email.nextElementSibling.innerText = 'Your Email is Empty'
        e.preventDefault();
    }
});

