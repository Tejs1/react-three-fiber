import React from "react";

export default function Box(props) {
  return (
    <mesh {...props} castShadow receiveShadow>
      <boxGeometry args={[1, 1, 1]} position={[1, 1, 1]} />
      <meshStandardMaterial color="royalBlue" />
    </mesh>
  );
}
