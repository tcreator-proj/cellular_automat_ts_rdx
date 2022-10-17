import Field from '../../models/Field';
import { Dimension } from '../../types/enums';
import { ACTIONS } from '../actions/actions';

interface FieldState {
  field: Field
}

const initialBoard: FieldState = {
  field: new Field(60, Dimension.ONE)
} 

export function cellarFieldReducer(state = initialBoard, action: any) {
  switch(action.type) {
    case ACTIONS.CHOICE_POINT: {
      const {x, y} = action.payload;
      state.field.markCell(x, y);
      return state;
    }
    default: {
      return state;
    }
  }
}