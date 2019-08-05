import React from 'react';
import './App.css';
import Table from './components/Table';
import DataTable from './store/DataStore';

const DATA_TABLE = new DataTable();
const store = DATA_TABLE.getData();

function App() {
  return (
    <div className="App">
      <Table data={store}/>
    </div>
  );
}

export default App;
