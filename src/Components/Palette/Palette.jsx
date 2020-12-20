import { useState } from 'react'
import { ColorBox } from './ColorBox'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { withStyles } from '@material-ui/styles'

const styles = {
    main:{
        height:'100vh',
        width:'100vw',
        overflow: 'hidden',
    },
    palette: {
        height:'90%',
        maxWidth: '100%',
    } 
}

const Palette = props => {
    const { classes, palette } = props
    const { emoji, paletteName } = palette
    const [sliderValue,setSliderValue] = useState(500)
    const [format, setFormat] = useState('hex')
    const colorBoxes = props.palette.colors[sliderValue]?.map( item =>   
        <ColorBox key={item.name} 
        color={item[format]}
        name={item.name} 
        /> )

    return (
    <div className={classes.main}>
        <Navbar sliderValue={sliderValue} setSliderValue={setSliderValue} format={format} setFormat={setFormat} />
        <div className={classes.palette}>{ colorBoxes }</div>
        <Footer emoji={ emoji } name={ paletteName }  />
    </div>
    )
}

export default withStyles(styles)(Palette)