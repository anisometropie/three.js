import { 
  Scene, 
  PerspectiveCamera,
  WebGLRenderer,
} from 'three';

export function initialiseThree() {
  const scene = new Scene();
  const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  const renderer = new WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  return { scene, camera, renderer};
}