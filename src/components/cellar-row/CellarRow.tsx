import { Row } from 'react-bootstrap';
import {Cell} from '../../models/Cell';
import CellarPoint from '../cell/CellarPoint';
import style from './cellar-row.module.css';

type CellsMap = {
  cells: Cell[]
}

function CellarRow(props: CellsMap) {
  const { cells } = props;
  return (
    <div className={style.row} >
      {
        cells.map((cell: Cell) => <CellarPoint x={cell.x} y={cell.y} marked={cell.point} key={cell.id} />)
      }
    </div>
  )
}

export default CellarRow