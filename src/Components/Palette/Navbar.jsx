import React, { useState } from 'react'
import Slider from '@material-ui/core/Slider'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const marks = [
    { value: 100 },
    { value: 200 },
    { value: 300 },
    { value: 400 },
    { value: 500 },
    { value: 600 },
    { value: 700 },
    { value: 800 },
    { value: 900 }
]

  const NavContainer = styled.div`
    width: 100vw;
    height:6%;
    display: flex;
    align-items: center;
    justify-content:space-between;
    
    & .left{
        display:flex;
        height: 100%;
        align-items: center;
    }
    
    & .logo{
        justify-content:center; 
        display: flex;
        align-items: center;
        width: 150px;
        height: 100%;
        background-color: rgb(0,0,0,0.2);
        margin-right: 20px;
    }

    .logo a{
        text-decoration: none;
        font-weight:500;
        color: #222;
    }

    & .slider{
        width:350px;
        margin: 0 10px;
    }
    
    & .right{
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
    const { sliderValue, setSliderValue, format, setFormat } = props
    const [open, setOpen] = useState(false)

    const handleChange = value => {
        setSliderValue(value)
    }

    const handleSelect = e => {
        setOpen(true)
        setFormat(e.target.value)
    } 

    const handleClose = (e, reason) => {
        if( reason ==='clickaway' ) return
        setOpen(false)
    }

    return (
        <NavContainer>
            <div className="left">
                <div className="logo">
                    <Link to='/'>Color App</Link>
                </div>
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
            </div>
            <div className="right">
                <Select value={format} onChange={ handleSelect }>
                    <MenuItem value='hex'>HEX - #ffffff</MenuItem>
                    <MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>
                    <MenuItem value='rgba'>RGBA - rgba(255,255,255,1)</MenuItem>
                </Select>
            </div>
            {/* <Snackbar 
                anchorOrigin={{vertical:'bottom', horizontal:'left'}}
                onClose={ () => setOpen(false) }
                autoHideDuration={3000}
                open={open}
                message='Format changed'
                action={ 
                    <IconButton
                    aria-label="close"
                    color="inherit"
                    onClick={() => setOpen(false)}
                  >
                    <CloseIcon />
                  </IconButton>
                }
            /> */}
            <Snackbar
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                message="Format changed"
                action={
                <React.Fragment>
                    {/* <Button color="secondary" size="small" onClick={handleClose}>
                    UNDO
                    </Button> */}
                    <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </React.Fragment>
                }
            />
        </NavContainer>
    )
}

