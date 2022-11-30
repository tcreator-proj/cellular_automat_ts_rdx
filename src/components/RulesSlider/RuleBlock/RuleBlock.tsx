import { MouseEventHandler } from 'react';
import { Row } from '../../../models/Row';
import styles from './RuleBlock.module.css';
import RuleRow from './RuleRow/RuleRow';

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