
function time1() {
    a = new Date();
    let date = a.toLocaleDateString();
    let time = a.getHours()+':'+a.getMinutes()+':'+a.getSeconds();

    document.getElementById("time").innerHTML = time;
    document.getElementById("date").innerHTML = date;
}
setInterval(time1,1000);