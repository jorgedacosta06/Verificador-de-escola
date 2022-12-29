function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('textano');
    var res = window.document.querySelector('div#res')
    if( fano.value == 0 || fano.value > ano){

        window.alert('[ERRO] Verifique os dados tente novamente ')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var school = document.getElementsByName('escola')
        var nome = document.getElementById('textnome')
        var img = document.getElementById('img')
        var escola = ''
        if(fsex[0].checked){
            genero= 'Homem'
        }else if(fsex[1].checked){
            genero= 'Mulher'
        }
        if(school[0].checked){
            escola = 'Alpega'
            img.setAttribute('src', 'alpega.jpg')
        }else if(school[1].checked){
            escola = 'Makarenko'
            img.setAttribute('src', 'maka.jpg')
        }else if(school[2].checked){
            escola = 'Alda Lara'
            img.setAttribute('src','aldalara.jpg')
        }else if(school[3].checked){
            escola = 'IPPS'
            img.setAttribute('src', 'ipps.jpg')
        }
        
        
    }



}