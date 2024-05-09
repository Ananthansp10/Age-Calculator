
let userdob=document.getElementById("dateInput");
userdob.max=new Date().toISOString().split("T")[0]


function calculateage(){
  let birthdate=new Date(userdob.value)
  
  y1=birthdate.getFullYear();
  m1=birthdate.getMonth()+1;
  d1=birthdate.getDate();

  let today= new Date();

  y2=today.getFullYear();
  m2=today.getMonth()+1;
  d2=today.getDate();


  let y3,m3,d3;

  y3=y2-y1;
  if(m2>=m1){
    m3=m2-m1;
  }
  else{
    y3=y3-1;
    m3=12-(m1-m2);
  }

  if(d2>=d1){
    d3=d2-d1;
  }
  else{
    m3=m3-1;
    if(m3==0){
        m3="nearing to this"
    }
    td=detdaysinmonth(y1,m1)
    d3=td-(d1-d2);
  }
  document.getElementById("displaytext").style.visibility="visible"


  document.getElementById("displaytext").innerHTML="you are "+y3+ " Years "+m3+ " Month "+d3+ " Days old"

  if(m2==m1 && d2==d1){
     document.getElementById("text").innerHTML="Happy Birthday to you"
}

function detdaysinmonth(year,month){
    return new Date(year,month,0).getDate();
}

}