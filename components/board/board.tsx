import { View, StyleSheet, Alert, Text } from 'react-native';
import { useState } from 'react';

import { TILE_SIZE, EMPTY_MATRIX } from '../../config/constants';
import { findWinner } from '../../utils/game';
import type { TileProps } from '../../types/tiles';
import { Tile } from '../tile/tile';
import { useConnection } from '../../hooks/useConnection';

const Board = () => {
  const [tiles, setTiles] = useState(EMPTY_MATRIX);
  const [yourTurn, setYourTurn] = useState(true);

  const verifyResults = (matrixTile: TileProps[][]) => {
    const winner = findWinner(matrixTile);

    if (winner) {
      setYourTurn(false);

      Alert.alert('Result', winner == self ? 'You Win' : 'You Lose', [
        {
          text: 'Play Again',
          onPress: () => {
            setTiles((state) => {
              const newState = state.map((row) => row.map(() => ({})));

              return newState;
            });

            setYourTurn(true);
          },
        },
      ]);
    }
  };

  const { self, mutateMove } = useConnection({
    onUpdate: (newData) => {
      setYourTurn(true);

      updateState(newData);
    },
  });

  const handlePress = ({ x, y }: TileProps) => {
    if (yourTurn) {
      updateState({
        x,
        y,
        player: { id: self },
      });
      setYourTurn(false);
      mutateMove({ x, y });
    }
  };

  const updateState = ({ x, y, player }: TileProps) => {
    setTiles((state) => {
      const newState = Object.assign([], state) as TileProps[][];
      newState[y][x].player = player;

      verifyResults(newState);
      return newState;
    });
  };

  return (
    <View>
      <View style={styles.container}>
        {tiles.map((row, y) =>
          row.map((item, x) => {
            const { player } = item as TileProps;
            return (
              <Tile
                onPress={handlePress}
                key={`tile-${y || 0}-${x}`}
                player={player}
                isSelf={self === player?.id}
                x={x}
                y={y}
              />
            );
          })
        )}
      </View>
      <Text>{yourTurn ? 'Your Turn' : 'Awaiting Player'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#0b6a75',
    width: TILE_SIZE * 3,
    height: TILE_SIZE * 3,
  },
});

export { Board };
