/** 1. 변수 */
let ycc = "ycc";
let kucc;
let yes = true;
let no = false;

// dataType을 바꿔가며 자유로운 재할당이 가능
ycc = "kucc";
console.log(ycc);
ycc = 1970;
console.log(ycc);

/** 2. 상수 */
const ycc_founding = 1970;

//! error
// ycc_founding = 1980;

/** 3. 간단한 연산 */
let result;
let x = 29;
let y = 7;

result = x + y;
console.log(result);

result = x - y;
console.log(result);

result = x * y;
console.log(result);

result = x / y; // 몫
console.log(result);

result = x % y; // 나머지
console.log(result);

result = x == y; // 크기 비교
console.log(result);

result = x > y; // 크기 비교
console.log(result);

result = x < y; // 크기 비교
console.log(result);

result = yes && no;
console.log(result);

result = yes || no;
console.log(result);
