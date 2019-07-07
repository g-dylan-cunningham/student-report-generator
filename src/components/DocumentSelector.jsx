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
        this.setState({
            value: this.props.value
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
        let {value} = this.state;
        console.log("value", value)
      return (
        <form onSubmit={(event) => this.handleSubmit(event, this.state.value)}>
          <label>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  const mapDispatchToProps = dispatch => ({
    update: (field, row, value) => dispatch(update(field, row, value))
})

export default connect(null, mapDispatchToProps)(DocumentSelect);