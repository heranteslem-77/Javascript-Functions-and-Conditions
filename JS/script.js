console.log('Question 1');
function myFirst() {
    console.log("Hello");
}
myFirst();
console.log('Question 2');
function mySecond(value) {
    console.log(value)
}
mySecond("Heran")
console.log('Question 3');
function myThird(value) {
    mySecond(value);
}
myThird("Hello again")
console.log('Question 4');
function myFourth(arr){
    console.log(arr[0]);
}
myFourth([20]);
console.log('Question 5');
function myFifth(arr) {
    let sum = arr[0] + arr[1];
    console.log(sum);
}
myFifth([5,7]);
console.log('Question 6');
function convert(minutes) {
    return minutes * 60;
}
console.log(convert(5));
console.log('Question 7');
function increment(num) {
    return num + 1;
}
console.log(increment(4));
console.log('Question 8');
function triangleArea(base, height){
    return (base * height) /2;
}
console.log(triangleArea(10,5));
console.log('Question 9')
function animals(chickens, cows, pig){
    return (chickens * 2) + (cows*4)+ (pig *4);
    }
    console.log(animals(2,3,1));
    console.log('Question 10');
 function tripleFirst(arr) {
    return arr[0]*3;
     }
     console.log(tripleFirst([4,2])); 
 console.log('Question 11')
 function isEqual(num1, num2){
    return num1===num2;
 }      
 console.log(isEqual(5,5));
 console.log('Question 12');
 function divisibleBy100(num) {
 return num % 100===0;
 }
 console.log(divisibleBy100(200));
 console.log('Question 13');
 function evenOrOdd(num){
    if (num%2===0){
        return "even";
    } 
    else{
        return "odd";
    }
 }
 console.log(evenOrOdd(7));
 console.log('Question 14');
 function checkGrade(score){
    if (score <0 || score >100){
        return "Invaild score";
    }
    else if (score>= 90 && score<=100){
        return "Grade A";
    }
    else if (score >=80 && score<=89){
        return "Grade B";
    }
    else {
        return "Grade C";
    }
 }
  console.log(checkGrade(120));
 console.log(checkGrade(95));
 console.log(checkGrade(85));
 console.log(checkGrade(70));
