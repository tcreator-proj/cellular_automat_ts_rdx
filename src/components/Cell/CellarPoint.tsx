import React, { useCallback } from 'react';
import {MouseEventHandler } from 'react';
import Coord from '../../models/Coord';
import style from './CellarPoint.module.css';

type CellData = {
  x: number,
  y: number,
  marked: boolean,
  onClickHandler: Function
}

function CellarPoint(props: CellData) {
  const {x, y, marked, onClickHandler} = props;
  
  const clickHandler: MouseEventHandler = useCallback(e => {
    const target: HTMLElement = e.target as HTMLElement;
    const {x, y} = target.dataset;
    const coord: Coord = new Coord(Number(x), Number(y));
    onClickHandler(coord);
  }, [onClickHandler])

  return (
    <div className={marked ? style[`cell_mark`] : style[`cell`] }
      data-x={x} data-y={y} onClick={clickHandler}></div>
  )
}

export default React.memo(CellarPoint);