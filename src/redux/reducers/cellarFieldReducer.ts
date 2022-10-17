import Field from '../../models/Field';
import { ACTIONS } from '../actions/actions';

interface FieldState {
  field: Field
}

const initialBoard: FieldState = {
  field: Field.build()
} 

export function cellarFieldReducer(state = initialBoard, action: any) {
  switch(action.type) {
    case ACTIONS.CHOICE_POINT: {
      return state;
    }
    default: {
      return state;
    }
  }
}