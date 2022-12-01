import { Row } from "../models/Row"

interface FieldState {
  field: Row[],
  played: boolean,
  intervalId: number,
  rule: number
}

export type {FieldState}