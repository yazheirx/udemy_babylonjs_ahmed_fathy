/// <reference path='babylonjs.max.js' />

let canvas;
let engine;
let scene;
document.addEventListener('DOMContentLoaded', startGame);

function startGame() {
    canvas = document.getElementById('renderCanvas');
    engine = new BABYLON.Engine(canvas, true);
    scene = createScene();
    engine.runRenderLoop(() => {
        scene.render();
    });
}

window.addEventListener('resize', () => engine.resize());
