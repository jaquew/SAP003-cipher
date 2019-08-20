function acao1(){
    let text = document.getElementById("decoded").value
    let offset = Number(document.getElementById("offset").value)
    let encodedtxt = document.getElementById("encoded")

    encodedtxt.innerHTML=(window.cipher.encode(text,offset))

    // document.getElementById("encoded").value=encodedtxt

}

function acao2(){
    let text = document.getElementById("encoded").value
    let offset = Number(document.getElementById("offset").value)
    let decodedtxt = document.getElementById("decoded")

    decodedtxt.innerHTML=(window.cipher.decode(text,offset))
}