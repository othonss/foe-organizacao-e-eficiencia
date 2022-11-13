function openPage(pagina, conteudoPagina){
    let indice = pagina
    let conteudo = conteudoPagina
    let url = 'conteudos/conteudo' + indice + '.html'
    let xml = new XMLHttpRequest()

    xml.onreadystatechange = function(){
        if(xml.readyState == 4 && xml.status == 200){
            document.getElementById(conteudo).innerHTML = xml.responseText
        }
    }

    xml.open("GET", url, true)

    xml.send()
}

function displayBlock(conteudoObs){
    document.getElementById(conteudoObs).style.display = 'flex'
}

function displayNone(conteudoObs){
    document.getElementById(conteudoObs).style.display = 'none'
}

function rodapeMensagem(id, conteudoRodape){
    document.getElementById(id).innerHTML = conteudoRodape
}