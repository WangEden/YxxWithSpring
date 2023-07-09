import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader  } from 'three/addons/loaders/DRACOLoader.js';

// import * as THREE from '../node_modules/three/build/three.module.js';
// import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js';
// import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader.js';
// import { DRACOLoader  } from '../node_modules/three/examples/jsm/loaders/DRACOLoader.js';

// 创建场景和相机
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// 创建渲染器,设置渲染器的大小,将渲染器生成的子节点挂载到body中
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.querySelector('.model').appendChild(renderer.domElement);

// 设置相机位置
camera.position.z = 100;

// 创建轨道控制器,监听视角变化事件
const controls = new OrbitControls( camera, renderer.domElement );
controls.addEventListener('change', renderer)

var ambientLight = new THREE.AmbientLight(0x0c0c0c) // 创建环境光
var color = new THREE.Color(0x26E250) //创建颜色对象color
ambientLight.color = color // 给环境光修改颜色
scene.add(ambientLight) // 将环境光添加到场景

// 导入模型并渲染
const loader = new GLTFLoader();
const path =  '../models/gcDraco.glb'
let dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath( '../node_modules/three/examples/jsm/libs/draco/' );
loader.setDRACOLoader( dracoLoader );
loader.load( path, function ( gltf ) {
    scene.add( gltf.scene );
    animate();
}, function (xhr) {
    var _onProgress = Math.floor(xhr.loaded / xhr.total * 100);
    var progress = document.querySelector('.cover .progress .progressText');
    progress.innerText = _onProgress +  '%';
    if (_onProgress == 100) {
        document.querySelector('.cover .progress').style.display = 'none';
    }
}, function ( error ) {
    console.error( error );
} );

// 实时渲染方法
function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}