import Field from '../../models/Field';
import { Dimension } from '../../types/enums';
import { ACTIONS } from '../actions/actions';

type FieldState = {
  field: Field
}

const f: Field = new Field(64, Dimension.ONE, null, false);
const initialBoard: FieldState = {
  field: f
}

export function cellarFieldReducer(state = initialBoard, action: any) {
  switch(action.type) {
    case ACTIONS.CHOICE_POINT: {
      const {coord} = action.payload;
      state.field.markCell(coord.x, coord.y);
      return {...state};
    }
    default: {
      return state;
    }
  }
}