/** 1. 함수 선언 */
function printHello() {
    console.log("Hello World!");
    return;
}

function addTwo(a, b) {
    return a + b;
}

/** 2. JSDoc을 이용한 함수 설명, paramete hint 제공 */
/**
 * 두 개의 정수 인자를 받아 최대공약수를 반환합니다.
 * @param x {number} 첫 번째 정수
 * @param y {number} 두 번째 정수
 * @return x와 y의 최대공약수
 * @see https://www.geeksforgeeks.org/c-program-find-gcd-hcf-two-numbers/
 * @author 현웅
 */
function getGcdOfTwo(x, y) {
    if (x == 0) return b;
    if (y == 0) return x;

    if (x == y) return x;

    if (x > y) return gcd(x - y, y);
    return gcd(x, y - x);
}

/** 3. arrow function: 형태만 다를 뿐, 하는 일은 같습니다. */
function hello(name) {
    console.log(`Hello, ${name}`);
}

const hello = (name) => {
    console.log(`Hello, ${name}`);
};

/**
 * 4. '모든 객체'를 인자로 받을 수 있습니다.
 *    동시에, '모든 객체'를 반환할 수 있습니다.
 */
function callerFunction(callback) {
    //! 인자로 넘겨지는 함수를 '콜백 함수'라고 합니다.
    return callback();
}

function combinerFunction(func1, func2) {
    function combined() {
        func1();
        func2();
        return "tasks done";
    }

    return combined; // 이 줄은 함수 자체를 반환하고
    return combined(); // 이 줄은 함수의 실행값을 반환합니다.
}

/** 4-1. 콜백 함수의 가장 일반적인 쓰임: 익명 함수 */
function sayHello() {
    console.log("Hello, JavaScript");
}

callerFunction(sayHello);

// vs

callerFunction(() => {
    console.log("Hello, Javascript");
});
