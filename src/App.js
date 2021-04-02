import { useEffect, useRef } from 'react';

import { initialiseThree } from './threeJs'

function App() {
  const threeRef = useRef();
  const { scene, camera, renderer } = initialiseThree();
  useEffect(() => {
    threeRef.current.appendChild(renderer.domElement)
  },[]);
  return (
    <div ref={threeRef} />
  );
}

export default App;
