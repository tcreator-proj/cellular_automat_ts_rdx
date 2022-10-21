import React from 'react'
import { Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import Field from '../../models/Field';
import RuleBlock from './rule-block/RuleBlock';
import styles from './rules-slider.module.css';

export const RulesSlider = (props: any) => {
  const { previewList } = props;
  console.log(previewList)

  return (
    <Row className={styles['slider-body']}>
      {
        previewList.fields.map((f: Field) => <RuleBlock field={f.field} key={f.id} />)
      }
    </Row>
  )
}

const mapStateToProps = (state: any) => {
  return {
    previewList: state.preview.rulesMap
  }
}

export default connect(mapStateToProps)(RulesSlider)