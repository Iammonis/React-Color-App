import React from 'react'
import styled from 'styled-components'

const FooterCont = styled.footer`
    width:100%;
    height: 4%;
    display:flex;
    justify-content:flex-end;
    align-items: center;
    
    & p{
        margin:0 10px;
        font-weight:bold
    }
`

export const Footer = props => {
    return (
        <FooterCont>
            <p>{props.emoji}</p>
            <p>{props.name}</p>
        </FooterCont>
    )
}
