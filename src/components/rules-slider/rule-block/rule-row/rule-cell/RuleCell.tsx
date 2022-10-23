import style from './rule-cell.module.css';

type CellData = {
  marked: boolean,
}

function RuleCell(props: CellData) {
  const {marked} = props;
 
  return (
    <div className={marked ? style[`cell_mark`] : style[`cell`]}></div>
  )
}

export default RuleCell;