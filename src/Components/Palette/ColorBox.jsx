import React, { Component } from 'react'
import styled from 'styled-components'

export class ColorBox extends Component {
    render() {
        const { name, color } = this.props
        const ColorBox = styled.div`
        background-color:${color};
        width: 20%;
        height:25%;
        margin:0 auto;
        display: inline-block;
        position: relative;
        cursor: pointer;
        
        &:hover button{
            opacity:1;  
            transition:0.5s;
        }
        
        & button{
            text-transform:uppercase;
            width:100px;
            height:30px;
            font-size:1rem;
            opacity:0;
            outline:none;
            border:none;
            color:#fff;
            background-color: rgb(255,255,255,0.4);
            line-height:30px;
            cursor:pointer;
            position:absolute;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%)
        }
        & .nameColor{
            display:flex;
            text-transform:uppercase;
            justify-content:space-between;
            letter-spacing: 1px;
        }
        
        & .colorName{
            padding:5px;
        }
        & .seeMore{
            color:#fff;
            padding:5px;
            background-color: rgb(255,255,255,0.4);
        }
        `
        return (
            <ColorBox>
                <button>copy</button>  
                <div className="nameColor">
                    <span className="colorName">{name}</span>
                    <span className="seeMore">MORE</span>
                </div>
            </ColorBox>
        )
    }
}
