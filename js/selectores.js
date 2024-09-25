window.onload=inicio;

//creamos referencia parra ahorrar codigo
function inicio(){
    //cuando elemento cosa surga un click cambia
    document.getElementById("cosa").onclick=cambio_color;
}

function cambio_color(){
    var x=document.getElementById("cosa").style;
    x.color="red";
    x.backgroundColor="blue";
    x.border="4px dotted green";

}