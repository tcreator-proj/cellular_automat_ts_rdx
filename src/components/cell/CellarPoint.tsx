import { MouseEventHandler } from 'react';
import { useSelector } from 'react-redux';
import Coord from '../../models/Coord';
import style from './cellar-point.module.css';

type CellData = {
  x: number,
  y: number,
  marked: boolean,
  onClickHandler: Function
}

function CellarPoint(props: CellData) {
  const {x, y, marked, onClickHandler} = props;

  const clickHandler: MouseEventHandler = e => {
    const target: HTMLElement = e.target as HTMLElement;
    const {x, y} = target.dataset;
    const coord: Coord = new Coord(Number(x), Number(y));
    onClickHandler(coord);
  } 

  return (
    <div className={marked ? style.cell_5_mark : style.cell_5} data-x={x} data-y={y} onClick={clickHandler}></div>
  )
}

export default CellarPoint;