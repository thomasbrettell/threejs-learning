import './styles.scss';
import {
  Scene,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  PerspectiveCamera,
  WebGLRenderer,
} from 'three';

//setup
const WINDOW_WIDTH = 800;
const WINDOW_HEIGHT = 600;
const canvasEl = document.getElementById('canvas');

//scene
const scene = new Scene();

//cube
const geometry = new BoxGeometry(1, 1, 1);
const material = new MeshBasicMaterial({
  color: 'red',
});
const cube = new Mesh(geometry, material);
scene.add(cube);

//camera
const camera = new PerspectiveCamera(75, WINDOW_WIDTH / WINDOW_HEIGHT);
camera.position.z = 3
camera.position.x = 1
scene.add(camera);

//renderer
const renderer = new WebGLRenderer({
  canvas: canvasEl,
});
renderer.setSize(WINDOW_WIDTH, WINDOW_HEIGHT);
renderer.render(scene, camera);
