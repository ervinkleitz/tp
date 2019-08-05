import React from 'react';

export default class TableRow extends React.Component {

  render() {
    const Column = this.props.order.map(column => {
      return (
        <React.Fragment>
          {column.id === 'patientName' &&
            <div className='body col circle-container' style={{width: '5%'}}>
              <div className='circle' style={{backgroundColor: this.props.row.color}}></div>
            </div>
          }
          <div key={column.id} 
            className='body col'>
              {this.props.row[column.id]}
          </div>
        </React.Fragment>
        
      )
    });
    
    return (
      <React.Fragment>
        {Column}
        <div className='body col'>
          <div className='details'>DETAILS</div>
        </div>
      </React.Fragment>
    )
  }
}