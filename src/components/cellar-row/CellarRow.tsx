import React from 'react';
import { Cell } from '../../models/Cell';
import CellarPoint from '../cell/CellarPoint';
import style from './cellar-row.module.css';

type CellsMap = {
  cells: Cell[],
  onClickCellHandler: Function,
  size: number
}

function CellarRow(props: CellsMap) {
  const { cells, onClickCellHandler, size} = props;
  return (
    <div className={style.row} >
      {
        cells.map((cell: Cell) => <CellarPoint
          x={cell.x} y={cell.y} 
          marked={cell.point} 
          onClickHandler={onClickCellHandler} 
          key={cell.id}
          size={size} />)
      }
    </div>
  )
}

export default CellarRow;