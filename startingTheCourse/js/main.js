let canvas;
let engine;
let scene;
document.addEventListener('DOMContentLoaded', startGame);

function startGame() {
    canvas = document.getElementById('renderCanvas');
    canvas.style.width = '1800px';
    canvas.style.height = '1200px';
    engine = new BABYLON.Engine(canvas, true);
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    scene = createScene();
    engine.runRenderLoop(() => {
        scene.render();
    });
}

let createScene = () => {
    let scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3(1, 0, 1);
    // code here
    let sphere = BABYLON.Mesh.CreateSphere('mySphere', 32, 2, scene);
    let ground = BABYLON.Mesh.CreateGround('myGround', 20, 20, 50, scene);
    let camera = new BABYLON.FreeCamera(
        'myCamera',
        new BABYLON.Vector3(0, 1, -10),
        scene
    );
    camera.attachControl(canvas);
    let light = new BABYLON.PointLight('myLight', new BABYLON.Vector3(0, 10, 0), scene);
    light.intensity = 0.5;
    light.diffuse = new BABYLON.Color3(1, 0, 0);
    return scene;
};

window.addEventListener('resize', () => {
    canvas.style.width = '1800px';
    canvas.style.height = '1200px';
    engine.resize();
    canvas.style.width = '100%';
    canvas.style.height = '100%';
});
