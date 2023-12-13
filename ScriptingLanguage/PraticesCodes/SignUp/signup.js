let form = document.sign_up;
let fullname = form.fname,
email = form.email;


let span = document.createElement(`span`);
    span.classList.add(`error`); //Use add/remove property with classList

    email.parentElement.append(span);

form.addEventListener("submit", function(e){
    if(fullname.value == ''){
    console.log("Plese fill up your form");
    e.preventDefault();
    fullname.nextElementSibling.innerText =  "Full name is Empty..";
    }
    if(email.value == ''){
        // console.log("plese fill up email");
        email.nextElementSibling.innerText = 'Your Email is Empty'
        e.preventDefault();
    }
});

email.addEventListener("keyup", function(){
    console.log(this.value);
    if(this.value.indexOf("@") == -1)
    {
        this.nextElementSibling.innerText = 'Please enter a valid email';
        // console.log(`At least '@' sy,bol is required.`);
    }
    else if (this.value.indexOf("@") != this.value.lastIndexOf("@"))
    {
        this.nextElementSibling.innerText = `At least one '@' Symbol is not allowed.`
        // console.log(`At least one '@' Symbol is not allowed.`);
    }
    else if (this.value.indexOf(".") != -1)
    {
        this.nextElementSibling.innerText = `At least one '.' Symbol is required`
        // console.log(`At least one '.' Symbol is required`);
    }
    else{
        this.nextElementSibling.innerText = `Email is valid`;
        // console.log(`OK`);
    }
})


console.log(Array());
console.log(Object());
