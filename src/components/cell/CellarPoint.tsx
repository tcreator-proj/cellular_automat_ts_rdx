import React from 'react';
import {MouseEventHandler } from 'react';
import Coord from '../../models/Coord';
import style from './cellar-point.module.css';

type CellData = {
  x: number,
  y: number,
  marked: boolean,
  onClickHandler: Function,
  size: number
}

function CellarPoint(props: CellData) {
  const {x, y, marked, onClickHandler, size} = props;
  const clickHandler: MouseEventHandler = e => {
    const target: HTMLElement = e.target as HTMLElement;
    const {x, y} = target.dataset;
    const coord: Coord = new Coord(Number(x), Number(y));
    onClickHandler(coord);
  } 

  return (
    <div className={marked ? style[`cell_${size}_mark`] : style[`cell_${size}`] }
      data-x={x} data-y={y} onClick={clickHandler}></div>
  )
}

export default React.memo(CellarPoint);