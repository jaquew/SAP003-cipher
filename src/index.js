document.getElementById("cifrar").addEventListener("click", encodetxt);
document.getElementById("decifrar").addEventListener("click", decodetxt);
document.getElementById("clear").addEventListener("click", cleartxt);

function encodetxt() {
  let text = document.getElementById("decoded").value;
  let offset = Number(document.getElementById("offset").value);

  if (text==="") {
    alert("Por favor, digite uma mensagem.");
  } else {
    document.getElementById("encoded").value=cipher.encode(offset, text);
  }
}

function decodetxt() {
  let text = document.getElementById("encoded").value;
  let offset = Number(document.getElementById("offset").value);

  if (text==="") {
    alert("Por favor, digite uma mensagem.");
  } else {
    document.getElementById("decoded").value=window.cipher.decode(offset, text);
  }
}

function cleartxt() {
  document.getElementById("encoded").value="";
  document.getElementById("decoded").value="";
  document.getElementById("offset").value="1";
}