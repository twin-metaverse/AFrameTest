import "aframe";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import gem from "../models/gem.glb";
import Prototypes from "prop-types";

function Gem({ x, y, z }) {
  const loader = new GLTFLoader();
  loader.load(gem, (d) => {
    const entity = document.getElementById("gem");
    entity.object3D.add(d.scene);
  });
  return (
    <a-entity id="gem" position={`${x} ${y} ${z}`} scale="3 3 3"></a-entity>
  );
}
Gem.Prototypes = {
  x: Prototypes.number,
  y: Prototypes.number,
  z: Prototypes.number,
};

export default Gem;
