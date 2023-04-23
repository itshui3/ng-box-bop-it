import { PiecesMap } from './pieces-map';
import { IPositionMap } from '../services/positions.service';

export const levelData: {
  positions: IPositionMap;
} = {
  positions: {
    [PiecesMap.player]: { x: 0, y: 0, w: 30, h: 30 },
    [PiecesMap.deadBlock]: { x: 50, y: 50, w: 20, h: 20 },
  },
};
