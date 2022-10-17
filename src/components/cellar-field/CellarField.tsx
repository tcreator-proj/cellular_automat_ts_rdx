import React from 'react'
import { connect } from 'react-redux'

export const CellarField = () => {
  return (
    <div>CellarField</div>
  )
}

const mapStateToProps = (state: any) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(CellarField)