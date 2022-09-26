import React,{useState} from 'react';
const FunctionalComp = ()=>{
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
        backgroundColor : 'aqua',
        border: '2px solid black',
        position: 'absolute',
        bottom: '100px',
        left : '100px',
        paddingTop: '20px',
        borderRadius: '20px',
        fontWeight: 'bold'
    }

    const ts ={
        
        fontSize : '25px'
    }
    const [displayCard , setDisplayCard] = React.useState(false)
    const hideCard = () => setDisplayCard(!displayCard)
    return (
        <div>
        <div style={div_style} onClick={hideCard}>
            To see styling in functional componenet
        </div>
        {
            displayCard && (
                <div className="fc_card" style={CardStyle}>
                <span id="t1" style={ts}>This is created using functional component</span><br/><br/>
                <span class="t2">This is done using external CSS</span><br/>
                <span id="t3" style={{color:'blue'}}>This is done using inline CSS</span>
                </div>)
        }
        </div>
    )
}
export default FunctionalComp