import React from 'react';

export default class TableHeader extends React.Component {

  render() {
    return (
      <React.Fragment>
        {
          this.props.row.map(header => {
            return (
              <div className='header col' 
                key={header.id}>
                {header.label}
              </div>
            )
          })
        }
        <div className='header col'></div>
      </React.Fragment>
    )
  }
}