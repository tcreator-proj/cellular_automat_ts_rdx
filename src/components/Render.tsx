import { useEffect } from 'react';
import { connect } from 'react-redux'
import { Dispatch } from 'redux';
import { setIntrevalDispatcher, stepAndRenderDispatcher } from '../redux/dispatchers';

export const Render = (props: any) => {
  const { played, stepAndRender, intervalID, setIntervalId } = props;

  useEffect(() => {
    if (played) {
      let currentInterval: any = setInterval(() => {
        if (currentInterval == intervalID) {
          clearInterval(currentInterval);
        }
        stepAndRender();
      }, 0)
      setIntervalId(currentInterval);
    }

    if (!played) {
      clearInterval(intervalID);
    }


    return () => {
      if (!played && intervalID) {
        clearInterval(intervalID);
      }
    }
  }, [played])

  return (
    <></>
  )
}

const mapStateToProps = (state: any) => ({
  played: state.field.played,
  intervalID: state.field.intervalId
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  stepAndRender: () => dispatch(stepAndRenderDispatcher()),
  setIntervalId: (id: number) => dispatch(setIntrevalDispatcher(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Render)