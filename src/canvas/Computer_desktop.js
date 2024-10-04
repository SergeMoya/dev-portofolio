import React, { useRef, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const CameraSetup = () => {
  const { camera } = useThree();
  
  useEffect(() => {
    camera.position.set(8, 4, 4); // Adjust these values to change the initial camera position
    camera.lookAt(0, 0, 0);
  }, [camera]);

  return null;
};

const ComputerScene = () => {
  const model = useGLTF('/computer/scene.gltf', true);
  const modelRef = useRef();

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.position.y = -1; // Adjust the vertical position of the model
    }
  }, []);

  return (
    <Canvas>
      <CameraSetup />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <primitive ref={modelRef} object={model.scene} scale={0.5} /> {/* Adjust scale if needed */}
      <OrbitControls 
        enablePan={true}
        enableZoom={false}
        enableRotate={true}
        maxPolarAngle={Math.PI * 0.50}
        minPolarAngle={Math.PI * 0.25}
        maxDistance={7} // Maximum zoom out distance
        minDistance={2}  // Minimum zoom in distance
      />
    </Canvas>
  );
};

export default ComputerScene;
