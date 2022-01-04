/*

Hello! Thanks for taking the time to complete this exercise.

To start, clone this project (you need to create an account),
and add your answer in your copy. If you don't feel comfortable
with NodeJS, feel free to create a project with the language
of your choice (please copy over these comments).

Once you finish, share the project to matias@kocomo.com

Go coding!!

-------------------------------------------------------

Hola! Gracias por tu tiempo para completar este ejercicio.

Para empezar, clona este proyecto (necesitas crear una cuenta),
y agrega tu respuesta en tu copia. Si no te sientes cómodo
con NodeJS, puedes crear un proyecto con el lenguage que
prefieras (por favor copia estos comentarios).

Cuando termines, comparte este proyecto con matias@kocomo.com

Go coding!!

=======================================================

Words and letters

Given a 'bag' of words and a 'bag' of letters, write a
function that returns the length of the longest word that
can be written using each of the given letters at most
once.

e.g.
Words:
------------------------------
| 'kellogg' 'go'       |
|'hola' 'lego' 'hug'|
| 'kocomo' 'hello' |
------------------------------

Letters:
-----------------------
| 'a' 'h' 'l' 'e' |
|'l' 'o' 'g' 'k'  |
-----------------------

Answer: 5

Explanation:
* 5 is the length of 'hello', logest one that can be written
* 'kellogg' (7) needs two 'g', and there's only one in the letters bag
* 'kocomo' (6) needs a 'c' that is not present in the letters bag
* All other words are shorter than 'hello'

Bonus:
1. What's the Time complexity? -----> O(n)
2. What's the Space complexity? ----> O(n)

*/

function theLongestWord(){
   let wordLongest = ""
   let bagLetters = ['a', 'h', 'l', 'e', 'l', 'o', 'g', 'k' ]
   let bagWords = ['kellogg', 'go' ,'hola', 'lego', 'hug','kocomo','hello']
   
   //Objeto para acceder rapidamente a la disponibilidad o no de la letra
   const obj = {}; 
   var ob2 = {}     
   for(let i = 0; i < bagLetters.length; i++){
       if(obj[bagLetters[i]] && obj[bagLetters[i]] > 0){
           obj[bagLetters[i]] = obj[bagLetters[i]] + 1
       }else{
            obj[bagLetters[i]] = 1
       }       
   }

   //recorrer array de palabras
   //por cada palabra ver si puedo construirla usando las letras disponibles una vez cada una
   //si la longitud es mayor a wordLongest, actualizo, sino, continuo con siguiente
   for(let i = 0; i < bagWords.length; i++){//recorre cada palabra
       let lettersOfWord = bagWords[i].split("")//ssepara por letras cada palabra
       console.log("lettersOfWord: ", lettersOfWord)
       ob2 ={... obj}  //restaura los valores para volver a probar aonn la siguienete palabra
       
       for(let j = 0; j < lettersOfWord.length; j++){                      
            if(ob2.hasOwnProperty(lettersOfWord[j])    &&  ob2[lettersOfWord[j]] > 0){
                   ob2[lettersOfWord[j]] = ob2[lettersOfWord[j]] - 1 //usa la letra y resta el uso del value
                  
           }else{
               console.log("break..")
               break;//interrumpe el recorrido de la palabrra por no encontrar la propiedad o el valor mayor a 0
           } 
             if( j == lettersOfWord.length - 1){                         
                   if(lettersOfWord.length > wordLongest.length) {wordLongest= bagWords[i]}
                         console.log("wordMAX", wordLongest)
                 }         
         
     }
   }


    return wordLongest.length
}