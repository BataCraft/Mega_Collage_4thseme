let form = document.contact
let firstname = form.firstname,
lastname = form.lastname,
phone = form.phone,
address = form.address

// var span = document.createElement('span');
// span.classList.add(`error`);
// firstname.parentElement.append(span);

// var span = document.createElement('span');
// span.classList.add(`error`);
// email.parentElement.append(span);

// var span = document.createElement('span');
// span.classList.add(`error`);
// phone.parentElement.append(span);

// var span = document.createElement('span');
// span.classList.add(`error`);
// lastname.parentElement.append(span);

/** instead of separate element creation as above, use loop */
let eleArr = [firstname, lastname, email, phone, address];
eleArr.forEach(item => {
    let span = document.createElement('span');
    span.classList.add(`error`);
    item.parentElement.append(span);
})

form.addEventListener("submit", function(e){
    if (firstname.value == "")
//     document.write("Plese Form fill up")
// e.preventDefult();
firstname.nextElementSibling.innerText = 'your Firstname is empty '
if (lastname.nextElementSibling.innerText = `Your last Name is Empty`);
})




// form.addEventListener("submit", function(e){
//     if(firstname.value == ''){
//     document.write("Plese fill up your form");
//     e.preventDefault();
//     firstname.nextElementSibling.innerText =  "first name is Empty..";
//     }
//     if(email.value == ''){
//         // console.log("plese fill up email");
//         email.nextElementSibling.innerText = 'Your Email is Empty'
//         e.preventDefault();
//     }
// });
// form.addEventListener("submit", function(e){
//     if(phone.value == ''){
//     // document.write("Plese fill up your form");
//     // e.preventDefault();  
//     phone.nextElementSibling.innerText =  "phone  is Empty..";
//     e.preventDefault();
//     }
// });


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
