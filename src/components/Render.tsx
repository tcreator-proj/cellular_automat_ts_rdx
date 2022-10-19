import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux'
import { ACTIONS } from '../redux/actions/actions';

export const Render = (props: any) => {
  const { played } = props.controllers;

  const dispatch = useDispatch();

  useEffect(() => {
    let i: any;
    if (played) {
      i = setTimeout(() => {
        dispatch({ type: ACTIONS.STEP_UP });
        dispatch({ type: ACTIONS.RENDER });
      }, 0)
    }

    return () => {
      clearTimeout(i)
    }
  })

  return (
    <></>
  )
}

const mapStateToProps = (state: any) => ({
  field: state.field.field,
  controllers: state.controllers
})

export default connect(mapStateToProps)(Render)