function matricular(){
    var cltxt=window.document.getElementById('cls')
    // var cl=Number(cltxt.value)
    var res=document.querySelector('div.resultado')
    if(Number(cltxt.value)==0 || Number(cltxt.value)>12){
        window.alert('ERRO')
    }else{

        var gen=document.getElementsByName('sex_id')
        if((gen[0].checked) && (Number(cltxt.value)<=9)){
            res.innerHTML='Temos apenas 30 vagas'
        }else if ((gen[1].checked) && (Number(cltxt.value)<=9)){
            res.innerHTML='Temos apenas 13 vagas'
        }else if ((gen[0].checked) && (Number(cltxt.value)>9) && Number(cltxt.value)<13){
            res.innerHTML='Temos apenas 25 vagas'
        }else if ((gen[1].checked) && (Number(cltxt.value)>9) && Number(cltxt.value)<13){
            res.innerHTML='Temos apenas 10 vagas'
        }   
    }
}
        /*

        if(Number(cltxt.value)>=1 && Number(cltxt.value)<=6{
            res.innerHTML='SUCESSO'
         }
         */  
  
