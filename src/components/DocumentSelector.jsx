import React from 'react';
import { connect } from 'react-redux';
import { update } from '../actions';

class DocumentSelect extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {value: '1'};

    componentDidMount() {
        // console.log("mounted", this.props.value)
        let isScore = true;
        let isDisabled = false;
        if(isNaN(this.props.value)) {
            isScore = false;
        }
        // console.log("filed", this.props.field)
        if(this.props.field === "id") {
            isDisabled = true;
        }
        this.setState({
            value: this.props.value,
            isScore: isScore,
            isDisabled: isDisabled 
        })
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event, value) {
        let {field, row} = this.props;
        this.props.close();
        // debugger
    //   alert('Your favorite flavor is: ' + this.state.value);
      event.preventDefault();
      this.props.update(field, row, value)
    }
  
    render() {
        let {field, row} = this.props;
        let {value, isScore, isDisabled} = this.state;
        // console.log("value", value, isScore, isDisabled)
      return (
        <form onSubmit={(event) => this.handleSubmit(event, this.state.value)}>
            {
                isScore && !isDisabled
                ? <select value={this.state.value} onChange={this.handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                : !isScore && !isDisabled
                ? <input value={this.state.value} onChange={this.handleChange} />
                : <div>{this.state.value}</div>
            }
            
          {
            !isDisabled 
            ? <input type="submit" value="Submit" />
            : <div></div>
          }
        </form>
      );
    }
  }

  const mapDispatchToProps = dispatch => ({
    update: (field, row, value) => dispatch(update(field, row, value))
})

export default connect(null, mapDispatchToProps)(DocumentSelect);