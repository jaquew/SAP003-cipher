window.cipher = {
  encode: encode,
  decode: decode
};

function encode(text,offset){
  //desconsidera espaços, converte maiusculas para minusculas
  //melhorar o codigo, muito extenso.

  let num_array = new Array;
  let text_array = new Array;

  console.log(text)

  for (let i in text) {
    // se estiver fora do alfabeto
    if (text.charCodeAt(i)<65 || text.charCodeAt(i)>90){
    text_array[i]=text.charAt(i)    
    } else {
      //tranformar de letra para numero e somar o deslocamento
      num_array[i]=(text.charCodeAt(i)-65 + offset)%26 +65
      //tranformar de numero para letra
      text_array.push(String.fromCharCode(num_array[i]))
    }
  }

  console.log(num_array)
  console.log(text_array)

  //concatenar o array resultado
  return text_array.join('')  

}


function decode(text,offset){
  text = text.toUpperCase();

  let num_array = new Array;
  let text_array = new Array;
  

  for (let i in text) {
    // se estiver fora do alfabeto
    if (text.charCodeAt(i)<65 || text.charCodeAt(i)>90){
    text_array[i]=text.charAt(i)    
    } else {
      //tranformar de letra para numero e subtrair o deslocamento
      num_array[i]=(text.charCodeAt(i)-65 - offset) % 26 + 65
      //tranformar de numero para letra
      text_array.push(String.fromCharCode(num_array[i]))
    }
  }

  console.log(num_array)
  console.log(text_array)

  return text_array.join('') 

}
