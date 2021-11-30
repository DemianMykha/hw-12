function colonOdd(){
  const str = prompt('Введіть число');
  let mas = [num[0]];
  for(let i=1; i<str.length; i++) {
      if((str[i-1]%2 !== 0)) {
        mas.push(` : ${str[i]}`)
       }
      else {
        mas.push(str[i])
      }
  }
 
alert(mas)
}




function  registerText(){
    const str = prompt('Введіть слово');
    let mas = [];
    let textuUp= 'ЙЦУКЕНГШЩЗХЇФІВАПРОЛДЖЄЯЧСМИТЬБЮ';
        for(let i=0; i<str.length; i++) {
            if(textuUp.includes(str[i])) {
            mas.push(str[i].toLowerCase())
            }
            else {
            mas.push(str[i].toUpperCase());
            }
        
    }
    alert(mas); 
}

function getSimpleInt() {
    const str = prompt('Введіть просте число');
    for (let i=0; i<str.length; i++){
          if (str% i === 0) {
              return false
        }
        else{
            alert('введіть,будь ласка, просте число')
        }
    }
    alert(`просте ${str}`)
}
function showFunction() {
    const str = prompt('Введіть назву функції');
    alert( str )
}
