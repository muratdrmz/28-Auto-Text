const containerEl=document.querySelector('.container');
const careers = ["YouTuber", "Web Developer", "Freelancer", "Instructor"];

let careerIndex = 0;
let characterIndex =0;

updateText();

function updateText(){
 characterIndex++;
 const career=`${careers[careerIndex].slice(0,characterIndex)}`
 const ana = `${careers[careerIndex].slice(0, 1) === "I" ? "an" : "a"}`;
 containerEl.innerHTML = `<h1>I am ${ana} ${career} </h1>`; 

 if(characterIndex===careers[careerIndex].length){
  careerIndex++
  characterIndex=0;
 }
 if(careerIndex===careers.length){
  careerIndex=0;
 }
 setTimeout(updateText, 200);
}
