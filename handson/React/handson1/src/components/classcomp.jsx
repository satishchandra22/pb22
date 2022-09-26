import React from 'react';
class ClassComp extends React.Component{
    constructor (){
        super();
        this.state = {displayCard:false}
    }
    hideCard = ()=>{
        this.setState({displayCard: !this.state.displayCard})
    }
    render(){
        const div_style={
            paddingTop: '35px',
            height:'70px',
            width: '400px',
            backgroundColor: "aqua",
            fontSize: '20px',
            borderRadius: '70px',
            border : '2px solid black'
        }
        const CardStyle = {
            height: '200px',
            width : '400px',
            backgroundColor : 'magenta',
            border: '2px solid black',
            position: 'absolute',
            bottom: '100px',
            right : '100px',
            paddingTop: '20px',
            borderRadius: '20px',
            fontWeight: 'bold'
        }
    
        const ts ={
            
            fontSize : '25px'
        }
        return (
            <div>
            <div style={div_style} onClick={this.hideCard}>To see styling in class component</div>
            {
            this.state.displayCard && (
                <div className="fc_card" style={CardStyle}>
                <span id="t1" style={ts}>This is created using Class component</span><br/><br/>
                <span class="t2">This is done using external CSS</span><br/>
                <span id="t3" style={{color:'blue'}}>This is done using inline CSS</span>
                </div>)
        }
            </div>
        )
    }
}
export default ClassComp;