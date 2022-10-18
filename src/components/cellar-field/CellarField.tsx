import { Row } from 'react-bootstrap';
import { connect } from 'react-redux'
import Coord from '../../models/Coord';
import {Row as RowLine} from '../../models/Row';
import { clickCell } from '../../redux/dispatchers';
import CellarRow from '../cellar-row/CellarRow';
import style from './cellar-field.module.css';

export const CellarField = (props: any) => {
  const field = props.field;

  return (
    <Row className={style.field}>
      {
        field.field.field.map((el: RowLine) => <CellarRow cells={el.line} key={el.id}/>)
      }
    </Row>
  )
}

const mapStateToProps = (state: any) => ({
  field: state.field
})

const mapDispatchToProps = (dispatch: Function) => ({
  onClick: (coord: Coord) => dispatch(clickCell(coord))
})

export default connect(mapStateToProps, mapDispatchToProps)(CellarField)