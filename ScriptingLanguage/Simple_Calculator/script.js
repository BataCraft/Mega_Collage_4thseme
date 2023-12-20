

let = num1 = document.getElementById("op1")
let = num2 = document.getElementById ("op2")
let = res = document.getElementById("result")

document.getElementById("plus").addEventListener("click", function(){
    res.value = parseInt(num1.value) + parseInt (num2.value)
    
});
document.getElementById("minus").addEventListener("click", function(){
    res.value = +(num1.value) - +(num2.value)
});

document.getElementById("multiplcation").addEventListener("click", function(){
    res.value = +(num1.value) * +(num2.value)
});


document.getElementById("division").addEventListener("click", function(){
    res.value = +(num1.value) / +(num2.value)
});

document.getElementById("mod").addEventListener("click", function(){
    res.value = +(num1.value) % +(num2.value)
})