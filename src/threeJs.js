import { 
  Scene, 
  PerspectiveCamera,
  WebGLRenderer,
} from 'three';

const WIDTH = window.innerWidth;
const HEIGHT = 930;
export function initialiseThree() {
  const scene = new Scene();
  const camera = new PerspectiveCamera( 75, WIDTH / HEIGHT , 0.1, 1000 );
  const renderer = new WebGLRenderer();
  renderer.setSize( WIDTH, HEIGHT  );
  return { scene, camera, renderer };
}