import React, { useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

function Model({ mouseX }) {
  const gltf = useGLTF("/d_trump.glb");

  useFrame(() => {
    // Endast sidleds-rotation (Y-axel)
    gltf.scene.rotation.y = (mouseX * Math.PI) / 6;
    gltf.scene.rotation.x = 0;
  });

  return <primitive object={gltf.scene} scale={3} />;
}

export default function Scene() {
  const [mouseX, setMouseX] = useState(0);

  useEffect(() => {
    const onMouseMove = (e) => {
      setMouseX((e.clientX / window.innerWidth) * 2 - 1);
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <Canvas camera={{ position: [25, 5, 30], fov: 10 }}>
      <ambientLight intensity={4.5} />
      <directionalLight position={[5, 10, 7]} intensity={1} />
      <Model mouseX={mouseX} />
    </Canvas>
  );
}
