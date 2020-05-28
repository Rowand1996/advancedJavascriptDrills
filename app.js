setName();
function setName(){
    var name = 'Covalence';
    console.log(name);
}

console.log('some text');
let avg = findAvg(2, 2);
console.log('some text2', avg);
function findAvg(a, b) {
    console.log('some text3');
    var answer = ( a + b) / 2;
    return answer;
}

let fruits = ["apples","oranges","grapes"];
// let favFruit;

function listFruit(){
    let favFruit = fruits[2];
    console.log(fruits[0]);

    function listFavFruit(){
        let leastFavFruit = fruits[1];
        console.log(favFruit);
    }
    listFavFruit();
    // console.log(leastFavFruit);
}
listFruit();
someFunc();
function someFunc(){
    console.log("Hello Rowan");
}
sayHi();

function sayHi() {
    alert( "Hello" );
  };