import { AnyAction } from 'redux';
import { Engine } from '../../linear-engine/Engine';
import Coord from '../../models/Coord';
import Field from '../../models/Field';
import { Row } from '../../models/Row';
import { ACTIONS } from '../actions/actions';

type FieldState = {
  field: Row[],
  played: boolean,
  intervalId: number,
  rule: number
}

const row: number = 45;
const col: number = 127;

let f: Field = new Field(row, col, false);
let e: Engine = new Engine(f, 18);

const initialBoard: FieldState = {
  field: f.field,
  played: false,
  intervalId: 0,
  rule: 0
}

export function cellarFieldReducer(state: FieldState = initialBoard, action: AnyAction) {
  switch (action.type) {
    case ACTIONS.SET_INTERVAL_ID: {
      return {...state, intervalId: action.payload.id}
    }
    case ACTIONS.PLAY: {
      return { ...state, played: !state.played };
    }
    case ACTIONS.ONE_STEP: {
      clearInterval(state.intervalId);
      state.played = false;
      const isMark: boolean[] = e.step();
      if (isMark[0]) {
        return { ...state };
      }
      return state;
    }
    case ACTIONS.CLEAR: {
      f = new Field(row, col, false);
      state.field = f.field;
      e = new Engine(f, 18);
      state.played = false;
      clearInterval(state.intervalId);
      return { ...state }
    }
    case ACTIONS.CHOICE_POINT: {
      const { coord }: { coord: Coord } = action.payload;
      f.markCell(coord.x, coord.y);
      return { ...state };
    }
    case ACTIONS.STEP_AND_RENDER: {
      const isMark: boolean[] = e.step();
      if (isMark[0]) {
        return { ...state };
      }
      return state;
    }
    default: {
      return state;
    }
  }
}