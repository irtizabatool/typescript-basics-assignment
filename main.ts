import { PointInAnotherFile } from "./point";

function doSomething() {
    for(let i = 0; i < 5; i++) {
        console.log(i);
    }
}

doSomething();

// Types in TypeScript
let count = 5;

let numberValue: number;
let boolValue: boolean;
let stringValue: string;
let anyValue: any;
let numberArray: number[] = [1, 2, 3, 4, 5];
let anyArray: any[] = [1, 'asdf', true, 2, 'xyz', false];

enum Color {Red = 0, Green = 1, Blue = 2};
let backgroundColor = Color.Blue;

// Type assertions

let message = 'Hey';
let endsWithY = (<string>message).endsWith('y');
let alternativeWay = (message as string).endsWith('y');

//Arrow functions

let log = function(message) {
    console.log(message);
}

let doLog = (message) => console.log(message);

// Custom Types

interface Point {
    x: number,
    y: number,
    draw: () => void
}

let drawPoint = (point: Point) => {
    //...
}


// Classes
class PointClass {
    x: number;
    y: number;

    draw() {
        console.log(`X: ${this.x}, Y: ${this.y}`);
    }

    getDistance(another: PointClass) {
        //...
    }
};

// Constructor and Access Modifiers
let point = new PointClass;
point.x = 11;
point.y = 85;
point.draw();

class PointClassWithConstructor {
    constructor(private _x: number, private _y?: number){}

    draw() {
        console.log(`X: ${this._x}, Y: ${this._y}`);
    }

    //Getter
    get x() {
        return this._x;
    }

    //setter
    set x(value) {
        if(value<0)
            throw new Error('Value cannot be less than zero');
        this._x = value;
    }
};

let pointWithConstructor = new PointClassWithConstructor(11, 85);
let x = pointWithConstructor.x;
pointWithConstructor.x = 50;
pointWithConstructor.draw();

let pointfromAnotherFile = new PointInAnotherFile(3, 5);
pointfromAnotherFile.draw()