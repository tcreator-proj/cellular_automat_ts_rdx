import React from 'react';
import { Row } from 'react-bootstrap';
import { connect } from 'react-redux'
import Coord from '../../models/Coord';
import {Row as RowLine} from '../../models/Row';
import { clickCell } from '../../redux/dispatchers';
import CellarRow from '../cellar-row/CellarRow';
import style from './cellar-field.module.css';

export const CellarField = (props: any) => {
  const {field, onClickCellHandler} = props;

  return (
    <Row className={style.field_600}>
      {
        field.field.map((el: RowLine) => <CellarRow cells={el.cells} 
        onClickCellHandler={onClickCellHandler} 
        size={10} 
        key={el.id}/>)
      }
    </Row>
  )
}

const mapStateToProps = (state: any) => ({
  field: state.field
})

const mapDispatchToProps = (dispatch: Function) => ({
  onClickCellHandler: (coord: Coord) => dispatch(clickCell(coord))
})

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(CellarField));