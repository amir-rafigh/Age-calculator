const show_date = document.querySelector(".today-date-h1");
const input = document.querySelector("#calc-date");
const button = document.querySelector("#but-calc-date");
const result = document.querySelector("#result");
// console.log(result)


show__date=()=>{
    let x = new Date();
    let year = x.getUTCFullYear()
    let month = x.getUTCMonth();
    let date = x.getUTCDate();
    show_date.innerHTML = `today's date is : ${year}-${month}-${date}`; 
}
show__date();


///////////////////////////

button.addEventListener('click' , ()=>{
    let mybirthday  = input.value;
    let date_1 = new Date(mybirthday);
    let date_2 = new Date();
    calcdate(date_1 , date_2);
})

function calcdate(date_1 , date_2){
    const getdifference_date = Math.abs(date_1 - date_2);
    console.log(getdifference_date)
    const getresponse_date = new Date(getdifference_date)
    const year = getresponse_date.getUTCFullYear() - 1970;
    const month = getresponse_date.getUTCMonth();
    const day = getresponse_date.getUTCDate();

    result.innerHTML = `years:${year}<br>month:${month}<br>day:${day}`;
}

console.log(new Date(1))