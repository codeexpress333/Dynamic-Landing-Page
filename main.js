//Get All Values With Data Show
const show = setInterval(() => {

    //Set Date
    const date = new Date();
    const todayDate = date.getDate();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const thismonth = months[date.getMonth()];

    //Add Zero When 1 Mintes Then Show 01
    function addZero(number) {
        return (parseInt(number, 10) < 10 ? '0' : '') + number;
    }

    const hours = date.getHours();
    const minutes = date.getMinutes();

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const thisday = days[date.getDay()];

    //Show All Data On Screen
    document.querySelector('.hours').innerHTML = addZero(hours);
    document.querySelector('.minutes').innerHTML = addZero(minutes);
    document.querySelector('#days').innerHTML = thisday;
    document.querySelector('#month').innerHTML = thismonth;
    document.querySelector('#today').innerHTML = todayDate;

}, 1000);

