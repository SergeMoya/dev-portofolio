import React, { useRef, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, SpotLight } from '@react-three/drei';

const CameraSetup = () => {
  const { camera } = useThree();
  
  useEffect(() => {
    camera.position.set(8, 4, 4);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  return null;
};

const ComputerScene = () => {
  const model = useGLTF('/computer/scene.gltf', true);
  const modelRef = useRef();

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.position.y = -1;
    }
  }, []);

  return (
    <Canvas>
      <CameraSetup />
      <ambientLight intensity={0.7} /> {/* Increased ambient light intensity */}
      <directionalLight position={[10, 10, 5]} intensity={1.2} /> {/* Increased main light intensity */}
      
      {/* Added fill light from the opposite side */}
      <directionalLight position={[-10, 5, -5]} intensity={0.8} color="#FFF5E6" />
      
      {/* Added spotlight to focus on the desktop */}
      <SpotLight
        position={[0, 5, 0]}
        angle={0.6}
        penumbra={0.5}
        intensity={1.5}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />

      <primitive ref={modelRef} object={model.scene} scale={0.5} />
      <OrbitControls 
        enablePan={true}
        enableZoom={false}
        enableRotate={true}
        maxPolarAngle={Math.PI * 0.50}
        minPolarAngle={Math.PI * 0.25}
        maxDistance={7}
        minDistance={2}
      />
    </Canvas>
  );
};

export default ComputerScene;