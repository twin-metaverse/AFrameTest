import "aframe";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { useLoader } from "@react-three/fiber";
import Prototypes from "prop-types";
import { useGLTF } from "@react-three/drei";

function RemoteGem({ x, y, z }) {
  // const loader = new GLTFLoader();
  // const remoteGem = useLoader(
  //   GLTFLoader,
  //   "https://github.com/twin-metaverse/AFrameTest/raw/main/src/models/gem1.glb"
  // );
  // loader.load(remoteGem, (d) => {
  //   const entity = document.getElementById("remoteGem");
  //   entity.object3D.add(d.scene);
  // });
  const remoteGem = useGLTF(
    "https://thinkuldeep.com/modelviewer/Astronaut.glb"
  );
  return <primitive object={remoteGem.scene} />;

  // return (
  //   <a-entity
  //     id="remoteGem"
  //     position={`${x} ${y} ${z}`}
  //     scale="0.1 0.1 0.1"
  //   ></a-entity>
  // );
}
RemoteGem.Prototypes = {
  x: Prototypes.number,
  y: Prototypes.number,
  z: Prototypes.number,
};

export default RemoteGem;
