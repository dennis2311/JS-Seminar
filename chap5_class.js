/** 1. class */
class Character {
    // class 인스턴스가 처음 만들어질 때 변수에 따른 행동을 지정합니다.
    constructor(name) {
        this.name = name;
        console.log(`환영합니다 ${name}님!`);
    }

    level = 1;
    stamina = 200;
    max_stamina = 200;

    attack() {
        this.stamina = this.stamina - 10;
    }

    levelup() {
        this.level = this.level + 1;
        this.max_stamina = 180 + this.level * 20;
        this.stamina = this.max_stamina;
    }
}

/** 2. 인스턴스 생성 및 활용 */
const character = new Character("옥룡이");
console.log(`name: ${character.name}`);
console.log(`level: ${character.level}`);
console.log(`stamina: ${character.stamina}`);
console.log(`max_stamina: ${character.max_stamina}`);

character.attack();
console.log(`stamina: ${character.stamina}`);

character.levelup();
console.log(`level: ${character.level}`);
console.log(`stamina: ${character.stamina}`);
console.log(`max_stamina: ${character.max_stamina}`);

/** 3. 클래스 확장 */
class Soldier extends Character {
    // 원본의 constructor를 실행합니다. 이 순서는 바뀔 수 없습니다.
    constructor(name, job) {
        super(name);
        this.job = job;
        console.log(`${this.job}으로 전직하였습니다`);
    }

    strength = 20;

    /** 전사가 대상을 공격합니다. strength 만큼의 피해를 입힙니다. */
    attack(object) {
        this.stamina = this.stamina - 5;
        console.log(
            `${this.name}이(가) ${object}을 공격하여 ${this.strength}의 피해를 입혔습니다`
        );
    }
}

class Magician extends Character {
    constructor(name, job) {
        super(name);
        this.job = job;
    }

    energy = 80;

    /** 마법사가 대상에게 썬더볼트를 날려 공격합니다. 현재 energy의 절반만큼 피해를 입힙니다. */
    thunderbolt(object) {
        if (this.energy < 20) {
            return;
        }

        this.energy = this.energy - 20;
        console.log(
            `${this.name}이(가) ${object}을 공격하여 ${
                this.energy / 2
            }의 피해를 입혔습니다`
        );
    }
}

const soldier = new Soldier("", "탱커");
console.log(`soldier name: ${soldier.name}`);
console.log(`soldier job: ${soldier.job}`);
console.log(`soldier stamina: ${soldier.stamina}`);
soldier.attack("슬라임");
console.log(`soldier stamina: ${soldier.stamina}`);

const magician = new Magician("투명 드래곤", "전격술사");
console.log(`magician name: ${magician.name}`);
console.log(`magician job: ${magician.job}`);
console.log(`magician energy: ${magician.energy}`);
magician.attack("슬라임");
console.log(`magician energy: ${magician.energy}`);
