import { MouseEventHandler } from 'react';
import { Row } from '../../../models/Row';
import CellarRow from '../../cellar-row/CellarRow';
import styles from './rule-block.module.css';
import RuleRow from './rule-row/RuleRow';

type Preview = {
  field: Row[],
  rule: number,
  onClickHandler: MouseEventHandler,
  currentRule: number
}

function RuleBlock(props: Preview) {
  const { field, rule, onClickHandler, currentRule } = props;
  return (
    <div className={styles['rule-block']} data-active={rule === currentRule}>
      <div data-rule={rule} onClick={onClickHandler}>
        {
          field.map((row: Row) => <RuleRow cells={row.cells} key={row.id} />)
        }
      </div>
      <div className="rules-num">
        {rule}
      </div>
    </div>
  )
}

export default RuleBlock;