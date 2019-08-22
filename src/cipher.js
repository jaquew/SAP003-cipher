window.cipher = {
  encode: encode,
  decode: decode
};

function encode(text,offset){

  let num_array = new Array;
  let text_array = new Array;

  for (let i in text) {

    if (97<=text.charCodeAt(i) && text.charCodeAt(i)<=122) {//se for minuscula
      //tranformar de letra para numero e somar o deslocamento
      num_array[i]=(text.charCodeAt(i)+33 + offset)%26 +97
      //tranformar de numero para letra
      text_array[i]=(String.fromCharCode(num_array[i]))
        
    } else if (65<=text.charCodeAt(i) && text.charCodeAt(i)<=90) {//se for maiuscula
      num_array[i]=(text.charCodeAt(i)+39 + offset)%26 +65
      text_array[i]=(String.fromCharCode(num_array[i]))

    }else {
      // se estiver fora do alfabeto
      text_array[i]=text.charAt(i)
    }
  }
 console.log(num_array)

  //concatenar o array resultado
  return text_array.join('')  
}


function decode(text,offset){
  let num_array = new Array;
  let text_array = new Array;
  
  for (let i in text) { 
    if (97<=text.charCodeAt(i) && text.charCodeAt(i)<=122) {
      num_array[i]=(text.charCodeAt(i)+33 - offset)%26 +97
      text_array[i]=(String.fromCharCode(num_array[i]))
        
    } else if (65<=text.charCodeAt(i) && text.charCodeAt(i)<=90) {
      num_array[i]=(text.charCodeAt(i)+39 - offset)%26 +65
      text_array[i]=(String.fromCharCode(num_array[i]))

    }else {
      text_array[i]=text.charAt(i)
    }
  }

  return text_array.join('') 
}
