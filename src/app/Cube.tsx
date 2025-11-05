import { useRef } from 'react';
import { useFrame, extend } from '@react-three/fiber';
import * as THREE from 'three';
import cubeFragmentShader from "./cube_frag.glsl";
import cubeVertexShader from "./cube_vert.glsl";

export const Cube = () => {
  const meshRef = useRef<THREE.Mesh<THREE.BoxGeometry, THREE.ShaderMaterial>>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.material.uniforms.uTime.value = 3 * state.clock.elapsedTime;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2, 32, 32, 32]} /> {/* More segments for smooth wave */}
      <shaderMaterial
        vertexShader={cubeVertexShader}
        fragmentShader={cubeFragmentShader}
        uniforms={{
          uTime: { value: 0 }
        }}
      />
    </mesh>
  );
}