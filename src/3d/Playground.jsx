import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Box from "./Box";
import Plane from "./Plane";

export default function Playground() {
  return (
    <Canvas>
      <Box />
      <Plane />
      <OrbitControls />
      <ambientLight intensity={1} />
      <directionalLight intensity={1} position={[0, 1, 0]} />
    </Canvas>
  );
}
