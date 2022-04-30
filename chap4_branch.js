/** 1. if, else if */
function guessNumber(userNumber) {
    // 1 ~ 10 중 랜덤한 수를 추출
    const computerNumber = Math.floor(Math.random() * 10) + 1;

    if (userNumber == computerNumber) {
        console.log(`와우! 머신 스피릿!`);
        return;
    } else if (
        userNumber - computerNumber < 3 &&
        userNumber - computerNumber > -3
    ) {
        console.log(
            `아쉽네요! 당신의 선택: ${userNumber}, 컴퓨터의 선택: ${computerNumber}`
        );
        return;
    } else {
        console.log(
            `친해지길 바라요! 당신의 선택: ${userNumber}, 컴퓨터의 선택: ${computerNumber}`
        );
        return;
    }
}

// guessNumber(5);

/** 2. switch */
function checkFineDust() {
    const fineDust = Math.floor(Math.random() * 5) + 1;

    switch (fineDust) {
        case 1:
            console.log(
                `미세먼지 등금: ${fineDust} - 너무 좋은 날씨! 산책이라도 갈까요?`
            );
            break;
        case 2:
            console.log(
                `미세먼지 등금: ${fineDust} - 아직은 롯데타워가 보여요`
            );
            break;
        case 3:
            console.log(`미세먼지 등금: ${fineDust} - 마스크 챙기세요!`);
            break;
        case 4:
            console.log(`미세먼지 등금: ${fineDust} - 꼭 나가셔야만 하나요?`);
            break;
        case 5:
            console.log(`미세먼지 등금: ${fineDust} - 중국 망했으면`);
            break;
        default:
            console.log(`미세먼지 등금: ${fineDust} - 수치를 해석할 수 없어요`);
    }
}

checkFineDust();

/** 3. for이랑 while은 안 쓰나요? */
// 원한다면, 당연히 사용합니다. 다만 여기서는 다루지 않겠습니다.
