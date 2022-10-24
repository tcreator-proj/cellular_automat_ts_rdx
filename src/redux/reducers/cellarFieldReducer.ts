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
f.setPountMap([new Coord(0, 63)])
let e: Engine = new Engine(f, 0);

const initialBoard: FieldState = {
  field: f.field,
  played: false,
  intervalId: 0,
  rule: 0
}

export function cellarFieldReducer(state: FieldState = initialBoard, action: AnyAction) {
  function turnOff(): void {
    state.played = false;
  }

  switch (action.type) {
    case ACTIONS.CHANGE_RULE: {
      state.rule = action.payload.rule;
      e = new Engine(f, state.rule);
      return {...state}
    }
    case ACTIONS.SET_INTERVAL_ID: {
      return {...state, intervalId: action.payload.id}
    }
    case ACTIONS.PLAY: {
      return { ...state, played: !state.played };
    }
    case ACTIONS.ONE_STEP: {
      clearInterval(state.intervalId);
      turnOff()

      const [isMark]: boolean[] = e.step();
      
      if (isMark) {
        return { ...state };
      }
      return state;
    }
    case ACTIONS.CLEAR: {
      f = new Field(row, col, false);
      state.field = f.field;
      f.setPountMap([new Coord(0, 63)])
      e = new Engine(f, state.rule);
      turnOff();
      clearInterval(state.intervalId);
      return { ...state }
    }
    case ACTIONS.CHOICE_POINT: {
      const { coord }: { coord: Coord } = action.payload;
      f.markCell(coord.x, coord.y);
      return { ...state };
    }
    case ACTIONS.STEP_AND_RENDER: {
      const [isMark, end]: boolean[] = e.step();
      if(end) {
        turnOff();
        return {...state};
      }
      if (isMark) {
        return { ...state };
      }
      return state;
    }
    default: {
      return state;
    }
  }
}