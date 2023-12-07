let form = document.sign_up;
let fullname = form.fname,
email = form.email;

form.addEventListener("submit", function(e){
    if(fullname.value == ''){
    console.log("Plese fill up your form");
    e.preventDefault();
    }
    if(email.value == ''){
        // console.log("plese fill up email");
        // e.preventDefault();

        
        email.addEventListener("keyup", function(){
            console.log(this.value);
            if(this.value.indexOf("@") == -1)
            {
                console.log(`At least '@' sy,bol is required.`);
            }
            else if (this.value.indexOf("@") != this.value.lastIndexOf("@"))
            {
                console.log(`At least one '@' Symbol is not allowed.`);
            }
            else if (this.value.indexOf(".") != -1)
            {
                console.log(`At least one '.' Symbol is required`);
            }
            else{
                console.log(`OK`);
            }
        })
    }
    });

console.log(Array());
console.log(Object());
