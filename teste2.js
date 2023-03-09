function carregar(){
    var msg=document.getElementById('hora')
    var ima=window.document.querySelector('div#foto')
    var agora=new Date()
    var horas=5
    msg.innerHTML= `Agora são ${horas}horas.`

    if(horas>=0 && horas<12){
        //bom dia
        ima.innerHTML=('<img src="dia.jpg">')
        window.document.body.style.background='#84cef0'

    }else if(horas>=12 && horas<18){
        // boa tarde
        ima.innerHTML=('<img src="tarde.jpg">')
        window.document.body.style.background='#ffb84d'
    }else{
        //boa noite
        ima.innerHTML=('<img src="noite.jpg">')
        window.document.body.style.background='#1d1b35'
    }
}
