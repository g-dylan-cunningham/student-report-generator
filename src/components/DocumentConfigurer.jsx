import React from 'react';
import { connect } from 'react-redux';

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

class DocumentConfigurer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 3,
            textValue: "",
            rows: []
        }
    }

    componentDidUpdate(prevProps) {
        let { verbiage, field } = this.props;
        if(prevProps.field !== field) {
            
            let rows = [];
            let map = verbiage[field];
            
            for(let i = 1; i <= this.state.quantity; i++) {
                if(map && map[i]) {
                    rows.push({
                        score: i,
                        text: map[i]
                    })
                }
                
            }
            this.setState({
                rows: rows
            })
        }
    }

    updateField(e, field, number) {
        e.preventDefault();
        let { verbiage } = this.props
        let newVerbiage = {...verbiage};
        newVerbiage[field][number] = this.state.rows[number-1].text;
        console.log("newVer", newVerbiage)

        this.setState({editMode: null})
    }

    onChangeHandler(e,i,text) {
        let rows = this.state.rows;
        rows[i]["text"] = e.target.value;
        this.setState({rows: rows})
    }

    render() {
       let { open, field, closeLayer, verbiage } = this.props;
       let { quantity, editMode, textValue, rows } = this.state;

        if(!open) {
            return <React.Fragment></React.Fragment>
        } else {
            return (
                <React.Fragment>
                <div style={styles.modal}>
                    <div style={styles.modalHeader}>
                        {field}
                    </div>
                    <ul> 
                        {
                           rows.map(row =>
                            <li key={row.score}>
                            <span>
                            {row.score + ":   "}
                            </span>

                            {
                            editMode === row.score 
                            ? <span>
                                <textarea defaultValue={row.text} onChange={(e,i,text)=>this.onChangeHandler(e,(row.score -1 ),(e.target.value))}/>
                                <button onClick={e => this.updateField(e, field, row.score)} >update</button>
                            </span>
                            
                            : <span onClick={() => this.setState({editMode: row.score})}>
                                {row.text}
                            </span>
                            }

                            
                            </li>) 
                        }
                    </ul>
                </div> 
                <div style={styles.greyLayer} onClick={closeLayer}></div>
            </React.Fragment>
            )
        }
            

    }

}

const mapStateToProps = state => ({
    verbiage: state.verbiage.verbiage
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(DocumentConfigurer);