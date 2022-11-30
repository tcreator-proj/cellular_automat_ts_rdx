import React from 'react'
import { Row} from 'react-bootstrap'
import { connect } from 'react-redux'

type RuleProps = {
  rule: number
}

const Header = (props: RuleProps) => {
  const {rule} = props;
  return (
    <Row>
      <h1 className='text-center text-uppercase'>cellular automata 1D <span className="text-lowercase">[rule - </span>{rule}]</h1>
    </Row>
  )
}

const mapStateToProps = (store: any) => ({
  rule: store.field.rule
})

export default connect(mapStateToProps)(React.memo(Header));