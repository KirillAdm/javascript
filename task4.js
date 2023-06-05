let inn = 'inodm';
console.log(inn[0],inn[2], inn[3]) 

let str= 'inodm';
let num = inn[1] ;
console.log (num);

let string = "Как видим, совпадений теперь два, а не три.";
console.log (string[string.length-2]);

let number = '12543';
console.log(+number[0]+ +number[1] + +number[2] + +number[3] + +number[4])

let st ='ii ini inni innni inoi inmi';
console.log(st.match(/\w.{17}/));

let stringDop= 'aAXa aeffa aGha aza ax23a a3sSa';
console.log(stringDop.match(/a[a-z][0-9]+a/g))

let inno= "inno";
let dom ="Dom";
let Inno =(inno.replace(/i/, "I"));
console.log (dom+Inno);

let zad3 ='ini ioi idi inni iodi inoi';
console.log(zad3.match(/i[a-z]{2}i/g));

let zad4= "innoDom";
console.log(zad4.split('').reverse('').join(''))