// alert ('hey')
// 
let form = document.form
let firstname = form.firstname,
    lastname = form.lastname,
    id = form.idnumber,
    dob = form.dob,
    address = form.address,
    zip = form.zipcode;

let arry = [firstname, lastname, id, dob, address, zip];

arry.forEach(item => {
    let span = document.createElement('span');
    span.classList.add(`error`);
    item.parentElement.append(span);
});

form.addEventListener("submit", function () {


    if (firstname.value == "") {
        firstname.nextElementSibling.innerText = 'Your Firstname is empty '

        //     e.preventDefult()
    }
    if (lastname.value == "") {
        lastname.nextElementSibling.innerText = 'Your Lastname is empty ';

    
    }
    if (id.value == "")
    {
        id.nextElementSibling.innerText = 'your ID Number is empty '

    }
    if (dob.value == "")
    {
        dob.nextElementSibling.innerText = 'Fill your Date Of Birth '

    }
    if (address.value == "")
    {
        address.nextElementSibling.innerText = 'Your Adress is missing '
    }
    if (zip.value == "")
    {
        zip.nextElementSibling.innerText = 'Zipcode is Missing '

        e.preventDefult();
    }
})