/*  Exercicio ver o maior numero
    function comparar(){
    var n1=document.getElementById('n1')
    var n2=document.getElementById('n2')
    var n3=document.getElementById('n3')
    var res=document.querySelector('div.resultado')
    if(n1.value.length==0 || n2.value.length==0 || n3.value.length==0){
        window.alert('ERRO')
    }else{
            if(Number(n1.value)>Number(n2.value) && Number(n1.value)>Number(n3.value)){
            res.innerHTML=` O maior numero é o ${Number(n1.value)} `
            } else if( Number(n2.value)>Number(n1.value) && Number(n2.value)>Number(n3.value) ){
                res.innerHTML=` O maior numero é o ${Number(n2.value)} `
                }else{
                    res.innerHTML=` O maior numero é o ${Number(n3.value)} ` 
                }
                
                if(Number(n1.value)<Number(n2.value) && Number(n1.value)<Number(n3.value)){
                    res.innerHTML+=` </br> O menor numero é o ${Number(n1.value)} `
                    } else if( Number(n2.value)<Number(n1.value) && Number(n2.value)<Number(n3.value) ){
                        res.innerHTML+=` </br> O menor numero é o ${Number(n2.value)} `
                        }else{
                            res.innerHTML+=` </br> O menor numero é o ${Number(n3.value)} `
            }
    }
}
*/
/*  Exercicio maior de idade
var idade=  Number(window.prompt('Digite a sua idade para saber se é maior de idade?'))
    if(idade>=18){
        window.alert('Pode acessar!! maior de idade')
    }else{
        window.alert('Acesso negado!! menor de idade')
    }
    */
/*  Exercicio media aritmetica
     function calcular(){
       var n1=Number(document.querySelector('input#n1').value)
       var n2=Number(document.querySelector('input#n2').value)
       var n3=Number(document.querySelector('input#n3').value)
       var media=(n1+n2+n3)/3
       var res=document.querySelector('div.resultado')
       res.innerHTML=`A media da soma de ${n1},${n2},${n3} é igual a ${media}`
     }
     */
/*  Exercicio IMC
     function calcular(){
        var idade=document.getElementById('idade_id')
        let sex=document.getElementsByName('sex')
        var peso=document.getElementById('peso_id')
        var altura=document.getElementById('altura_id')
        var res=document.querySelector('div.resultado')
             if(idade.value.length==0 || peso.value.length==0|| altura.value.length==0){
                window.alert('ERRO! por favor insira toos os dados')
             }else{
               // let genero=''
                var img= document.createElement('img')
                img.setAttribute('id','foto')
                let imc=Number(peso.value)/Number(((altura.value/100)**2))
                    if(sex[0].checked){
                        img.setAttribute('src','h-200.jpg')
                        res.innerHTML=` Homem. O seu IMC é de ${imc.toFixed(2)} </br>`
                        res.style.background='#5cb5ff8e'
                            if(imc<14.5){
                            res.innerHTML+=('<strong> Desnutrição </strong>')
                            } else if(imc<20){
                                    res.innerHTML+=('<strong> Abaixo do peso normal </strong>')
                                }else if(imc<25){
                                    res.innerHTML+=('<strong> Peso Normal </strong>')
                                } else if(imc<30){
                                    res.innerHTML+=('<strong> Sobrepeso </strong>')
                                } else if(imc<40){
                                    res.innerHTML+=('<strong> Obesidade </strong>')
                                }else{
                                    res.innerHTML+=('<strong> Obesidade Mórbida </strong>')
                                }
                    }else{
                        img.setAttribute('src','m-200.jpg')
                        res.innerHTML=` Mulher. O seu IMC é de ${imc.toFixed(2)}</br>`
                        res.style.background='#f7bad1b0'
                        if(imc<14.5){
                            res.innerHTML+=('<strong> Desnutrição </strong>')
                            }else if(imc<19){
                                    res.innerHTML+=('<strong> Abaixo do peso normal </strong>')
                                }else if(imc<24){
                                    res.innerHTML+=('<strong> Peso Normal </strong>')
                                } else if(imc<30){
                                    res.innerHTML+=('<strong> Sobrepeso </strong>')
                                } else if(imc<38.9){
                                    res.innerHTML+=('<strong> Obesidade </strong>')
                                }else{
                                    res.innerHTML+=('<strong> Obesidade Mórbida </strong>')
                                }
                    }
            } res.appendChild(img)
    }
    */
/*  Exercicios multiplos
   function multiplos(){
    var mlt5=0
    var mlt3=0
    var res= window.document.querySelector('div.resultado')
        res.innerHTML+=`Os multiplos de 3 e 5 são: </br>`
        for(var i=0;i<1000;i++){
            if(i%5===0 || i%3==0){
                res.innerHTML+=` -${i}  `
            }
        }
   }
   */
/*  Exercicios potencias
    function potencias(){
    var base=Number(document.getElementById('base_id').value)
    var n=0
    var res=document.querySelector('div.resultado')
        res.innerHTML='As potências são: '
            for(var i=0;i<=8;i++){
                n=base**i
                res.innerHTML+=`${base}<sup>${i}</sup>= ${n} </br> `
            }
       
}
*/
/*  Exercicios Delta 
       function calcular(){
            let a=Number(document.getElementById('na_id').value)
            let b=Number(document.getElementById('nb_id').value)
            let c=Number(document.getElementById('nc_id').value)
            let delta=(b**2)-4*a*c
            let res=document.querySelector('div.resul')
                res.innerHTML=` &Delta; = b<sup>2</sup>- 4ac </br>`
                res.innerHTML+=` &Delta; = ${b}<sup>2</sup>- 4.${a}.${c} </br>`
                res.innerHTML+=` &Delta; = ${b**2} - ${4*a*c}</br>`
                res.innerHTML+=` &Delta; = ${delta}`
}
*/
/*  Exercicios Media v2.0
      function media(){
    var nome=String(window.prompt('Insira o seu nome: '))
    var nota1=Number(window.prompt('Insira o valor da nota: '))
    var nota2=Number(window.prompt(`Alem de ${nota1} qual é o valor da outra nota: `))
    var media= (nota1+nota2)/2  
    var res=document.querySelector('div.situaçao') 
        res.innerHTML=` Calculando a media de ${nome} </br>`
        res.innerHTML+=` As notas obtidas foram: ${nota1} e ${nota2} </br>`
        if(media>9){
            res.innerHTML+=`A media final será: ${media}</br>`
            res.innerHTML+=`Os meus parabéns: Aprovado `
        }else{
        res.innerHTML+=`A media final será: ${media} </br>`
        res.innerHTML+=`Reprovado seu burro`
        }
}
*/
/*  Exercicios Par impar 
    function calcular(){
            var valor=Number(window.prompt('Insira o valor pra saber se é par ou impar: '))
            var res=window.document.querySelector('div.resul')
        if(valor%2==0){
            res.innerHTML=`O numero ${valor} é par`
        }else{
            res.innerHTML=`O numero ${valor} é impar`
        }
}*/
/*  Exercicio gerar n aleatorio
        function gerar(){
            var min=1
            var max=100
            var dif=max-min
            var aleatorio=Math.random()
            var num=min + Math.trunc(dif*aleatorio)
            var res=document.querySelector('div.resul')
            res.innerHTML+=`Acabei de pensar no numero ${num}! </br>`
}*/
/*  Exercicio multiplas açoes
    function calcular(){
    var n1=Number(window.prompt('Insira o primeiro valor:'))
    var n2=Number(window.prompt('Insira o segundo valor:'))
    var op=Number(window.prompt(`Qual operação deseja realizar?
[1]Soma
[2]Subtração
[3]Multiplicação
[4]Divisão`))
    var res=document.querySelector('div.resul')
    var soma= n1 + n2
    var sub=n1-n2
    var mul=n1*n2
    var div=n1/n2
    switch(op){
        case 1:
            res.innerHTML=`<h2>A calcular...</h2></br>`
            res.innerHTML+=`${n1} + ${n2}= ${soma}`
            break
        case 2:
            res.innerHTML=`<h2>A calcular...</h2></br>`
            res.innerHTML+=`${n1} - ${n2}= ${sub}`
            break
        case 3:
            res.innerHTML=`<h2>A calcular...</h2></br>`
            res.innerHTML+=`${n1} * ${n2}= ${mul}`
            break
        case 4:
            res.innerHTML=`<h2>A calcular...</h2></br>`
            res.innerHTML+=`${n1} / ${n2}= ${div}`
            break
        }
    }
    */
  var idade=70
  if(idade<16){
    console.log(`Tem ${idade} anos.Não pode votar!`)
  } else if(idade<=17 || idade>=70){
    console.log(`Tem ${idade} anos.Voto Opcional!`)
  }else{
    console.log(`Tem ${idade} anos. Voto Obrigatório!`)
  }
    