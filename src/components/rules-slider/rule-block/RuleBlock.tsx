import { Row } from '../../../models/Row';
import CellarRow from '../../cellar-row/CellarRow';
import styles from './rule-block.module.css';

type Preview = {
  field: Row[]
}

function RuleBlock(props: Preview) {
  const { field } = props;
  return (
    <div className={styles['rule-block']}>
      {
        field.map((row: Row) => <CellarRow size={5} cells={row.cells} key={row.id} onClickCellHandler={() => {}} />)
      }
    </div>

  )
}

export default RuleBlock;