import React from 'react';
import { connect } from 'react-redux';
import { update } from '../actions';
import DocumentSelector from './DocumentSelector'
import DocumentConfigurer from './DocumentConfigurer';

const styles = {
    heading: {
        cursor: "pointer",
        "&:hover" : {
            color: "blue"
        }
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
        this.headingClick = this.headingClick.bind(this);
        this.closeLayer = this.closeLayer.bind(this);
        // this.download = this.download.bind(this);
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
        this.download("asfs.txt", "asdfasfasdfasdfasdfasd")
    }

    closeLayer() {
        let configField = this.state.configureField;
        configField["open"] = false;
        this.setState({configureField: configField});
    }

    // download(filename, text) {
    //     var element = document.createElement('a');
    //     element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    //     element.setAttribute('download', filename);
      
    //     element.style.display = 'none';
    //     document.body.appendChild(element);
      
    //     element.click();
      
    //     document.body.removeChild(element);
    //   }
      
    render() {
        let { data } = this.props;
        let { selected, configureField } = this.state;
        let headings = [];
        // debugger
        if(data && data.length) {
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
                            <th style={styles.heading}
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
                <DocumentConfigurer closeLayer={this.closeLayer} open={configureField.open} field={configureField.field}/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.data.fileUploaded
})

export default connect(mapStateToProps, null)(DocumentFull);