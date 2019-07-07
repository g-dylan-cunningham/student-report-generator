import React from 'react';
import { connect } from 'react-redux';
import { update } from '../actions';
import DocumentSelector from './DocumentSelector'
import DocumentConfigurer from './DocumentConfigurer';

const styles = {
    modal: {
        width: "80%",
        height: "80%",
        top: "10%",
        right: "10%",
        position: "absolute",
        margin: "auto",
        backgroundColor: "white"
    },
    modalHeader: {
        textAlign: "center",
        fontSize: "35px",
        fontVariant: "small-caps",
        fontFamily: "roboto"
    },
    greyLayer: {
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        opacity: "0.7",
        top: "0",
        zIndex: "-1"
    }
}

class DocumentFull extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            configureField: {
                open:false
            }
        };
        this.fieldClick = this.fieldClick.bind(this);
        this.updateField = this.updateField.bind(this);
        this.headingClick = this.headingClick.bind(this);
    }

    headingClick(field) {
        console.log(field);
        this.setState({
            configureField: {
                open: true,
                field: field,
                range: 3
            }
        })
    }

    fieldClick(column, row) {
        if(this.state.selected === [row, column]) {
            this.setState({
                selected: null
            })
        } else {
            this.setState({
                selected: [row, column]
            })
        }
    }

    updateField(column, row, value, event) {
        event.preventDefault();
        // this.props.update(row, column)
    }

    render() {
        let { data } = this.props;
        let { selected, configureField } = this.state;
        // console.log(selected)
        let headings = [];
        if(data.length) {
            headings = Object.keys(data[0])
        }
        return (
            <React.Fragment>
                <table>
                    <thead>
                    <tr>
                    {
                        headings.length 
                        ? headings.map(heading => 
                            <th 
                                key={heading}
                                onClick={() => this.headingClick(heading)}
                            >{heading}</th>)
                        : <th></th>
                    }
                    </tr>
                    </thead>
                    <tbody>
                {
                    data && data.length 
                        ? data.map((row, j) =>
                            <tr key={j}>
                                {
                                    headings.length
                                    ? headings.map((field, i) =>
                                        <td onClick={() => this.fieldClick(j, i) } key={i}>
                                            {(selected && selected.length && selected[0] === i && selected[1] === j) 
                                            ? <DocumentSelector numFields={3} row={j} field={field} value={row[field]} close={() => this.fieldClick(i,j)}/>
                                            : row[field]}
                                        
                                        </td>
                                    )
                                    : ""
                                }
                            </tr>
                        )
                        : <tr><td>please upload a file</td></tr>

                }
                </tbody>
                </table>
                <DocumentConfigurer open={configureField.open} field={configureField.field}/>
                    
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.data
})

// const mapDispatchToProps = dispatch => ({
//     update: (row, column) => dispatch(update(row, column))
// })

export default connect(mapStateToProps, null)(DocumentFull);