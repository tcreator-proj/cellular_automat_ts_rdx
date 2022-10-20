import { AnyAction } from "redux";
import Coord from "../models/Coord";
import { ACTIONS } from "./actions/actions";

function clickCell(coord: Coord): AnyAction {
  return {type: ACTIONS.CHOICE_POINT, payload: {coord}};
}

function setIntrevalDispatcher(id: number): AnyAction {
  return {type: ACTIONS.SET_INTERVAL_ID, payload: {id}};
}

function stepAndRenderDispatcher(): AnyAction {
  return {type: ACTIONS.STEP_AND_RENDER};
}

export {clickCell, setIntrevalDispatcher, stepAndRenderDispatcher};