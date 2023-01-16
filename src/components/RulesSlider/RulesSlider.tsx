import {MouseEventHandler, useCallback, useState, WheelEventHandler} from 'react';
import { Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import Field from '../../models/Field';
import FieldSet from '../../models/FieldSet';
import { changeRuleDispatcher } from '../../redux/dispatchers';
import RuleBlock from './RuleBlock/RuleBlock';
import {lazyLoadinSliderItem} from './RuleSlider.utills';
import styles from './RulesSlider.module.css';
import { PreviewState } from './RulesSlider.types';

const previewList: FieldSet = new FieldSet(16, 31);

const RulesSlider = (props: any) => {
  const { currentRule, onClickChangeRule } = props;

  const [previewState, setPreviewState] = useState<PreviewState>({
    previewList,
    start: 0,
    showItem: 16
  })

  const clickAndMove: WheelEventHandler = useCallback((event: any) => {
    const target: HTMLElement = event.target as HTMLElement;
    const parentBlockSlider = target.closest('div[data-marker]');
    const { deltaY } = event;
    if (parentBlockSlider) {
      parentBlockSlider.scrollLeft = parentBlockSlider.scrollLeft + deltaY;
      console.log(parentBlockSlider)
      lazyLoadinSliderItem(event, setPreviewState);
    }
  }, []);

  const onScrollHandler = useCallback((event: any) => {
    lazyLoadinSliderItem(event, setPreviewState);
  }, []);

  const onClickHandler: MouseEventHandler = useCallback((evt: any) => {
    const target = evt.target;
    const parent = target.closest('div[data-rule]');
    const parentBlock = target.closest('div[data-active]');
    const parentBlockSlider = target.closest('div[data-marker]');

    const activeBlock: HTMLElement = parentBlockSlider.querySelector('div[data-active="true"]');

    if(activeBlock) {
      activeBlock.dataset.active = "false";
    }

    parentBlock.dataset.active = true;
    onClickChangeRule(Number(parent.dataset.rule));
  }, [onClickChangeRule]);

  return (
    <Row className={styles['slider-body']} data-marker={"slider"} onWheel={clickAndMove} onScroll={onScrollHandler}>
      {
        previewState.previewList.fields
          .slice(previewState.start, previewState.start + previewState.showItem)
          .map((f: Field, i: number) => {
            return <RuleBlock
              field={f.field}
              key={f.id}
              rule={previewState.start + i}
              currentRule={currentRule}
              onClickHandler={onClickHandler} />
          })
      }
    </Row>
  )
}

const mapStateToProps = (state: any) => {
  return {
    currentRule: state.field.rule
  }
}

const mapDispatchersToProps = (dispanch: Function) => ({
  onClickChangeRule: (rule: number) => dispanch(changeRuleDispatcher(rule))
})

export default connect(mapStateToProps, mapDispatchersToProps)(RulesSlider)
