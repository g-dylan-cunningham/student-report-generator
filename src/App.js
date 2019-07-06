import React from 'react';
import CsvUploader from './components/CsvUploader';
import DocumentFull from './components/DocumentFull'
import { connect } from 'react-redux';


function App() {
  return (
    <div className="App">
      <CsvUploader />
      <DocumentFull />
    </div>
  );
}

export default connect()(App);
