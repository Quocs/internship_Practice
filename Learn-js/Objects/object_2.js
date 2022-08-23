let programing = {
    languages : ['Javascript','Python','Ruby'],
    isChallengeing:true,
    isRewarding:true,
    difficulty:8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
}

//1

programing.languages.push('Go');
//console.log(programing.languages)

//2

programing.difficulty=7;

//3

delete programing.jokes

//4
programing.isFun=true

//5
for (let language of programing.languages) {
    console.log(language);
}

//6 
for (let key in programing){
    console.log(key);
}

for (let key in programing){
    console.log(programing[key]);
}
//Test
console.log(programing)