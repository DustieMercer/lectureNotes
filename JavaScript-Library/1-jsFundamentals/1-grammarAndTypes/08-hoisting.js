console.log(scissors);
var scissors = 'blue';

function hoistTest(){
    console.log(testVar);
    var testVar = 10;
    console.log(testVar);
}

hoistTest();