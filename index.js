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