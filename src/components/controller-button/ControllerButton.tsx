import React, { MouseEventHandler } from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { ACTIONS } from '../../redux/actions/actions'

export const ControllerButton = (props: any) => {
  const { play, onPlayPause, onStep, onClear } = props;
  const onPlay: MouseEventHandler = () => onPlayPause()
  const onPause: MouseEventHandler = () => onPlayPause()
  const onStepUp: MouseEventHandler = () => onStep()

  const onCLearControllers: MouseEventHandler = () => onClear()


  return (
    <ButtonGroup className="my-3 w-50" aria-label="Basic example">
      {!play
        ? <Button variant="success" onClick={onPlay}>Play</Button>
        : <Button variant="info" onClick={onPause}>Pause</Button>
      }
      <Button variant="secondary" onClick={onStepUp}>Step</Button>
      <Button variant="warning" onClick={onCLearControllers} >Clear</Button>
    </ButtonGroup>
  )
}

const mapStateToProps = (state: any) => ({
  play: state.controllers.played
})

const mapDispatchToProps = (dispatch: Function) => ({
  onPlayPause: () => dispatch({ type: ACTIONS.PLAY }),
  onStep: () => dispatch({ type: ACTIONS.STEP_UP }),
  onClear: () => dispatch({ type: ACTIONS.CLEAR })
})

export default connect(mapStateToProps, mapDispatchToProps)(ControllerButton)