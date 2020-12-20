import { useState } from 'react'
import { ColorBox } from './ColorBox'
import styles from './Pallete.module.css'
import { Navbar } from './Navbar'
import { Footer } from './Footer'


export const Palette = props => {
    const [sliderValue,setSliderValue] = useState(500)
    const [format, setFormat] = useState('hex')
    const colorBoxes = props.palette.colors[sliderValue]?.map( item =>   
        <ColorBox key={item.name} 
        color={item[format]}
        name={item.name} 
        /> )

    return (
    <div className={styles.main}>
        <Navbar sliderValue={sliderValue} setSliderValue={setSliderValue} format={format} setFormat={setFormat} />
        <div className={styles.paletteColors}>{ colorBoxes }</div>
        <Footer emoji={props.palette.emoji} name={props.palette.paletteName}  />
    </div>
    )
}
