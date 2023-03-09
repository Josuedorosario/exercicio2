function verificar(){
    var data=new Date()
    var ano =data.getFullYear()
    var fano =document.getElementById('ano')
    var res=document.getElementsByTagName('p')[0]
    var dados=document.querySelector('div#dados')
    
    if(fano.value.length==0 || Number(fano.value)>ano){
        window.alert('ERRO')
    }else{
        var fsex=document.getElementsByName('sex_id')
        var idade=  ano - Number(fano.value)
        var genero=''
        var img= document.createElement('img')
        img.setAttribute('id','foto')
        
        if(fsex[0].checked){
            genero='Homem'
            if(idade>=0 && idade<10){
                //crianca
                img.setAttribute('src','menino.jpg')
            } else if(idade<21){
                //jovem
                img.setAttribute('src','jovemh.jpg')
            } else if(idade<50){
                //homem
                img.setAttribute('src','homem.jpg')
            }
            else{
                //idoso
                img.setAttribute('src','idoso.jpg')
            }
            
        } else if(fsex[1].checked){
            genero= 'Mulher'
            if(idade>=0 && idade<10){
                //crianca
                img.setAttribute('src','menina.jpg')
            } else if(idade<21){
                //jovem
                img.setAttribute('src','jovemf.jpg')
            } else if(idade<50){
                //homem
                img.setAttribute('src','mulher.jpg')
            }
            else{
                //idoso
                img.setAttribute('src','idosa .jpg')
            }
               
        }
        res.innerHTML=`é um/a ${genero} de ${idade} anos`
        res.appendChild(img)
        dados.style.height='470px'
    }
}