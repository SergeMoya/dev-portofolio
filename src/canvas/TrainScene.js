import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Train = () => {
  const model = useGLTF('/mushroom/scene.gltf', true);

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <primitive object={model.scene} scale={1.0} />
      <OrbitControls 
        enablePan={false} 
        enableZoom={false} 
        enableRotate={true}
        maxPolarAngle={Math.PI * 0.75} // Allows the camera to move 75% downwards
        minPolarAngle={Math.PI * 0.25} // Allows the camera to move 25% upwards
      />
    </Canvas>
  );
};

export default Train;
