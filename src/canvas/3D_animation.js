import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, SpotLight } from '@react-three/drei';

const CameraSetup = () => {
  const { camera } = useThree();
  
  useEffect(() => {
    camera.position.set(8, 4, 4);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  return null;
};

const Computer = ({ onInteraction }) => {
  const model = useGLTF('/computer/scene.gltf', true);
  const modelRef = useRef();
  const [isRotating, setIsRotating] = useState(true);

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.position.y = -1;
    }
  }, []);

  useFrame((state, delta) => {
    if (isRotating && modelRef.current) {
      modelRef.current.rotation.y += delta * 0.5;
    }
  });

  const handleInteraction = () => {
    setIsRotating(false);
    onInteraction();
  };

  return (
    <primitive 
      ref={modelRef} 
      object={model.scene} 
      scale={0.5}
      onClick={handleInteraction}
    />
  );
};

const ComputerScene = () => {
  const handleInteraction = () => {
    // This can be used to handle any parent-level interactions
  };

  return (
    <Canvas>
      <CameraSetup />
      <ambientLight intensity={0.7} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} />
      <directionalLight position={[-10, 5, -5]} intensity={0.8} color="#FFF5E6" />
      
      <SpotLight
        position={[0, 5, 0]}
        angle={0.6}
        penumbra={0.5}
        intensity={1.5}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />

      <Computer onInteraction={handleInteraction} />
      <OrbitControls 
        enablePan={true}
        enableZoom={false}
        enableRotate={true}
        maxPolarAngle={Math.PI * 0.50}
        minPolarAngle={Math.PI * 0.25}
        maxDistance={7}
        minDistance={2}
        onChange={handleInteraction}
      />
    </Canvas>
  );
};

export default ComputerScene;