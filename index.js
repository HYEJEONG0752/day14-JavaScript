// 조건문 (if, else, switch)

// 1. 짝수면 "짝수입니다" 홀수면 "홀수입니다" 출력
checkEvenOdd(5);

function checkEvenOdd(number) {
    if (number % 2 === 0) {
        console.log("짝수입니다.");
    } else {
        console.log("홀수입니다.");
    }
}

// 2. 18세 이상이면 "성인입니다." 그렇지 않으면 "미성년자입니다." 출력 
checkAge(31);

function checkAge(age) {
    if (age >= 18) {
        console.log("성인입니다.");
    } else {
        console.log("미성년자입니다.");
    }
}

// 3. switch문 - 요일(1~7)을 입력받고 해당 요일의 이름 출력(1-월요일,7-일요일)
getDayName(5);

function getDayName(dayNumber) {
	switch (dayNumber) {
        case 1:
            console.log("월요일");
            break;
        case 2:
            console.log("화요일");
            break;
        case 3:
            console.log("수요일");
            break;
        case 4:
            console.log("목요일");
            break;
        case 5:
            console.log("금요일");
            break;
        case 6:
            console.log("토요일");
            break;
        case 7:
            console.log("일요일");
            break;
        default: console.log("잘못된 입력입니다.");
    }
}

// 반복문(for, while, do-while)

// 4. 1~100까지 숫자 중에서 짝수만 출력하는 for 반복문 작성
printEvenNumbers();

function printEvenNumbers() {
    for(let i = 1; i <=100; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

// 5. while문 사용 5~15까지 숫자 출력
printNumbers();

function printNumbers() {
	let i = 5; while (i <= 15) {
        console.log(i); i++;
    }
}

// 6. do-while문 사용 입력숫자 10 될때까지 반복
inputUntilTen();

function inputUntilTen() {
	let i = 0; do {console.log(i); i++;}
    while (i !== 10);
}

// 함수 선언과 호출 관련

// 7. 두 개의 숫자 더하는 함수 addNumbers
function addNumbers(a, b) 
	{return a + b;}
    let result =addNumbers(31, 37);

console.log(result)  //68

// 8. 세 개의 숫자 곱하는 함수 multiplyNumbers
function multiplyNumbers(a, b, c) 
	{return a * b * c;};

console.log(multiplyNumbers(5, 31, 37));  //5735

// 9. greet함수 "안녕하세요, [이름]님!" 출력
  //function greet(name) {
  //console.log("안녕하세요," + name + "님!");  // 안녕하세요, 혜정님!
  //}
function greet(name) {
    return `안녕하세요, ${name}님!`;
}

let message = greet("혜정");
console.log(message);

// 함수 표현식 관련

// 10. 두 숫자의 차를 구하는 함수 표현식 작성
const subtract = function(a, b) {
	return a - b;
};

console.log(subtract(37, 31));  // 6

// 11. 세 개 숫자 더한 값 반환
const sum = function(a, b, c) {
	return a + b + c;
};

console.log(sum(5, 31, 37));  // 73

// 화살표 함수 관련

// 12. 두 숫자를 더한 값을 반환하는 화살표 함수
const add = (a, b) => a + b;

console.log(add(31, 37));  // 68

// 13. 숫자를 제곱하여 반환하는 화살표 함수
const square = (n) => n * n;

console.log(square(2));  // 4

// 14. 배열 입력받아 각 요소에 2를 곱한 새로운 배열을 반환하는 화살표 함수
const doubleArray = (arr) => {
	return arr.map(num => num * 2);
};

console.log(doubleArray([2,4,6]));  // 4,8,12

// 15. 나이를 인자로 받아 "성인" or "미성년자" 반환하는 화살표 함수
const checkAge1 = (age) => {
	return age >= 18 ? "성인" : "미성년자";
};

console.log(checkAge1(5));  // 미성년자

// 조건문 관련

// 16.두 개의 숫자를 입력 받아, 큰 숫자를 출력
function findMax(a, b) {
	return a > b ? a : b;
}

console.log(findMax(31, 37));  // 37

// 17. 90점 이상 'A',80점 이상 'B', 70점 이상은 'C', 그 이히는 'F'
function grade(score) {
	if(score >= 90) {
        return 'A';
    }else if (score >= 80){
        return 'B';
    }else if (score >= 70){
        return 'C';
    }else{
        return 'F';
    }
}

console.log(grade(95));  // A

// 18. switch문 사용 입력한 달에 맞는 계절 출력(3-5봄 6-8여름 9-11가을 12-2겨울)
function getSeason(month) {
	switch(month){
        case 3:
        case 4:
        case 5:
            return '봄';
        case 6:
        case 7:
        case 8:
            return '여름';
        case 9:
        case 10:
        case 11:
            return '가을';
        case 12:
        case 1:
        case 2:
            return '겨울';
        default:
            return '잘못된 입력입니다.'
    }
}

console.log(getSeason(7));  // 여름

// 반복문 관련

// 19. for문 사용 1~10  까지의 숫자 합
function sumNumbers() {
	let sum =0;
    for(let i = 1; i <= 10; i++){
        sum += i;
    }
    return sum;
}

console.log(sumNumbers());  // 55

// 20. while문 사용 1~20까지 숫자 중 3의 배수를 출력
printMultiplesOfThree()

function printMultiplesOfThree() {
	let i = 1; 
    while (i <= 20) {
        if(i % 3 === 0){
        console.log(i);
        } 
        i++;
    }
}

// 21. do-while문 사용 0~100까지 숫자 중 10의 배수 출력
printMultiplesOfTen()
function printMultiplesOfTen() {
	let i = 0;
    do {
        if(i % 10 === 0) {
            console.log(i);
        }
        i++;
    }while (i <= 100);
}

// 함수 선언과 호출 관련

// 22. 세 개의 숫자 중에서 가장 큰 숫자를 찾는 함수
function findMaxOfThree(a, b, c) {
	let max = a;
    if(b > max){
        max = b;
    }
    if(c > max){
        max = c;
    }
    return max;
}

console.log(findMaxOfThree(5, 31, 37));  //37

// 23. 두 문자열을 입력받아 동일하면 "동일함" 그렇지 않으면 "동일하지 않음"
function compareStrings(str1, str2) {
    return str1 === str2 ? "동일함" : "동일하지 않음";
}

console.log(compareStrings("강아지", "고양이"));  //동일하지 않음

// 24. 배열을 입력받아 숫자들의 평균을 계산하는 함수
function calculateAverage(numbers){
	if(numbers.length === 0) {
        return 0;
    }
    let sum = 0;
    for(let number of numbers) {
        sum += number;
    }
    return sum / numbers.length;
}

console.log(calculateAverage([1, 2, 3]));  // 2

// 25. 배열의 모든 요소를 제곱한 값을 반환하는 함수
const squareArray = function(arr) {
	return arr.map((element) => element ** 2);
};

console.log(squareArray([2, 3, 4]));  // [4, 9, 16]

// 26. 두 문자열을 합친 후, 그 길이를 반환하는 함수(String.prototype.length)
const combineAndLength = function(str1, str2) {
	const combineAndLength = str1 + str2;
    return combineAndLength.length;
};

console.log(combineAndLength("도리도리","까꿍!"));  // 7

// 27. 배열에서 가장 큰 숫자를 찾는 함수
const findMaxInArray = function(arr) {
	if(arr.length === 0){
        return null;
    }
    let max = arr[0];
    for (let i = 1;i < arr.length; i++){
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
};

console.log(findMaxInArray([1,2,3,4,5]));  // 5

// 화살표 함수 관련

// 28. 두 문자열을 입력받아 그 길이를 비교, 더 긴 문자열을 반환
const getLongerString = (str1, str2) => {
	return str1.length >= str2.length ? str1 : str2;
};

console.log(getLongerString("JavaScript","Java"));  // JavaScript

// 29. 숫자로 이루어진 배열을 입력받아 배열의 모든 요소에 5를 더한 새로운 배열 반환
const addFiveToArray = (arr) => {
    return arr.map(num => num + 5);
};

console.log(addFiveToArray([1,2,3]));  // 6,7,8

// 30. 세 개의 숫자를 입력받아, 세 숫자의 합이 100이상 "합격", 그렇지 않으면 "불합격"
const checkSum = (a, b, c) => {
   const sum = a + b + c;
   return sum >= 100 ? "합격" : "불합격";
};

console.log(checkSum(5,31,37));  //







