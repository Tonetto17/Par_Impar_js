function gerar(){
    var numero= window.document.getElementById('txtn')
    var res= window.document.getElementById('res')

    if(numero.value.length==0){
        window.alert('Campo vazio')
    }else{
        var n= Number(numero.value)
        if(n % 2 === 0){
            res.innerHTML=('Seu número é par')
        }else{
            res.innerHTML=('Seu número é impar')
        }

    }
}