import React from 'react';
import { connect } from 'react-redux';


class DocumentFull extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let { data } = this.props;
        return (
            <React.Fragment>
                <table>
                {
                    data && data.length 
                        ? data.map((row, i) =>
                            <tr><td key={i}>{row.place}</td><td key={i}>{row.time}</td></tr>
                        )
                        : "please upload a file"

                }
                </table>
            </React.Fragment>
        )
    }
}

const MapStateToProps = (state) => ({
    data: state.data
})

export default connect(MapStateToProps, null)(DocumentFull);