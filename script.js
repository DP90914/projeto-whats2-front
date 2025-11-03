'use strict'
async function lerDados() {
    const url = `https://api-whatapp-2.onrender.com/v1/User/11987876567`
    const response = await fetch(url)
    const dados = await response.json()
    console.log(dados)
    return dados
}

async function criarPerfil(){
    let dados = await lerDados()
    let navPerfil = document.getElementById("perfil")
    let profileImg = document.createElement('img')

    profileImg.src = `./img/profile/${dados.contato['profile-image']}`

    navPerfil.appendChild(profileImg)
    return navPerfil
}

async function criarNav() {
    let dados = await lerDados()
    let navConteiner = document.getElementById("contatos")
    dados.contato.contacts.forEach(function(item){
        let profileDiv = document.createElement('div')
        let profiletext = document.createElement("h3")
        let profileImg = document.createElement('img')
        profiletext.textContent = item.name
        profileImg.src = `./img/profile/${item.image}`
        profileDiv.appendChild(profileImg)
        profileDiv.appendChild(profiletext)
        navConteiner.appendChild(profileDiv)
        profileDiv.addEventListener('click', function(){
            trocarContato(item)
            criarDialogo(item)
        })
    });
    return navConteiner
}

function trocarContato(item){
    let profileConteiner = document.getElementById("heroProfile")
    profileConteiner.textContent=""
    let profiletext = document.createElement("h3")
    let profileImg = document.createElement('img')

    profiletext.textContent = item.name
    profileImg.src = `./img/profile/${item.image}`

    profileConteiner.appendChild(profileImg)
    profileConteiner.appendChild(profiletext)
}
function criarDialogo(item){
    let messagesConteiner = document.getElementById("messages")
    messagesConteiner.textContent = ''

    item.messages.forEach(function(item){
        let messageText = document.createElement("h4")
        messageText.textContent = item.content

        messagesConteiner.appendChild(messageText)
    })

}
criarPerfil()
criarNav()