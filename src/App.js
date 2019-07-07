import React from 'react';
import CsvUploader from './components/CsvUploader';
import DocumentFull from './components/DocumentFull'
// import TableFull from './components/TableFull'
import { connect } from 'react-redux';
// import { Tab } from '@material-ui/core';


function App() {
  return (
    <div className="App">
      <CsvUploader />
      <DocumentFull />
      {/* <TableFull /> */}
    </div>
  );
}

export default connect()(App);
