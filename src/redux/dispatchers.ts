import Coord from "../models/Coord";
import { ACTIONS } from "./actions/actions";

function clickCell(coord: Coord): any {
  return {type: ACTIONS.CHOICE_POINT, payload: {coord}};
}

export {clickCell};