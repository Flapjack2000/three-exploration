"use client"
import { Canvas, useThree, useFrame, ThreeEvent } from "@react-three/fiber"
import { OrbitControls, shaderMaterial } from "@react-three/drei";
import type { OrbitControls as OrbitControlsType } from 'three-stdlib'
import { useRef, useState } from "react"
import { Color, MeshStandardMaterial } from "three";
import { Cube } from "./Cube"

export default function Home() {
  const orbitControlsRef = useRef<OrbitControlsType | null>(null);


  return (
    <div className="h-full fixed">
      <Canvas
        style={{
          zIndex: 0,
          position: "fixed",
          width: "100vw",
          height: "100vh",
          top: 0, left: 0,
          userSelect: "none",
        }}
        onCreated={({ camera }) => {
          camera.up.set(0, 0, 1);
          camera.far = 99999;
          camera.position.x = 10;
          camera.position.z = 0
          camera.updateProjectionMatrix();
          orbitControlsRef.current?.saveState(); // Records camera pos/rot for reset button
        }}
        frameloop="always"
      >

        <Cube />

        <OrbitControls ref={orbitControlsRef}></OrbitControls>
        <ambientLight />
        {/* <directionalLight position={[1.1, 0, 10]} />
        <directionalLight position={[1.1, 0, -10]} /> */}
        <axesHelper args={[5]} />
      </Canvas>
    </div>
  );
}
