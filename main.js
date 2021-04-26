"use strict";
exports.__esModule = true;
var point_1 = require("./point");
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
}
doSomething();
// Types in TypeScript
var count = 5;
var numberValue;
var boolValue;
var stringValue;
var anyValue;
var numberArray = [1, 2, 3, 4, 5];
var anyArray = [1, 'asdf', true, 2, 'xyz', false];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Blue;
// Type assertions
var message = 'Hey';
var endsWithY = message.endsWith('y');
var alternativeWay = message.endsWith('y');
//Arrow functions
var log = function (message) {
    console.log(message);
};
var doLog = function (message) { return console.log(message); };
var drawPoint = function (point) {
    //...
};
// Classes
var PointClass = /** @class */ (function () {
    function PointClass() {
    }
    PointClass.prototype.draw = function () {
        console.log("X: " + this.x + ", Y: " + this.y);
    };
    PointClass.prototype.getDistance = function (another) {
        //...
    };
    return PointClass;
}());
;
// Constructor and Access Modifiers
var point = new PointClass;
point.x = 11;
point.y = 85;
point.draw();
var PointClassWithConstructor = /** @class */ (function () {
    function PointClassWithConstructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    PointClassWithConstructor.prototype.draw = function () {
        console.log("X: " + this._x + ", Y: " + this._y);
    };
    Object.defineProperty(PointClassWithConstructor.prototype, "x", {
        //Getter
        get: function () {
            return this._x;
        },
        //setter
        set: function (value) {
            if (value < 0)
                throw new Error('Value cannot be less than zero');
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    return PointClassWithConstructor;
}());
;
var pointWithConstructor = new PointClassWithConstructor(11, 85);
var x = pointWithConstructor.x;
pointWithConstructor.x = 50;
pointWithConstructor.draw();
var pointfromAnotherFile = new point_1.PointInAnotherFile(3, 5);
pointfromAnotherFile.draw();
