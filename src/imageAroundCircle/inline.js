import React, { Component } from 'react';
const data = [
    {id:1,name:'maroof',color:'#1A8DFF',connected:true},
    {id:2,name:'rumman',color:'#1BBC9C',connected:true},
    {id:3,name:'munner',color:'#6C63FF',connected:true},
    {id:4,name:'shamoon',color:'#FAAD14',connected:true},
    {id:5,name:'shoeb',color:'#FF3B30',connected:false }
]
class InlineCircle extends Component {

    state= {
        data : data
    }

    render(){
        const totalCount = this.state.data.length;
        const totalAngle = 360 / totalCount;

        return(
            <>
                {this.state.data.map((x,i)=> {
                    return(
                    <div className="avatar_box" key={i} style={{
                        borderColor:x.color,
                        color:x.color,
                        transform: !this.props.inline && `rotate(${ (totalAngle * (i+1)) }deg) translate(15em) rotate(-${ (totalAngle * (i+1))}deg)`,
                        filter: `grayscale(${!x.connected && 100 }%)`,
                    }}>
                        <img src="https://www.bigstockphoto.com/images/homepage/module-6.jpg" alt={x.name}/>
                        <span style={{        
                            background: this.props.inline ? 'none' : x.color,
                            color: this.props.inline ? x.color : '#fff'
                        }}>
                            {x.name}
                        </span>
                    </div>
                    )
                })}
                {/* {!this.props.inline && <li style={{border:'1px #000 solid'}}>Timer</li>} */}
            </>
        )
    }
}
export default InlineCircle;
