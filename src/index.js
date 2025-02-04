import { WebGLRenderer, Scene, PerspectiveCamera, PointLight } from 'three'
import loop from 'raf-loop'
import WAGNER from '@superguigui/wagner'
import BloomPass from '@superguigui/wagner/src/passes/bloom/MultiPassBloomPass'
import FXAAPass from '@superguigui/wagner/src/passes/fxaa/FXAAPass'
import resize from 'brindille-resize'
//import Torus from './objects/Torus'
import Oggetto from './objects/Oggetto'
import OrbitControls from './controls/OrbitControls'
import { gui } from './utils/debug'

/* Custom settings */
const SETTINGS = {
  useComposer: false
}

/* Init renderer and canvas */
const container = document.body
const renderer = new WebGLRenderer({ antialias: true })
renderer.setClearColor(0x323232)
container.style.overflow = 'hidden'
container.style.margin = 0
container.appendChild(renderer.domElement)

/* Composer for special effects */
const composer = new WAGNER.Composer(renderer)
const bloomPass = new BloomPass()
const fxaaPass = new FXAAPass()

/* Main scene and camera */
const scene = new Scene()
const camera = new PerspectiveCamera(45, resize.width / resize.height, 1, 1000)
const controls = new OrbitControls(camera, { element: renderer.domElement, parent: renderer.domElement, distance: 10, phi: Math.PI * 1 })

/* Lights */
const frontLight = new PointLight(0xFFFFFF, 1.2)
const backLight = new PointLight(0xFFFFFF, 0.8)
const frontLight2 = new PointLight(0xFFFFFF, 1)
const backLight2 = new PointLight(0xFFFFFF, 1.3)
const frontLight3 = new PointLight(0xFFFFFF, 1)
const backLight3 = new PointLight(0xFFFFFF, 0.8)
scene.add(frontLight)
scene.add(backLight)
scene.add(frontLight2)
scene.add(backLight2)
scene.add(frontLight3)
scene.add(backLight3)

frontLight.position.x = 20
frontLight.position.y = 5

backLight.position.x = -20
backLight.position.y = -5

frontLight2.position.y = 20
frontLight2.position.x = 5

backLight2.position.y = -20
backLight2.position.x = -5

frontLight3.position.z = 20
frontLight3.position.x = 5

backLight3.position.z = -20
backLight3.position.x = -5


/* Actual content of the scene */
//const torus = new Torus()
const oggetto = new Oggetto()
//scene.add(torus)
scene.add(oggetto)

/* Various event listeners */
resize.addListener(onResize)

/* create and launch main loop */
const engine = loop(render)
engine.start()

/* some stuff with gui */
gui.add(SETTINGS, 'useComposer')

/* -------------------------------------------------------------------------------- */

/**
  Resize canvas
*/
function onResize() {
  camera.aspect = resize.width / resize.height
  camera.updateProjectionMatrix()
  renderer.setSize(resize.width, resize.height)
  composer.setSize(resize.width, resize.height)
}

/**
  Render loop
*/
function render(dt) {


  controls.update()
  if (SETTINGS.useComposer) {
    composer.reset()
    composer.render(scene, camera)
    composer.pass(bloomPass)
    composer.pass(fxaaPass)
    composer.toScreen()
  } else {
    renderer.render(scene, camera)
  }
}
