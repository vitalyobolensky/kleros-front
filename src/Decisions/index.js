import React from 'react'
import _ from 'lodash'
import DisputesTable from '../DisputesTable'
import './Decisions.css'

const filterFunction = disputes => {
  return _.filter(disputes, dispute => {
    if ((dispute.disputeData.isJuror && dispute.disputeData.hasRuled) || !dispute.disputeData.isJuror) {
      return dispute
    }
  })
}

const Decisions = props => {
  const itemsTitle = [
    'Project',
    'Deadline',
    'Case ID',
    'Status',
    'Evidence'
  ]

  return (
    <div className='Decisions-container'>
      <div className='content'>
        <h1>Open Cases</h1>
        <DisputesTable itemTitles={itemsTitle} baseLink={'decisions'} filterFunction={filterFunction} />
      </div>
    </div>
  )
}

export default Decisions
