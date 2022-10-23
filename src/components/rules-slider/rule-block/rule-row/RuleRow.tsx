import style from './rule-row.module.css';
import RuleCell from './rule-cell/RuleCell';
import { Cell } from '../../../../models/Cell';

type CellsMap = {
  cells: Cell[]
}

function RuleRow(props: CellsMap) {
  const { cells} = props;
  return (
    <div className={style.row} >
      {
        cells.map((cell: Cell) => <RuleCell marked={cell.point} key={cell.id}/>)
      }
    </div>
  )
}

export default RuleRow;