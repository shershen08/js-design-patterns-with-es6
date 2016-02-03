/* beautify ignore:start */
import {getUUIDv4} from './_utils';
/* beautify ignore:end */


//	Facade pattern
//	http://www.dofactory.com/javascript/facade-design-pattern

/**
 * Fight class facades the details how the battel will work
 */
class Fight {
    checkResult(wA, wB) {
        return (Armor.compare(wA, wB) && ReactionSpeed.compare(wA, wB)) ? wA : wB;
    }
}

/**
 * Armor & ReactionSpeed are the internal
 * implementation of the battle condition
 */
class Armor {
    constructor(bCoefficient) {
        this.bCoefficient = bCoefficient;
    }
    static compare(a, b) {

        var koeff = this.bCoefficient || 1;

        //the more the better
        return a.armor > b.armor * koeff;
    }
}

class ReactionSpeed {
    static compare(a, b) {
        //the less the better
        return a.speed < b.speed;
    }
}

/**
 * Those will be competing
 */
class Warrior {
    /* beautify ignore:start */
    constructor({armor =2, speed=0.3, name='Untitled', id}) {
    
	    this.armor = armor;
	    this.speed = speed;
	    this.name = name;
	    this.id = id;
	}
/* beautify ignore:end */
    winningMsg() {
        return 'I am ' + this.name + ' and I am great!';
    }
}

module.exports = function() {

    var unitOne = new Warrior({
        armor: 50,
        speed: 0.5,
        name: 'Tim',
        id: getUUIDv4()
    });
    var unitTwo = new Warrior({
        armor: 8,
        speed: 1,
        name: 'Drake',
        id: getUUIDv4()
    });

    var round = new Fight();
    var winner = round.checkResult(unitOne, unitTwo);

    console.log(`Winner is : ${winner.id}`);
    console.log(winner.winningMsg());
}
