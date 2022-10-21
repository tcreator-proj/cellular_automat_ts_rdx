import FieldSet from '../../models/FieldSet';

type RulesSliderState = {
  rulesMap: FieldSet
}

const row: number = 11;
const col: number = 11;

const initialBoard: RulesSliderState = {
  rulesMap: new FieldSet(row, col)
}

export function previewRulesReducer(state: RulesSliderState = initialBoard) {
  return state;
}