import type { TileProps } from '../types/tiles';

const findWinner = (matrixGame: TileProps[][]) => {
  for (let i = 0; i < 3; i++) {
    if (
      matrixGame[i][0].player?.id &&
      matrixGame[i][0].player?.id === matrixGame[i][1].player?.id &&
      matrixGame[i][1].player?.id === matrixGame[i][2].player?.id
    ) {
      return matrixGame[i][0].player?.id;
    }
  }

  for (let i = 0; i < 3; i++) {
    if (
      matrixGame[0][i].player?.id &&
      matrixGame[0][i].player?.id === matrixGame[1][i].player?.id &&
      matrixGame[1][i].player?.id === matrixGame[2][i].player?.id
    ) {
      return matrixGame[0][i].player?.id;
    }
  }

  if (
    matrixGame[0][0].player?.id &&
    matrixGame[0][0].player?.id === matrixGame[1][1].player?.id &&
    matrixGame[1][1].player?.id === matrixGame[2][2].player?.id
  ) {
    return matrixGame[0][0].player?.id;
  }
  if (
    matrixGame[0][2].player?.id &&
    matrixGame[0][2].player?.id === matrixGame[1][1].player?.id &&
    matrixGame[1][1].player?.id === matrixGame[2][0].player?.id
  ) {
    return matrixGame[0][2].player?.id;
  }

  return null;
};

export { findWinner };
