var i1,i2,i3,i4
var ingr=[]
function enter(){
    i1=document.getElementById("ingr1").value;
    i2=document.getElementById("ingr2").value;
    i3=document.getElementById("ingr3").value;
    i4=document.getElementById("ingr4").value;

    ingr.push(i1)
    ingr.push(i2)
    ingr.push(i3)
    ingr.push(i4)

    document.getElementById("ABCingr").innerHTML=ingr
    document.getElementById("send").style.display="none"
    document.getElementById("orgABCD").style.display="inline-block"
} 

function orgABC(){
    ingr.sort()
    document.getElementById("ABCingr").innerHTML=ingr
}