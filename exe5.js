function contar(){
    var i=document.getElementById('ini_id')
    var f=document.getElementById('fim_id')
    var p=document.getElementById('passo_id')
    var res= document.querySelector('div.resultado')
  if(i.value.length==0 || f.value.length==0 || p.value.length==0) {
        window.alert('ERRO')
        }else{
            res.innerHTML= ' Contando: '
                if(Number(i.value)<Number(f.value)){
                    for(var c=Number(i.value);c<=Number(f.value);c+=Number(p.value)){
                        res.innerHTML+= `${c} \u{1F449}`
                    }   
                 }else{
                    for(var c=Number(i.value);c>=Number(f.value);c-=Number(p.value)){
                        res.innerHTML+= `${c} \u{1F449}`
                    }
                 }    
                 res.innerHTML+=  `\u{1F3C1}`
        }
  }