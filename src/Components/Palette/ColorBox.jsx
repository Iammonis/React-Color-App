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
        `
        return (
            <ColorBox>
                <span>{name}</span>
                <span>MORE</span>  {/* for more shades */}
            </ColorBox>
        )
    }
}
