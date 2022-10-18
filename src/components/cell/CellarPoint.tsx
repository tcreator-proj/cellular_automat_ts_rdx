import style from './cellar-point.module.css';

type CellData = {
  x: number,
  y: number,
  marked: boolean
}

function CellarPoint(props: CellData) {
  const {x, y, marked} = props;

  return (
    <div className={marked ? style.cell_5_mark : style.cell_5}></div>
  )
}

export default CellarPoint;