import React from 'react';
import { connect } from 'react-redux';
import { generateReport, generateVerbiageFromDefault} from '../actions';
import { convertToCsv } from '../utils/csvConverts';
import DocumentSelector from './DocumentSelector'
import DocumentConfigurer from './DocumentConfigurer';
import ReportFull from './ReportFull'

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
            },
            showReport: false
        };
        this.fieldClick = this.fieldClick.bind(this);
        this.headingClick = this.headingClick.bind(this);
        this.closeLayer = this.closeLayer.bind(this);
        this.generateReportMethod = this.generateReportMethod.bind(this);
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
        // this.download("asfs.txt", "asdfasfasdfasdfasdfasd")
    }

    closeLayer() {
        let configField = this.state.configureField;
        configField["open"] = false;
        this.setState({configureField: configField});
    }

    generateReportMethod(fields) {
        let self = this;
        // debugger
        let { fileUploaded, verbiage, generateReport, generateVerbiage } = self.props;


        generateVerbiage(fileUploaded)
        console.log("fileUploaded, Vebiage",fileUploaded, verbiage)
        // debugger
        // console.log("fileUploaded1", fileUploaded)
        // var test = fileUploaded.map(elem => {
        //     console.log("elem", elem)
        //     return elem
        // })

        // console.log("test", test)
        setTimeout(()=> {
            let report = fileUploaded.map(row => {
                // console.log('inside1', fields)
                fields.map(((field, i) => {
                    var fieldVerbiage = self.props.verbiage[field];
                    var score = [row[field]];
                    // console.log("inside2",  this.props.verbiage)
                    // debugger
                    if(fieldVerbiage && fieldVerbiage[score]) {
                        // console.log("inside", fieldVerbiage[score])
                        row[field] = fieldVerbiage[score];
                    }
                    
                }))
                // console.log("fileUploaded2",fileUploaded)
                return row;
            
            })
    
            self.setState({
                showReport: true
            })
            // convertToCsv(report)
            generateReport(report)
            console.log("report", report)
        },1000)
        
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
        let { fileUploaded } = this.props;
        let { selected, configureField, showReport } = this.state;
        let headings = [];
        // debugger
        if(fileUploaded && fileUploaded.length) {
            headings = Object.keys(fileUploaded[0])
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
                    
                    fileUploaded && fileUploaded.length 
                        ? fileUploaded.map((row, j) => {
                            console.log("fileupdloaded is it working", fileUploaded)
                            return (
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
                            
                        })
                        : <tr><td>please upload a file</td></tr>

                }
                </tbody>
                </table>
                <DocumentConfigurer closeLayer={this.closeLayer} open={configureField.open} field={configureField.field}/>
                
                <button onClick={() => this.generateReportMethod(headings)}>Generate Report</button>
                {
                    this.props.report && this.props.report.length
                    ? <ReportFull report={this.props.report} styles={styles}/>
                    : <React.Fragment></React.Fragment>
                }
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    fileUploaded: state.data.fileUploaded,
    verbiage: state.verbiage.verbiage,
    report: state.report.report
})

const mapDispatchToProps = dispatch => ({
    generateReport: report => dispatch(generateReport(report)),
    generateVerbiage: file => dispatch(generateVerbiageFromDefault(file))
})

export default connect(mapStateToProps, mapDispatchToProps)(DocumentFull);