import { ACTIONS } from '../actions/actions';

type Controls = {
  played: boolean,
  step: number
}

const initialBoard: Controls = {
  played: false,
  step: 0
}

export function controllerReducer(state = initialBoard, action: any) {
  switch(action.type) {
    case ACTIONS.PLAY: {
      state.played = !state.played
      return {...state};
    }
    case ACTIONS.STEP_UP: {
      state.played = false;
      state.step++;
      return {...state};
    }
    case ACTIONS.CLEAR: {
      state.played = false;
      state.step = 0;
      return {...state}
    }
    default: return state;

  }
}