import React, { Component } from 'react'
import {ColorBox} from './ColorBox'
import styled from 'styled-components'

export class Palette extends Component {
    render() {
        const colorBoxes = this.props.palette.colors?.map( item => 
                    <ColorBox key={item.name} 
                    color={item.color}
                    name={item.name} 
                    /> )
        
        const Palette = styled.div`
            height:100vh;
        `
        const PaletteColors = styled.div`
            height:90%;
        `
        return (
            <Palette>
                {/* // Navbar */}
                <PaletteColors>{colorBoxes}</PaletteColors>
                {/* footer */}
            </Palette>
        )
    }
}

