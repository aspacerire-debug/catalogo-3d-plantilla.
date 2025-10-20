import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';

function Model({ url }: { url?: string }) {
  if (!url) {
    return (
      <mesh castShadow receiveShadow rotation={[0, 0.7, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#22d3ee" roughness={0.35} metalness={0.15} />
      </mesh>
    );
  }
  const gltf = useGLTF(url, true);
  return <primitive object={gltf.scene} />;
}

export default function ThreeViewer({ modelUrl }: { modelUrl?: string }) {
  return (
    <Canvas camera={{ position: [3, 2, 5], fov: 50 }} gl={{ antialias: true }}>
      <color attach="background" args={['#0b1220']} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
      <Suspense fallback={null}>
        <Model url={modelUrl} />
        <Environment preset="city" />
      </Suspense>
      <OrbitControls enablePan />
    </Canvas>
  );
}

useGLTF.preload('/model.glb');
