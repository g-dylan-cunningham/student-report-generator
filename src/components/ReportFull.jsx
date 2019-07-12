import React from 'react';

const ReportFull =({report, styles}) => {
    

        // let { report } = this.props;
        // let { selected, configureField } = this.state;
        let headings = [];
        // debugger
        if(report && report.length) {
            headings = Object.keys(report[0])
        }
        return (
            <React.Fragment>
                report
                <table>
                    <thead>
                    <tr>
                    {
                        headings.length 
                        ? headings.map(heading => 
                            <th style={styles.heading}
                                key={heading}
                                
                            >{heading}</th>)
                        : <th></th>
                    }
                    </tr>
                    </thead>
                    <tbody>
                {
                    report && report.length 
                        ? report.map((row, j) =>
                            <tr key={j}>
                                {
                                    headings.length
                                    ? headings.map((field, i) =>
                                        <td key={i}>
                                            {row[field]}
                                        
                                        </td>
                                    )
                                    : ""
                                }
                            </tr>
                        )
                        : <tr><td>something is wrong</td></tr>

                }
                </tbody>
                </table>            
            </React.Fragment>
        )
}

export default ReportFull;