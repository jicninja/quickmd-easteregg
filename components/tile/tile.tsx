import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useCallback } from 'react';
import { TILE_SIZE } from '../../config/constants';
import type { TileProps } from '../../types/tiles';

type TileContainerProps = TileProps & {
  isSelf: boolean;
  onPress?: (props: TileProps) => void;
};

const Tile = ({ x, y, player, isSelf, onPress }: TileContainerProps) => {
  const handlePress = useCallback(() => {
    if (!player?.id) {
      onPress?.({ x, y, player });
    }
  }, [player, onPress, x, y]);

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={player?.id ? 1 : 0.5}
      style={[styles.container, { left: x * TILE_SIZE, top: y * TILE_SIZE }]}
    >
      <View
        style={[
          styles.wrapper,
          player?.id
            ? [isSelf ? styles.tileSelf : styles.tileEnemy, styles.tile]
            : undefined,
        ]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: TILE_SIZE,
    height: TILE_SIZE,
    position: 'absolute',
    padding: 5,
  },

  tile: {
    borderRadius: 100,
  },
  tileSelf: {
    backgroundColor: '#0b6a75',
  },
  tileEnemy: {
    backgroundColor: '#5ba3ab',
  },
  wrapper: {
    width: TILE_SIZE - 10,
    height: TILE_SIZE - 10,
  },
});

export { Tile };
