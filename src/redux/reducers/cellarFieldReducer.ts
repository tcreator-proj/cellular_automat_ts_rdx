import { STATUS_CODES } from 'http';
import { Engine } from '../../linear-engine/Engine';
import Field from '../../models/Field';
import { Row } from '../../models/Row';
import { Dimension } from '../../types/enums';
import { ACTIONS } from '../actions/actions';

type FieldState = {
  field: Row[]
}

const f: Field = new Field(64, Dimension.ONE, null, false);
const e: Engine = new Engine(f, 18)
const initialBoard: FieldState = {
  field: f.field
}

export function cellarFieldReducer(state = initialBoard, action: any) {
  switch(action.type) {
    case ACTIONS.CHOICE_POINT: {
      const {coord} = action.payload;
      f.markCell(coord.x, coord.y);
      return {...state};
    }
    case ACTIONS.RENDER: { 
      const isMark: boolean[] = e.step();
      if(isMark[0]) {
        return {...state};
      }
      return state;
    }
    default: {
      return state;
    }
  }
}