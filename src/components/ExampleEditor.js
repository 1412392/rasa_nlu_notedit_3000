// @flow

import React, { Component, PropTypes } from 'react';
import { Button } from 'antd'
import { connect } from 'react-redux'
import * as actions from '../state/actions'
import EntityTable from './EntityTable'

const mapActions = dispatch => ({
  deleteExample: (idExample,example) => {
    dispatch(actions.deleteExample(idExample,example))
  },
   alreadyCorrect: (idExample,example) => {
    dispatch(actions.alreadyCorrect(idExample,example))
  },
   completeEdit: (idExample,example) => {
    dispatch(actions.completeEdit(idExample,example))
  },
})

class ExampleEditor extends Component {
  render() {
    const { example, deleteExample, entityNames,alreadyCorrect,completeEdit } = this.props

    return (
      <div>
        <EntityTable example={example} entityNames={entityNames} />
        <Button type="danger" 
          onClick={() => deleteExample(example.id,example)}
        >
          Delete example
        </Button>
         <Button type="dashed"
         
          onClick={() => alreadyCorrect(example.id,example)}
        >
          Already Correct
        </Button>

         <Button
        type="primary"
          onClick={() => completeEdit(example.id,example)}
        >
          Complete Edit
        </Button>
      </div>
    )
  }
}

ExampleEditor.propTypes = {
  text: PropTypes.string.isRequired,
  intent: PropTypes.string.isRequired,
  entities: PropTypes.arrayOf(PropTypes.shape({
    start: PropTypes.number.isRequired,
    end: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    entity: PropTypes.string.isRequired,
  })),
}

export default connect(null, mapActions)(ExampleEditor)
