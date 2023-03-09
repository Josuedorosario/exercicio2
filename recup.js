function somar(){
var n1=Number(window.document.getElementById('n1').value)
var n2=Number(window.document.getElementById('n2').value)
var s=n1+n2
var dv=window.document.querySelector('div.msg')

dv.innerHTML=`O resultado é igual a= ${s}`
dv.style.background='Red'
}