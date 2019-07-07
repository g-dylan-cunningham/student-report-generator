import React from 'react';

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
            textValue: ""
        }
    }

    updateField(e, text, field, number) {
        e.preventDefault();
        console.log(text, field, number)
    }

    render() {
       let { open, field } = this.props;
       let { quantity, editMode, textValue } = this.state;
        let rows = [];
        for(let i = 1; i <= quantity; i++) {
            rows.push({
                score: i,
                text: "asfasdsd"
            })
        }

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
                            {row.score}  
                            </span>

                            {
                            editMode === row.score 
                            ? <span>
                                <textarea defaultValue={row.text} onChange={e=>this.setState({textValue: e.target.value})}/>
                                <button onClick={e => this.updateField(e, textValue, field, row.score)} >update</button>
                            </span>
                            
                            : <span onClick={() => this.setState({editMode: row.score})}>
                                {row.text}
                            </span>
                            }

                            
                            </li>) 
                        }
                    </ul>
                </div> 
                <div style={styles.greyLayer}></div>
            </React.Fragment>
            )
        }
            

    }

}


export default DocumentConfigurer;