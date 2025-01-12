window.cipher = {
  encode: encode,
  decode: decode
};

function encode(offset, text) {

  let numArray = new Array;
  let textArray = new Array;

  for (let i in text) {

    if (97<=text.charCodeAt(i) && text.charCodeAt(i)<=122) {//se for minuscula
      //tranformar de letra para numero e somar o deslocamento
      numArray[i]=(text.charCodeAt(i)-97 + offset)%26 +97;
      //tranformar de numero para letra
      textArray[i]=(String.fromCharCode(numArray[i]));
        
    } else if (65<=text.charCodeAt(i) && text.charCodeAt(i)<=90) {//se for maiuscula
      numArray[i]=(text.charCodeAt(i)-65 + offset)%26 +65;
      textArray[i]=(String.fromCharCode(numArray[i]));

    } else {
      // se estiver fora do alfabeto
      textArray[i]=text.charAt(i);
    }
  }

  //concatenar o array resultado
  return textArray.join("") ; 
}

function decode(offset, text) {

  let numArray = new Array;
  let textArray = new Array;
  
  for (let i in text) { 
    // colocar o valores ascii ao contrário (de Z a A)
    if (97<=text.charCodeAt(i) && text.charCodeAt(i)<=122) {
      numArray[i]=(text.charCodeAt(i)-122 - offset)%26 +122;
      textArray[i]=(String.fromCharCode(numArray[i]));
        
    } else if (65<=text.charCodeAt(i) && text.charCodeAt(i)<=90) {
      numArray[i]=(text.charCodeAt(i)-90 - offset)%26 +90;
      textArray[i]=(String.fromCharCode(numArray[i]));

    } else {
      textArray[i]=text.charAt(i);
    }
  }

  return textArray.join("");
}