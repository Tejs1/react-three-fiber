import { DoubleSide } from "three";

export default function Plane(props) {
  return (
    <mesh {...props} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial color="lightblue" side={DoubleSide} />
    </mesh>
  );
}
