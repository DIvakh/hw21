let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let snowManBody = function (x, y, radius, fillCircle) {
    ctx.strokeStyle = 'lightgray';
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.arc(x, y, radius, 2 * Math.PI, false);
    if (fillCircle) {
        ctx.fill();
        ctx.stroke();
    } else {
        ctx.stroke();
    }
};

let snowManAccessories = function (x, y, radius, fillCircle, pi) {
    ctx.fillStyle = 'black';
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.arc(x, y, radius, pi * Math.PI, false, true);
    if (fillCircle) {
        ctx.fill();
    } else {
        ctx.stroke();
    }
};

let snowManNose = function (x, y, radius, startangle, endangle) {
    ctx.fillStyle = 'orange';
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.arc(x, y, radius, startangle, endangle);
    ctx.lineTo(x, y);
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.fill();
};

let snowManArms = function (moveX, moveY, x, y) {
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(moveX, moveY);
    ctx.lineTo(x, y);
    ctx.stroke();
};

snowManBody(320, 400, 80, true);
snowManBody(320, 290, 50, true);
snowManBody(320, 220, 35, true);

snowManAccessories(305, 213, 3.5, true, 2);
snowManAccessories(335, 213, 3.5, true, 2);
snowManAccessories(320, 235, 8, true, 1);
snowManAccessories(320, 320, 5, true, 2);
snowManAccessories(320, 295, 5, true, 2);
snowManAccessories(320, 270, 5, true, 2);

snowManNose(296, 228, 27, 100.1, 0);

snowManArms(290, 260, 220, 230);
snowManArms(350, 260, 420, 230);
snowManArms(230, 234, 205, 240);
snowManArms(410, 234, 435, 240);

// ============== TASK 2 ==============

var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0x080808, 1);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT);
camera.position.z = 70;
scene.add(camera);

var geometry = new THREE.SphereGeometry(15, 32, 16);
const material = new THREE.MeshPhongMaterial({ color: 0xffffe5, shininess: -10 });
var sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

const light = new THREE.DirectionalLight(0xffffff);
light.position.copy(camera.position);
scene.add(light);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    light.position.x = 500 * Math.sin(Date.now() / 360);
    light.position.z = 500 * Math.cos(Date.now() / 360);
}

animate();
