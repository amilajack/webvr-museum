import React from 'react';
import 'aframe';
import 'aframe-extras';
import 'aframe-physics-system';
import 'aframe-particle-system-component';
import 'aframe-room-component';
import 'aframe-teleport-controls';
import { Scene } from 'aframe-react';
import ReactDOM from 'react-dom';
import metmuseum from 'metmuseum';
import renderstart from './map';
import './video';

export default class VRScene extends React.Component {
  constructor() {
    super();
    this.state = {
      el: [],
      playerPos: '0 1.6 0',
      art: [],
      artPositions: ['0.5 1.4 0', '1.5 1.7 0', '2.5 1.4 0']
    };
  }

  async componentDidMount() {
    const art = await Promise.all([
      metmuseum.getItem(100),
      metmuseum.getItem(200),
      metmuseum.getItem(300)
    ]);
    this.setState({ art });
  }

  renderstart() {
    const { el, playerPos } = renderstart();
    this.setState({
      el,
      playerPos
    });
  }

  render() {
    return (
      <Scene
        inspector="https://cdn.jsdelivr.net/gh/aframevr/aframe-inspector@master/dist/aframe-inspector.min.js"
        fog="type: linear; color: #000; far: 16; near: 7"
        events={{ renderstart: this.renderstart.bind(this) }}
      >
        <a-entity id="rig" position="0 1 0" movement-controls kinematic-body>
          <a-entity
            id="player"
            camera
            position="0 1.6 0"
            look-controls="pointerLockEnabled: true"
          />
        </a-entity>

        <a-assets>
          <audio src="audio/84529__cmusounddesign__02-museum.ogg" id="bar" />
          <audio
            src="audio/219462__cediez__musee-victoria-londres-grand-escalier.ogg"
            id="foo"
          />

          <img id="floor" src="img/other/floor.jpg" />
          <img id="wall" src="img/other/wall-concrete.jpg" />
          <img id="wall-secret" src="img/other/wall-concrete-secret.jpg" />
          <img id="wall-brick" src="img/other/brick.jpg" />
          <img id="room-sign-1" src="img/other/room-sign-1.png" />
          <img id="room-sign-2" src="img/other/room-sign-2.png" />

          <img id="team-poster" src="img/team/poster.png" />
          <img id="team-arcadio" src="img/team/arcadio.png" />
          <img id="team-dan" src="img/team/dan.png" />
          <img id="team-dustin" src="img/team/dustin.png" />
          <img id="team-judy" src="img/team/judy.png" />
          <img id="team-maceij" src="img/team/maceij.png" />
          <img id="team-porfirio" src="img/team/porfirio.png" />

          <img id="room1-example" src="img/room1/example.png" />

          <img id="room2-final1" src="img/room2/final-1.png" />
          <img id="room2-final2" src="img/room2/final-2.png" />
          <img id="room2-final3" src="img/room2/final-3.png" />
          <img id="room2-final4" src="img/room2/final-4.png" />
          <img id="room2-mock1" src="img/room2/mock-1.png" />
          <img id="room2-mock2" src="img/room2/mock-2.png" />
          <img id="room2-mock3" src="img/room2/mock-3.png" />
          <img id="room2-mock4" src="img/room2/mock-4.png" />
          <img id="room2-wire1" src="img/room2/wire-1.png" />
          <img id="room2-wire2" src="img/room2/wire-2.png" />
          <img id="room2-wire3" src="img/room2/wire-3.png" />
          <img id="room2-wire4" src="img/room2/wire-4.png" />
          <img id="room2-final-sign" src="img/room2/final-sign.png" />
          <img id="room2-mock-sign" src="img/room2/mock-sign.png" />
          <img id="room2-wire-sign" src="img/room2/wire-sign.png" />

          <img id="room3-example" src="img/room3/example.png" />
          <img id="room3-example-stat" src="img/room3/examplestat.png" />
          <img id="room3-example-num" src="img/room3/examplenum.png" />
          <img id="room3-page-before" src="img/room3/page-before.png" />
          <img id="room3-page-after" src="img/room3/page-after.png" />
          <img id="room3-beforeafter" src="img/room3/beforeafter.png" />

          <img id="room4-map" src="img/room4/map.png" />
          <img id="room4-photo1" src="img/room4/photo1.png" />
          <img id="room4-photo2" src="img/room4/photo2.png" />
          <img id="room4-photo3" src="img/room4/photo3.png" />
          <img id="room4-photo4" src="img/room4/photo4.png" />
          <img id="room4-photo5" src="img/room4/photo5.png" />
          <img id="room4-photo6" src="img/room4/photo6.png" />
          <img id="room4-sign-photos" src="img/room4/sign-photos.png" />
          <img id="room4-sign-roadshow" src="img/room4/sign-roadshow.png" />

          <img id="room5-sign-back" src="img/room5/sign-back.png" />
          <img id="room5-sign-side" src="img/room5/sign-side.png" />
          <img id="room5-landing" src="img/room5/landing.png" />
          <img id="room5-rust" src="img/room5/rust.png" />
          <img id="room5-speech" src="img/room5/speech.png" />
          <img id="room5-vr" src="img/room5/vr.png" />
          <img id="room5-wa" src="img/room5/wa.png" />
          <img id="theater-curtains" src="img/theater/curtains.png" />
          <a-asset-item id="couch-obj" src="img/theater/couch/model.obj" />
          <a-asset-item id="couch-mtl" src="img/theater/couch/materials.mtl" />

          <a-asset-item id="fox-obj" src="img/secret/fox/model.obj" />
          <a-asset-item id="fox-mtl" src="img/secret/fox/materials.mtl" />

          <a-mixin id="floorMat" material="src:#floor" />

          <img
            id="groundTexture"
            src="https://cdn.aframe.io/a-painter/images/floor.jpg"
          />
          <img
            id="skyTexture"
            src="https://cdn.aframe.io/a-painter/images/sky.jpg"
          />
        </a-assets>

        <a-sound src="#foo" autoplay="true" loop={true} position="1 1 0" />
        <a-sound src="#bar" autoplay="true" loop={true} position="1 1 0" />

        <rw-room position="-2.5 0 -2.5" width="10" length="10" height="10">
          <rw-wall static-body material="color:#F88">
            <rw-doorhole id="holeA" />
          </rw-wall>
          <rw-wall static-body material="color:white">
            <a-box
              crossorigin="anonymous"
              src="foo.jpg"
              position="5 5 0"
              scale="0.5 0.5 0.2"
              width="8"
              length="2"
              height="8"
            />
          </rw-wall>
          <rw-wall static-body material="color:#F88">
            <rw-doorhole id="frontInner" />
          </rw-wall>
          <rw-wall static-body material="color:#F88" />

          <rw-floor mixin="floorMat" />
          <rw-ceiling material="color:#AAA" />
        </rw-room>

        <rw-doorlink from="#holeA" to="#holeB" width="5" position="0.5 0 0">
          <rw-floor mixin="floorMat" />
          <rw-ceiling material="color:#BB6" />
          <rw-sides material="color:#BB6" />
        </rw-doorlink>

        <rw-room position="0 0 -2.7">
          <rw-wall static-body position="-2 0 0" material="color:#F00" />
          <rw-wall
            static-body
            position=" 2 0 0"
            material="src:#testTex; repeat:0.5 0.5;"
          >
            <rw-doorhole id="holeB" />
          </rw-wall>
          <rw-wall static-body position=" 2 0 -5" material="color:#00F">
            <rw-doorhole id="holeC" />
            <rw-doorlink from="#holeC" to="#holeD" position="4 0 0" />
          </rw-wall>
          <rw-wall static-body position="-2 0 -5" material="color:#F0F">
            {this.state.art
              ? this.state.art.map((e, i) => (
                  <a-box
                    crossorigin="anonymous"
                    src="foo.jpg"
                    position={this.state.artPositions[i]}
                    scale="0.5 0.5 0.2"
                  />
                ))
              : null}
          </rw-wall>

          <rw-floor mixin="floorMat" />
          <rw-ceiling material="color:#99A" />
        </rw-room>

        <rw-room position="2 0 -5">
          <rw-wall static-body position="0 0 0" material="color:#800" />
          <rw-wall static-body position="0 0 2" material="color:#800">
            <rw-doorhole id="holeD" />
          </rw-wall>
          <rw-wall static-body position="1 0 2" material="color:#800" />
          <rw-wall static-body position="1 0 0" material="color:#800" />

          <rw-floor mixin="floorMat" />
          <rw-ceiling material="color:#99A" />
        </rw-room>

        <rw-room position="0 0 0" outside="true" material="color:#877">
          <rw-wall static-body position="103 0 -810" height="10" />
          <rw-wall static-body position="10 4 0 -810" height="10" />
          <rw-wall static-body position="10 4 0  310" height="10" />
          <rw-wall static-body position="103 0  310" height="10">
            <rw-doorhole id="frontOuter" />
            <rw-doorlink
              from="#frontInner"
              to="#frontOuter"
              material="color:#778"
              position="3 0 0"
            >
              <rw-floor static-body />
              <rw-ceiling static-body />
              <rw-sides static-body />
            </rw-doorlink>
          </rw-wall>
        </rw-room>

        <a-sky
          height="2048"
          radius="30"
          src="#skyTexture"
          theta-length="90"
          width="2048"
          segments-height="5"
          segments-width="8"
        />
        <a-plane
          src="#groundTexture"
          rotation="-90 0 0"
          position="0 -0.01 0"
          height="100"
          width="100"
          static-body
        />
      </Scene>
    );
  }
}

ReactDOM.render(<VRScene />, document.querySelector('#sceneContainer'));
