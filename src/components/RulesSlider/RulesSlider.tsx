import { MouseEventHandler, useCallback, WheelEventHandler } from 'react';
import { Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import Field from '../../models/Field';
import { changeRuleDispatcher } from '../../redux/dispatchers';
import RuleBlock from './RuleBlock/RuleBlock';
import styles from './RulesSlider.module.css';

export const RulesSlider = (props: any) => {
  const { previewList, onClick, currentRule } = props;

  const clickAndMove: WheelEventHandler = useCallback((event: any) => {
    const target: HTMLElement = event.target as HTMLElement;
    const parentBlockSlider = target.closest('div[data-marker]');
    const {deltaY} = event;
    if(parentBlockSlider) {
      parentBlockSlider.scrollLeft = parentBlockSlider.scrollLeft + deltaY;
    }
  }, []);

  const onClickHandler: MouseEventHandler = useCallback((evt: any) => {
    const target = evt.target;
    const parent = target.closest('div[data-rule]');
    const parentBlock = target.closest('div[data-active]');
    const parentBlockSlider = target.closest('div[data-marker]');

    parentBlockSlider.querySelector('div[data-active="true"]').dataset.active = "false";

    parentBlock.dataset.active = true;
    onClick(Number(parent.dataset.rule));
  }, []);

  return (
    <Row className={styles['slider-body']} data-marker={"slider"} onWheel={clickAndMove}>
      {
        previewList.fields.map((f: Field, i: number) => <RuleBlock
          field={f.field}
          key={f.id}
          rule={i}
          currentRule={currentRule}
          onClickHandler={onClickHandler} />)
      }
    </Row>
  )
}

const mapStateToProps = (state: any) => {
  return {
    previewList: state.preview.rulesMap,
    currentRule: state.field.rule
  }
}

const mapDispatchersToProps = (dispanch: Function) => ({
  onClick: (rule: number) => dispanch(changeRuleDispatcher(rule))
})

export default connect(mapStateToProps, mapDispatchersToProps)(RulesSlider)
