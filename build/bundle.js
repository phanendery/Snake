/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/game */ \"./src/game.ts\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const canvas = document.querySelector(\"canvas\");\n    const game = new _src_game__WEBPACK_IMPORTED_MODULE_0__[\"Game\"](canvas);\n    game.startLoop();\n    setTimeout(() => {\n        // game.endLoop();\n    }, 2000);\n});\n\n\n//# sourceURL=webpack:///./index.ts?");

/***/ }),

/***/ "./src/apple.ts":
/*!**********************!*\
  !*** ./src/apple.ts ***!
  \**********************/
/*! exports provided: Apple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Apple\", function() { return Apple; });\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ \"./src/settings.ts\");\n\nclass Apple {\n    constructor(x, y, canvas) {\n        this.x = x;\n        this.y = y;\n        //public also \n        let canvasWidth = canvas.width;\n        let canvasHeight = canvas.height;\n        this.cellWidth = canvasWidth / _settings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimX;\n        this.cellHeight = canvasHeight / _settings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimY;\n    }\n    draw(ctx) {\n        //draws the single red square , drawing the snake\n        ctx.fillStyle = \"#00ff00\";\n        ctx.fillRect(this.x * this.cellWidth + 8, this.y * this.cellHeight + 8, 30, 30);\n    }\n    moveApple(x, y) {\n        this.x = x;\n        this.y = y;\n        // ctx.fillRect(\n        //   x * this.cellWidth + 8,\n        //   y * this.cellHeight + 8,\n        //   this.x,\n        //   this.y\n        // );\n    }\n}\n\n\n//# sourceURL=webpack:///./src/apple.ts?");

/***/ }),

/***/ "./src/berry.ts":
/*!**********************!*\
  !*** ./src/berry.ts ***!
  \**********************/
/*! exports provided: Berry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Berry\", function() { return Berry; });\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ \"./src/settings.ts\");\n\nclass Berry {\n    constructor(x, y, canvas) {\n        this.x = x;\n        this.y = y;\n        let canvasWidth = canvas.width;\n        let canvasHeight = canvas.height;\n        this.cellWidth = canvasWidth / _settings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimX;\n        this.cellHeight = canvasHeight / _settings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimY;\n    }\n    draw(ctx) {\n        ctx.fillStyle = \"orange\";\n        ctx.fillRect(this.x * this.cellWidth + 8, this.y * this.cellHeight + 8, 30, 30);\n    }\n    moveBerry(x, y) {\n        this.x = x;\n        this.y = y;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/berry.ts?");

/***/ }),

/***/ "./src/board.ts":
/*!**********************!*\
  !*** ./src/board.ts ***!
  \**********************/
/*! exports provided: Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Board\", function() { return Board; });\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ \"./src/settings.ts\");\n\nclass Board {\n    constructor(canvas) {\n        this.canvas = canvas;\n        this.canvasWidth = 0;\n        this.canvasHeight = 0;\n        this.ctx = canvas.getContext(\"2d\");\n        this.canvasWidth = canvas.width;\n        this.canvasHeight = canvas.height;\n        this.cellWidth = this.canvasWidth / _settings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimX;\n        this.cellHeight = this.canvasHeight / _settings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimX;\n        this.startIdxX = 1;\n        this.startIdxY = 1;\n        this.endIdxX = _settings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimX - 2;\n        this.endIdxY = _settings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimY - 2;\n    }\n    draw() {\n        this.ctx.fillStyle = \"black\";\n        for (let row = this.startIdxY; row < _settings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimX - 1; row++) {\n            for (let col = this.startIdxX; col < _settings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimX - 1; col++) {\n                this.ctx.fillRect(col * this.cellWidth, row * this.cellHeight, this.cellWidth - 3, this.cellHeight - 3);\n            }\n        }\n    }\n}\n\n\n//# sourceURL=webpack:///./src/board.ts?");

/***/ }),

/***/ "./src/game.ts":
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Game\", function() { return Game; });\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/board.ts\");\n/* harmony import */ var _snake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snake */ \"./src/snake.ts\");\n/* harmony import */ var _apple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apple */ \"./src/apple.ts\");\n/* harmony import */ var _berry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./berry */ \"./src/berry.ts\");\n //named export\n\n\n\nclass Game {\n    constructor(canvas) {\n        this.requestedFrameId = -1;\n        this.canvas = canvas;\n        this.ctx = canvas.getContext(\"2d\");\n        this.board = new _board__WEBPACK_IMPORTED_MODULE_0__[\"Board\"](canvas);\n        this.snake = new _snake__WEBPACK_IMPORTED_MODULE_1__[\"Snake\"](canvas);\n        this.apple = new _apple__WEBPACK_IMPORTED_MODULE_2__[\"Apple\"](5, 5, canvas);\n        this.berry = new _berry__WEBPACK_IMPORTED_MODULE_3__[\"Berry\"](7, 7, canvas);\n        this.scoreElement = document.querySelector(\"#score-display\");\n        this.updateScore(this.snake.size());\n    }\n    loop() {\n        //main function, clear board, draw all of our stuff and redo\n        this.requestedFrameId = requestAnimationFrame(() => this.loop()); //rAF, right before the screen updates, call this function\n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); //clearing the grid each time\n        this.snake.update();\n        this.board.draw();\n        this.snake.draw();\n        this.berry.draw(this.ctx);\n        this.apple.draw(this.ctx);\n        if (this.snakeIsEatingFood(this.apple)) {\n            this.snake.grow();\n            this.spawnFruit();\n            this.updateScore(this.snake.size());\n        }\n        if (this.snakeIsEatingFood(this.berry)) {\n            this.snake.shrink();\n            this.spawnFruit();\n            this.updateScore(this.snake.size());\n        }\n        if (this.snake.isDead()) {\n            this.endLoop();\n        }\n    }\n    spawnFruit() {\n        this.spawnApple();\n        this.spawnBerry();\n    }\n    updateScore(size) {\n        this.scoreElement.innerText = (size * 75).toString();\n        // return size * 75;\n    }\n    snakeIsEatingFood(food) {\n        return food.x === this.snake.nodes[0].x && food.y === this.snake.nodes[0].y;\n    }\n    spawnBerry() {\n        let rand = this.potentialSpots();\n        this.berry.moveBerry(rand.x, rand.y);\n    }\n    potentialSpots() {\n        const snakeSet = new Set(); //creating a snake Set type string\n        this.snake.nodes.forEach(node => {\n            snakeSet.add(`${node.x},${node.y}`);\n        });\n        const potentialSpots = []; //single x,y  node with an array of x,y\n        for (let y = this.board.startIdxY; y < this.board.endIdxY; y++) {\n            for (let x = this.board.startIdxX; x < this.board.endIdxX; x++) {\n                if (!snakeSet.has(`${x},${y}`)) {\n                    potentialSpots.push({ x, y }); //potential spots for the apple to spawn\n                }\n            }\n        }\n        //math random the snake to pick a random spot in the array to spawn the apple\n        let randSpot = potentialSpots[Math.floor(Math.random() * potentialSpots.length)];\n        return randSpot;\n    }\n    spawnApple() {\n        let rand = this.potentialSpots();\n        this.apple.moveApple(rand.x, rand.y);\n    }\n    startLoop() {\n        this.requestedFrameId = requestAnimationFrame(() => this.loop());\n    }\n    endLoop() {\n        cancelAnimationFrame(this.requestedFrameId);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/game.ts?");

/***/ }),

/***/ "./src/settings.ts":
/*!*************************!*\
  !*** ./src/settings.ts ***!
  \*************************/
/*! exports provided: board, snake */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"board\", function() { return board; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"snake\", function() { return snake; });\nconst board = {\n    dimX: 10,\n    dimY: 10,\n    speed: 8 //bigger the number, slower the speed\n};\nconst snake = {\n    growAmount: 1,\n    shrinkAmount: 1\n};\n\n\n//# sourceURL=webpack:///./src/settings.ts?");

/***/ }),

/***/ "./src/snake.ts":
/*!**********************!*\
  !*** ./src/snake.ts ***!
  \**********************/
/*! exports provided: Snake */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Snake\", function() { return Snake; });\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ \"./src/settings.ts\");\n\nclass Snake {\n    constructor(canvas) {\n        this.canvas = canvas;\n        this.updateFrame = 0;\n        // private nodes: SnakeNode[] = [[1, 1], [0, 1]];\n        this.dir = \"ArrowRight\";\n        this.ctx = canvas.getContext(\"2d\");\n        // this.nodes.forEach(node => this.draw(node));\n        let canvasWidth = canvas.width;\n        let canvasHeight = canvas.height;\n        this.cellWidth = canvasWidth / _settings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimX;\n        this.cellHeight = canvasHeight / _settings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimY;\n        this.snakeHead = new Image();\n        this.snakeHead.src = \"../snakeHead.png\";\n        this.snakeHead.onload = () => {\n            console.log(\"loaded\");\n        };\n        this.nodes = [\n            { x: 1, y: 1 },\n            { x: 1, y: 2 },\n            { x: 1, y: 3 },\n            { x: 1, y: 4 },\n            { x: 1, y: 5 }\n        ];\n        document.addEventListener(\"keydown\", e => {\n            if (e.key === \"ArrowRight\" ||\n                e.key === \"ArrowLeft\" ||\n                e.key === \"ArrowDown\" ||\n                e.key === \"ArrowUp\") {\n                this.dir = e.key;\n            }\n        });\n    }\n    draw() {\n        this.nodes.slice(1).forEach(node => {\n            this.drawNode(node, \"red\");\n        });\n        this.drawNode(this.nodes[0], \"blue\");\n    }\n    drawHead() {\n        this.ctx.drawImage(this.snakeHead, this.x * this.cellWidth, this.y * this.cellHeight, 50, 50);\n    }\n    grow() {\n        const growAmount = _settings__WEBPACK_IMPORTED_MODULE_0__[\"snake\"].growAmount;\n        const tailIdx = this.nodes.length - 1;\n        for (let i = 0; i < growAmount; i++) {\n            const clone = this.cloneNode(tailIdx);\n            this.nodes.push(clone);\n        }\n    }\n    shrink() {\n        const shrinkAmount = _settings__WEBPACK_IMPORTED_MODULE_0__[\"snake\"].shrinkAmount;\n        for (let i = 0; i < shrinkAmount; i++) {\n            this.nodes.pop();\n        }\n    }\n    size() {\n        return this.nodes.length - 5;\n    }\n    cloneNode(idx) {\n        return { x: this.nodes[idx].x, y: this.nodes[idx].y };\n    }\n    drawNode(node, color) {\n        //draws the single red square , drawing the snake\n        this.ctx.fillStyle = color;\n        this.ctx.fillRect(node.x * this.cellWidth + 8, node.y * this.cellHeight + 8, 30, 30);\n    }\n    updateBody() {\n        // last index of the nodes array till first one\n        for (let i = this.nodes.length - 1; i > 0; i--) {\n            this.nodes[i].x = this.nodes[i - 1].x;\n            this.nodes[i].y = this.nodes[i - 1].y;\n        }\n    }\n    updateHead() {\n        const headNode = this.nodes[0];\n        switch (this.dir) {\n            case \"ArrowDown\":\n                headNode.y++;\n                break;\n            case \"ArrowLeft\":\n                headNode.x--;\n                break;\n            case \"ArrowRight\":\n                headNode.x++;\n                break;\n            case \"ArrowUp\":\n                headNode.y--;\n        }\n    }\n    isDead() {\n        const headNode = this.nodes[0];\n        if (headNode.x >= _settings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimX - 1) {\n            return true;\n        }\n        if (headNode.x < 1) {\n            return true;\n        }\n        if (headNode.y >= _settings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].dimY - 1) {\n            return true;\n        }\n        if (headNode.y < 1) {\n            return true;\n        }\n        const headHittingBody = this.nodes.slice(1).some(node => {\n            return node.x === headNode.x && node.y === headNode.y;\n        });\n        if (headHittingBody)\n            return true;\n        return false;\n    }\n    update() {\n        this.updateFrame++;\n        if (this.updateFrame % _settings__WEBPACK_IMPORTED_MODULE_0__[\"board\"].speed === 0) {\n            this.updateBody();\n            this.updateHead();\n        }\n    }\n}\n\n\n//# sourceURL=webpack:///./src/snake.ts?");

/***/ })

/******/ });