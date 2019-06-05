import React from 'react';
import { Entity } from 'aframe-react';
// This wall-generator was inspiried by Shane Hudon's post
// https://24ways.org/2016/first-steps-in-vr/

// Walls generator
// This will auto generate a map. Right now it needs to be an equal height and width
// Numbers are used to create the map

// NUMBER KEY:
// 0 = no walls
// 1 = normal wall
// 2 = black wall
// 3 = secret wall
// 4 = brick walls
// 8 = user start position
// 9 = console log position

// prettier-ignore
const data = [
  0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0,
  0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0,
  0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
  0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0,
  0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
  0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0,
  0, 4, 4, 4, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0,
  4, 0, 0, 0, 4, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0,
  4, 0, 0, 0, 4, 4, 4, 1, 0, 8, 0, 0, 0, 0, 0, 1, 0, 0, 0,
  4, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0,
  0, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0
];

const map = {
  data,
  height: 19,
  width: 19
};

export default function renderStart() {
  const WALL_SIZE = 3;
  const WALL_HEIGHT = 12;
  const el = [];
  let playerPos;

  for (let x = 0; x < map.height; x += 1) {
    for (let y = 0; y < map.width; y += 1) {
      const i = y * map.width + x;
      const position = `${(x - map.width / 2) * WALL_SIZE} 1.6 ${(y -
        map.height / 2) *
        WALL_SIZE}`;

      // if the number is 1 - 4, create a wall
      if (
        map.data[i] === 1 ||
        map.data[i] === 2 ||
        map.data[i] === 3 ||
        map.data[i] === 4
      ) {
        const wallProps = {};
        wallProps.width = WALL_SIZE;
        wallProps.height = WALL_HEIGHT;
        wallProps.depth = WALL_SIZE;
        wallProps.position = position;

        // black wall
        if (map.data[i] === 2) {
          wallProps.color = '#000';
          wallProps['static-body'] = '';
        }

        // secretwall
        else if (map.data[i] === 3) {
          wallProps.color = '#fff';
          wallProps.material = {
            src: '#wall-secret',
            repeat: '4 4'
          };
        }

        // brick wall
        else if (map.data[i] === 4) {
          wallProps.color = '#fff';
          wallProps.material = {
            src: '#wall-brick',
            repeat: '2 2'
          };
          wallProps['static-body'] = '';
        }

        // normal walls
        else {
          wallProps.color = '#fff';
          wallProps.material = {
            src: '#wall',
            repeat: '20 20',
            roughness: 1
          };
          wallProps['static-body'] = '';
        }

        el.push(<Entity static-body={true} primitive="a-box" {...wallProps} />);
      }
      // set player position if the number is a 2
      if (map.data[i] === 8) {
        playerPos = position;
      }

      if (map.data[i] === 9) {
        console.log(position);
      }
    }
  }

  return { playerPos, el };
}
