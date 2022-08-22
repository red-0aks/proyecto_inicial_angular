function addZero(x){
    if(x < 10){
        x = '0' + x;
    }
    return x;
}
    
setInterval(function(){
  
    let dateInstance = new Date();
    // getHours: Bring us the hour | geMinutes Bring us the minutes | getSeconds Bring us the seconds
    let hour = dateInstance.getHours();
    let minute = dateInstance.getMinutes();
    let secs = dateInstance.getSeconds();
    // hour, minute and secs shoud display at least 2 digits (Addzero Function)
    hour = addZero(hour);
    minute = addZero(minute);
    secs = addZero(secs);

    // Getting current date | Month | Year
    let days = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
    let months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

    let day = days[ dateInstance.getDay() ];
    let today = dateInstance.getDate();
    let month = months[ dateInstance.getMonth() ];
    let fullYear = dateInstance.getFullYear();

    let displayDate = `<h4> ${day} ${today} de ${month} del ${fullYear} </h4>`;
    document.getElementById("show-date").innerHTML = displayDate;
      
    // We use textContent to insert the hour, minute and secs in our HTML document
    document.getElementById('my-time').textContent = `${hour}:${minute}:${secs}`;
},1000);
