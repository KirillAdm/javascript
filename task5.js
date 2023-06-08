let chet = prompt('введите число');
if (Number(chet)){
    if(chet % 2 == 0){
        console.log ("четное")
    }else if (chet !==0){
        console.log('не четное')   
    }else{
    console.log('не число')
    }
}

let developer = prompt('введите язык программирования');
let frontend = ["javascript", "js"];
let backend = ["c++","java","python"]

if (frontend.includes(developer.toLowerCase())) {
    console.log('You frontend developer');
    }else if (backend.includes(developer.toLowerCase())) {
        console.log('You backend developer');   
    }else{
        console.log("you is not developer")
    }

let lang = prompt('Your language?');

    if (lang.toLowerCase() === 'russian') {
         console.log('Привет'); 
        } else if (lang.toLowerCase() === 'english') {
             console.log('Hello');
         } else if (lang.toLowerCase() === 'spanish') { 
            console.log('Hola');
         } else if (lang.toLowerCase() === 'italian') { 
            console.log('Ciao'); 
        } else if (lang.toLowerCase() === 'french') {
             console.log('Salut'); 
        } else { 
            console.log("Sorry, I don’t know this language"); 
        }

        switch (lang.toLowerCase()) { 
            case 'russian': {
                console.log('Привет');
                break; 
            }case 'english': {
                console.log('Hello');
                break; 
            }case 'spanish':{ 
                console.log('Hola'); 
                break;
            }case 'italian':{ 
                console.log('Ciao');
                break;
            }case 'french':{ 
                console.log('Salut');
                break; 
            }default:{ 
                console.log('Извините, я не знаю этот язык'); 
            }}

let question = prompt('Задайте вопрос Клаве:');

switch (question.toLowerCase()) { 
    case 'как тебя зовут?':{ 
    console.log('Клава'); 
    break; 
    }case 'как у тебя дела?':{ 
    console.log('Хорошо, а у тебя?'); 
    break; 
    }case 'сколько тебе лет?':{ 
    console.log('Много-много'); 
    break; 
    }default:{ 
    console.log('Я еще не знаю таких слов'); 
}}