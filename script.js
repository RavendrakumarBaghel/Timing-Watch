function displayTime(){
    var dateTime=new Date();
    var hrs=dateTime.getHours();
    var min=dateTime.getMinutes();
    var sec=dateTime.getSeconds();

    const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

    let day = weekday[dateTime.getDay()];
    document.getElementById('days').innerHTML= (day);
    
   var ses=document.getElementById('session');

   if(hrs>=12){
    ses.innerHTML='PM';
    
   }
   else{
    ses.innerHTML='AM';
   }
   if(hrs>12){
    hrs=hrs-12;
   }
   
    document.getElementById("hours").innerHTML=hrs;
    document.getElementById("minutes").innerHTML=min;
    document.getElementById("seconds").innerHTML=sec;
   

}
setInterval(displayTime,10);