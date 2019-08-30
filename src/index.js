document.getElementById("cifrar").addEventListener("click", encodetxt);
document.getElementById("decifrar").addEventListener("click", decodetxt);
document.getElementById("clear").addEventListener("click", cleartxt);

function encodetxt() {
  let text = document.getElementById("decoded").value;
  let offset = Number(document.getElementById("offset").value);
  
  if (text==="") {
    alert("Por favor, digite uma mensagem.");
  } else if (offset >=0) {
    document.getElementById("encoded").value=window.cipher.encode(offset, text);
  } else {
    document.getElementById("encoded").value=window.cipher.decode(-offset, text);
  }
  document.getElementById("decoded").value="";
  document.getElementById("decoded").focus();
}

function decodetxt() {
  let text = document.getElementById("encoded").value;
  let offset = Number(document.getElementById("offset").value);

  if (text==="") {
    alert("Por favor, digite uma mensagem.");
  } else if (offset >=0) {
    document.getElementById("decoded").value=window.cipher.decode(offset, text);
  } else {
    document.getElementById("decoded").value=window.cipher.encode(-offset, text);
  }
  document.getElementById("encoded").value="";
  document.getElementById("encoded").focus();
}

function cleartxt() {
  document.getElementById("encoded").value="";
  document.getElementById("decoded").value="";
  document.getElementById("offset").value="1";
}