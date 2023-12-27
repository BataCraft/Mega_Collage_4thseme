
// Function to display time on the screen

function showTime(){
    let date = new Date()
let hrs = date.getHours(),
min = date.getMinutes(),
sec = date.getSeconds(),
month = date.getMonth(),
day = date.getDay(),
yrs = date.getFullYear(),
ddate = date.getDate();
let days = ['Sunday', 'MOnday','Tuesday', 'Wednesday', 'Thusday', 'Friday', 'Saturday' ];
let dat = ["jan", 'Feb', 'Mar', 'April', 'May', 'Jun', 'July',"Aug", "Sectember","Oct", "Nov", "December"]

var ampm = (hrs <= 12) ? "AM" : "PM";
hrs = (hrs <= 12) ? hrs : hrs (hrs - 12);

    document.getElementById("clock").innerHTML= (`${dat[month]} 
    ${ddate}, ${yrs}, ${hrs}:${min}:${sec} ${ampm}, ${days[day]} `)


}

setInterval(showTime, 1000);

let show = document.getElementById("show")
let hide = document.getElementById("hide")
let pg = document.getElementById("pg")
show.addEventListener( "click", function(){
    pg.style.display = "block";

})
hide.addEventListener( "click", function(){
    pg.style.display = "none";
    

})
hide.addEventListener( "click", function(){
    pg.style.display = "none";
    

})

