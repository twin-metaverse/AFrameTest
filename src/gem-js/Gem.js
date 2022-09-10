import "aframe";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import gem1 from "../models/gem1.glb";
import Prototypes from "prop-types";

function Gem({ x, y, z }) {
  const loader = new GLTFLoader();
  loader.load(gem1, (d) => {
    const entity = document.getElementById("gem1");
    entity.object3D.add(d.scene);
  });
  return (
    <a-entity
      id="gem1"
      position={`${x} ${y} ${z}`}
      scale="0.1 0.1 0.1"
    ></a-entity>
  );
}
Gem.Prototypes = {
  x: Prototypes.number,
  y: Prototypes.number,
  z: Prototypes.number,
};

export default Gem;
