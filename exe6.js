function tabuada(){
    var n=document.getElementById('num_id')
    let tab=document.getElementById('seltab')
    var res=document.querySelector('div.resultado')
        if(n.value.length==0){
            window.alert('Erro. Por favor insira um número')
        }else{
            let num=Number(n.value)
            tab.innerHTML=''
            for(var c=1;c<=10;c++){
                var item =document.createElement('option')
                item.text=`${num} x ${c}=${num*c}`
                tab.appendChild(item)
        }
}
}