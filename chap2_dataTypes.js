/** 1. number */
const ycc_founding = 1970;
const negative = -9;
const float = 0.812;
console.log(typeof ycc_founding);
console.log(typeof negative);
console.log(typeof float);

/** 2. string */
// '', "", `` 셋 중 어느 것을 사용하여 선언해도 상관 없습니다.
const my_single_quote_str = "문자열";
const my_double_quote_str = "쌍따옴표 문자열";
const my_back_tick_str = `백틱 문자열`;
console.log(typeof my_single_quote_str);
console.log(typeof my_double_quote_str);
console.log(typeof my_back_tick_str);

/** 2-1. 백틱 string */
console.log("YCC 창립 년도는" + ycc_founding + "년 입니다");
console.log(`YCC 창립 년도는 ${ycc_founding}년 입니다`);
const ycc_introduce = `YCC 창립 년도는 ${ycc_founding}년 입니다.`;
console.log(ycc_introduce);

/** 3. bool */
const TRUE = true;
const FALSE = false;
//! error
// const true = true

/** 4. 배열 */
// '모든 객체'들을 담을 수 있습니다.
const my_arr = ["새로운 문자열", 1995, negative];
const new_arr = [my_arr, my_single_quote_str, float];

// 배열 내부의 원소에 접근:
console.log(`my_arr[1]: ${my_arr[1]}`);
console.log(`my_arr[-1]: ${my_arr[-1]}`); // undefined: JavaScript에서는 지원하지 않습니다.

/**
 * 4-1. 그 외 배열의 속성과 함수들:
 *
 * my_arr.length
 * my_arr.splice()
 * my_arr.forEach()
 * my_arr.map()
 * my_arr.filter()
 * ...
 *
 * Q. 우리가 이걸 일일이 어떻게 압니까?
 * A. Ctrl+Spacebar 로 모든 속성들을 확인
 *    F12 를 통해 정의된 내용을 확인
 *
 * @see https://developer.mozilla.org/ko/docs/Web/JavaScript
 */

/** 5. Object */
// '모든 객체'들에게 key를 부여하고 저장할 수 있습니다.
const ycc = {
    name: "ycc",
    founding: 1970,
    introduce: ycc_introduce,
    moreInfo: my_arr,
};

console.log(ycc.name);
console.log(ycc.founding);
console.log(ycc.introduce);
