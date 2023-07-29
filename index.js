let num=0;
let doc= document.getElementById('heading');
function addone(){
    num++;
   doc.innerHTML= num
}
function previous(){
    num--;
    doc.innerHTML=num
}
function Reset(){
    num= 0;
    doc.innerHTML=num 
}

let tab=2;
function table2(){
    document.getElementById('head3') .innerHTML=""
    for(let cou=1;cou<11;cou++){
        document.getElementById('head3').innerHTML+= tab+'x'+ cou+'='+tab*cou+ "<br>"
    }
}

function daynamic(isdp){
document.getElementById('head2') .innerHTML=""
for(let cou=1;cou<11;cou++){
    document.getElementById('head2').innerHTML+= isdp+'x'+ cou+'='+isdp*cou+ "<br>"
}
}


