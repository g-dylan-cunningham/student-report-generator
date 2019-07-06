import React from 'react';
import { toJson } from '../utils/csvConverts';
import { uploadFile } from '../actions';
import { connect } from 'react-redux';



class CsvUploader extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.fileInput = React.createRef();
    }
    
    handleSubmit(event, that) {
      console.log(this);
      let self = this;
      event.preventDefault();
      toJson(this.fileInput.current.files[0]) 
        .then(function(data){
          // console.log('props', this.props, this)
          self.props.dispatchUploadFile(data);
      })

    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Upload file:
            <input type="file" ref={this.fileInput} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      );
    }
  }
  
  // const mapStateToProps = (state) => ({
  //   file: getCartProducts(state),
  //   total: getTotal(state)
  // })

  const mapDispatchToProps = dispatch => {
    return {
      dispatchUploadFile: file => {
        dispatch(uploadFile(file))
      }
    }
  }


export default connect(
  null,
  mapDispatchToProps
)(CsvUploader)


  