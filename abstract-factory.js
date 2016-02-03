/* beautify ignore:start */
import { random, getUUIDv4 } from "./_utils";
/* beautify ignore:end */

// Abstract factory design pattern
// http://www.dofactory.com/javascript/abstract-factory-design-pattern

/**
 * Object we want to create
 */
class Ball {
    constructor(x, y, ...rest) {
        this.x = x;
        this.y = y;
        this.params = rest;
    }

    get coordinates() {
        return {
            'x': this.x,
            'y': this.y
        };
    }

    set color(color) {
        this.color = color;
    }

}

/**
 * Ball object factory
 */
class BallFactory {

    create(obj) {
        return new Ball(obj.x, obj.y, getUUIDv4(), this.generateRandomParams());
    }
    generateRandomParams() {
        var arr = [];
        for (var i = 0; i < 5; i++) {
            arr[i] = random;
        };
        return arr;
    }
}


module.exports = function() {

    //factory instance
    var ballCreator = new BallFactory();

    //several items needed
    var ballsNeeded = [1, 2, 3, 4];

    //resulting array
    var createdBalls = [];

    for (var i = 0; i < ballsNeeded.length; i++) {
        var newBall = ballCreator.create({
            'x': ballsNeeded[i] * 10,
            'y': 50
        });
        createdBalls.push(newBall);
    };

    console.log(createdBalls);
}
