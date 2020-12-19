import React from 'react'
import Slider from '@material-ui/core/Slider'
import styled from 'styled-components'

const marks = [
    {
      value: 100
    },
    {
      value: 200
    },
    {
      value: 300
    },
    {
      value: 400
    },
    {
      value: 500
    },
    {
      value: 600
    },
    {
      value: 700
    },
    {
      value: 800
    },
    {
      value: 900
    }
  ]

  const NavContainer = styled.div`
    width: 100vw;
    height:10%;
    display: flex;
    justify-content:center;
    align-items: center;

    & .slider{
        width:350px;
        margin: 0 10px;
    }

    & .MuiSlider-track, .MuiSlider-rail{
        height: 10px;
        background-color: rgb(0,0,0,0.2);
        border-radius: 10px;
    }

    & .MuiSlider-marked, .MuiSlider-mark{
        background-color: transparent;
    }

    & .MuiSlider-thumb{
        height: 20px;
        width: 20px;
    }
`

export const Navbar = props => {
    const { sliderValue, setSliderValue } = props 

    const handleChange = (value) => {
        setSliderValue(value)
    }

    return (
        <NavContainer>
                <p>Level: {sliderValue}</p>
            <div className='slider'>
            <Slider
                min={100}
                max={900}
                getAriaValueText={handleChange}
                defaultValue={500}
                valueLabelDisplay="off"
                marks={marks}
                step={null}
            />
            </div>
        </NavContainer>
    )
}

