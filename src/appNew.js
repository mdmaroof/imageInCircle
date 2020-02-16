import React, { Component } from 'react';
import InlineCircle from './imageAroundCircle/inline'
import './imageOnCircle.scss';
import classNames from 'classnames';


const data = [
    {id:1,name:'maroof',color:'#1A8DFF',connected:true},
    {id:2,name:'rumman',color:'#1BBC9C',connected:true},
    {id:3,name:'munner',color:'#6C63FF',connected:true},
    {id:4,name:'shamoon',color:'#FAAD14',connected:true},
    {id:5,name:'shoeb',color:'#FF3B30',connected:false }
]

class AppNew extends Component {
    state={
        inlineMode:true,
        animationClass:false,
    }

    animationFunction = () => {
        this.setState({
            animationClass:true
        })
        setTimeout(()=>{
            this.setState({
                animationClass:false,
                inlineMode:!this.state.inlineMode
            })
        },300)
    }
    render(){
        const totalCount = data.length;
        const totalAngle = 360 / totalCount;
        return(
            <>
            <div className={classNames(!this.state.inlineMode ? 'circle-container' : 'inline-boxes',this.state.animationClass && 'animationClass')}><InlineCircle inline={this.state.inlineMode} /></div>   
            <br/>
            <button onClick={()=>this.animationFunction()}>
                Change State
            </button>

            </>
        )
    }

}
export default AppNew;