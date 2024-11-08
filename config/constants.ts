import type { TileProps } from '../types/tiles';

const API_DOMAIN = 'https://quickmd-server.onrender.com/'; //'http://192.168.68.81:3000/';
const TILE_SIZE = 64;

const EMPTY_MATRIX: TileProps[][] | {}[][] = [
  [{}, {}, {}],
  [{}, {}, {}],
  [{}, {}, {}],
];

export { API_DOMAIN, TILE_SIZE, EMPTY_MATRIX };
