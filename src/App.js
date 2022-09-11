// import logo from "./logo.svg";
import "./App.css";
import "aframe";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { scenes } from "aframe";
import meta from "./assets/bg.jpg";
import home from "./assets/home.png";
import mountain from "./models/mountain.glb";
import Gem from "./gem-js/Gem.js";

function App() {
  const loader = new GLTFLoader();

  loader.load(mountain, (d) => {
    const entity = document.getElementById("mountain");
    entity.object3D.add(d.scene);
  });

  return (
    <a-scene>
      <a-assets>
        <img id="sky" src={meta} alt="background" />
        <img id="home" src={home} alt="home" />
        <a-asset-item
          id="glbtestmodel"
          src="https://thinkuldeep.com/modelviewer/Astronaut.glb"
        ></a-asset-item>
      </a-assets>

      <Gem x={0} y={2} z={-10} />

      <a-entity id="mountain" position="0 -10 0" scale="15 15 15"></a-entity>
      <a-entity>
        <a-camera id="camera">
          <a-ring
            radius-outer="0.03"
            radius-inner="0.02"
            position="0 0 -1"
            material="color: cyan; shader: flat"
            cursor="maxDistance: 30; fuse: true"
            // 控制 a-link 不要那麼 sensitive
            raycaster="far: 100; objects: [link];"
          >
            <a-animation
              begin="click"
              easing="ease-in"
              attribute="scale"
              fill="backwards"
              from="0.1 0.1 0.1"
              to="1 1 1"
              dur="150"
            ></a-animation>
            <a-animation
              begin="fusing"
              easing="ease-in"
              attribute="scale"
              fill="forwards"
              from="1 1 1"
              to="0.1 0.1 0.1"
              dur="1500"
            ></a-animation>
          </a-ring>
        </a-camera>
      </a-entity>
      <a-link
        position="-20 2 -10"
        href="http://speed.hinet.net/httptest.html"
        title="HTTP Example website"
        image="#home"
      ></a-link>
      <a-entity
        loading="lazy"
        id="glbtest"
        gltf-model="#glbtestmodel"
        position="20 -5 -20"
        scale="10 10 10"
      ></a-entity>

      <a-sky color="#FFC65D" material="src:#sky" rotation="0 0 0"></a-sky>
    </a-scene>
  );
}

export default App;
