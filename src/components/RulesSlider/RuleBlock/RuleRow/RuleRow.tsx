import style from './RuleRow.module.css';
import RuleCell from './RuleCell/RuleCell';
import { Cell } from '../../../../models/Cell';

type CellsMap = {
  cells: Cell[]
}

function RuleRow(props: CellsMap) {
  const { cells } = props;
  return (
    <div className={style.row} >
      {
        cells.map((cell: Cell) => <RuleCell marked={cell.point} key={cell.id}/>)
      }
    </div>
  )
}

export default RuleRow;