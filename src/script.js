import * as THREE from 'three'
import * as dat from 'dat.gui'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import './styles/globalStyles.css'
const canvas = document.querySelector('canvas.webgl')

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

const renderer = new THREE.WebGLRenderer({ 
    antialias: true, 
    alpha: true,
    canvas: canvas

});
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight);
camera.position.set(1.5, 1.5, 1.5);

window.addEventListener( 'resize', function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}, false );

const controls = new OrbitControls( camera, renderer.domElement );
controls.enableDamping = true;


const scene = new THREE.Scene()
scene.background = new THREE.Color("white")


const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
const material = new THREE.MeshBasicMaterial( { color: 'red' } );
const mesh = new THREE.Mesh( geometry, material );
mesh.scale.set(0.05, 0.05, 0.05)
scene.add( mesh );


const clock = new THREE.Clock()
const render = () => {
    const elapsedTime = clock.getElapsedTime()
    mesh.rotation.y = elapsedTime
    controls.update()
    renderer.render(scene, camera)
    window.requestAnimationFrame(render)
}
render();


