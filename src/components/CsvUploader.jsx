import React from 'react';
import { toJson } from '../utils/csvConverts';
import { uploadFile, generateVerbiageFromDefault } from '../actions';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';



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
          console.log("json data", data)
          // console.log('props', this.props, this)
          self.props.dispatchUploadFile(data);
      })

    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          {/* <label>
            Upload file:
            <input type="file" ref={this.fileInput} />
          </label> */}

                <input
                  // accept="*"
                  // className={classes.input}
                  id="raised-button-file"
                  multiple
                  type="file"
                  ref={this.fileInput}
                />
                <label htmlFor="raised-button-file">
                  <Button raised="true"  
                  // className={classes.button}
                  type="submit"
                  >
                    Upload
                  </Button>
                </label>
          <br />
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
        dispatch(uploadFile(file));
        dispatch(generateVerbiageFromDefault(file));
      }
    }
  }


export default connect(
  null,
  mapDispatchToProps
)(CsvUploader)


  