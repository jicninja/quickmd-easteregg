import { socket } from '../services/sockets';
import { useEffect, useState, useRef } from 'react';
import type { TileProps } from '../types/tiles';

type useConnectionUpdate = {
  onUpdate: (newData: TileProps) => void;
};

const useConnection = ({ onUpdate }: useConnectionUpdate) => {
  const callback = useRef<(newData: TileProps) => void>();
  const [self, setSelf] = useState();

  useEffect(() => {
    if (!callback.current) {
      callback.current = onUpdate;
    }
    socket.on('connection', (data) => {
      setSelf(data.id);
    });

    socket.on('moveUser', (data: TileProps) => {
      callback.current?.(data);
    });
  }, []);

  const mutateMove = ({ x, y }: Pick<TileProps, 'x' | 'y'>) => {
    socket.emit('moveUser', { x, y });
  };
  return { self, mutateMove };
};

export { useConnection };
