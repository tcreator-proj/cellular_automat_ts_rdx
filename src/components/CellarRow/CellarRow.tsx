import { Cell } from '../../models/Cell';
import CellarPoint from '../Cell/CellarPoint';
import style from './CellarRow.module.css';

type CellsMap = {
  cells: Cell[],
  onClickCellHandler: Function,
}

function CellarRow(props: CellsMap) {
  const { cells, onClickCellHandler} = props;
  return (
    <div className={style.row} >
      {
        cells.map((cell: Cell) => <CellarPoint
          x={cell.x} y={cell.y} 
          marked={cell.point} 
          onClickHandler={onClickCellHandler} 
          key={cell.id} />)
      }
    </div>
  )
}

export default CellarRow;