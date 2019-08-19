window.cipher = {
  encode: encode,
  decode: decode
};

function encode(){
  let text = "queijo";
  let codificatxt = new Array;
  
  for (let i in text){
    codificatxt.push(text.charCodeAt(i))
    i++;
  }

  console.log(codificatxt)

  

}

function decode(){
  alert("decode");

}
