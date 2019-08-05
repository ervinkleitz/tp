import React from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import './Table.css';
import '../index.css';

export default class Table extends React.Component {

  render() {

    const Patients = this.props.data.patients;
    const Headers = this.props.data.headers;

    return (
      <React.Fragment>
        <div className='table'>
          <div className='table-title'>RECENT ORDERS <span>&#x25BE;</span></div>
          <div className='row headers'>
            <TableHeader row={Headers}/>
          </div>
          {Patients && 
            Patients.map(patient => {
              return <div key={patient.id} className='row'><TableRow row={patient} order={Headers} /></div>
            })
          }
        </div>
        
        <div className='center'>
          <div className='show-more'>
            SHOW MORE
          </div>
        </div>
        
      </React.Fragment>
    )
  }
}