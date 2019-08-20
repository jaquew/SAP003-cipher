window.cipher = {
  encode: encode,
  decode: decode
};

let text;
let offset;

function encode(text,offset){
  //desconsidera espaços, converte maiusculas para minusculas
  //melhorar o codigo, muito extenso.
  text = text.toUpperCase();

  let num_array = new Array;
  let text_array = new Array;

  console.log(text)

  for (let i in text) {
    
    //se for espaço, ponto ou virgula  desconsiderar
    if (text.charAt(i)===" " || text.charAt(i)==="." ||text.charAt(i)===","){
      text_array[i]=text.charAt(i);
    
    } else {
      //tranformar de letra para numero e somar o deslocamento
      num_array[i]=(text.charCodeAt(i)-65 + offset)

      //se o resultado da soma for maior que 25(z), começa de 0(a)
      if (num_array[i]>25){
        num_array[i]=num_array[i]-26
      }

      // se estiver fora do alfabeto (0 a 25)
      if (num_array[i]>25 || num_array[i]<0){
        text_array[i]=text.charAt(i)
      } else {
        //tranformar de numero para letra
        text_array.push(String.fromCharCode(num_array[i]+65))
      }
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
  

  for (i in text) {
    
    if (text.charAt(i)===" " || text.charAt(i)==="." ||text.charAt(i)===","){
      text_array[i]=text.charAt(i);
    
    } else {
      num_array[i]=(text.charCodeAt(i)-65 - offset)

      if (num_array[i]<0){
        num_array[i]=num_array[i]+26
      }

      if (num_array[i]>25 || num_array[i]<0){
        text_array[i]=text.charAt(i)
      } else {
        text_array.push(String.fromCharCode(num_array[i]+65))
      }
  
    }
  }

  console.log(num_array)
  console.log(text_array)

  return text_array.join('') 

}
