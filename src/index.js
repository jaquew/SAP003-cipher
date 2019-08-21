function encodetxt(){
    let text = document.getElementById("decoded").value
    text = text.toUpperCase();
    
    let offset = Number(document.getElementById("offset").value)
    //let encodedtxt = document.getElementById("encoded")

    // encodedtxt.innerHTML=(window.cipher.encode(text,offset))
    if (text===""){
        alert("Por favor, digite uma mensagem.")
    } else {
        document.getElementById("encoded").value=window.cipher.encode(text,offset)
    }

}

function decodetxt(){
    let text = document.getElementById("encoded").value
    text = text.toUpperCase();
    let offset = Number(document.getElementById("offset").value)
    //let decodedtxt = document.getElementById("decoded")

    //decodedtxt.innerHTML=(window.cipher.decode(text,offset))
    if (text===""){
        alert("Por favor, digite uma mensagem.")
    } else {
    document.getElementById("decoded").value=window.cipher.decode(text,offset)
    }
}