import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
  const gltf = useGLTF("/d_trump.glb");
  console.log(gltf);
  return <primitive object={gltf.scene} scale={3} />;
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [25, 5, 30], fov: 10 }}>
      <ambientLight intensity={4.5} />
      <directionalLight position={[5, 10, 7]} intensity={1} />
      <OrbitControls />
      <Model />
    </Canvas>
  );
}
