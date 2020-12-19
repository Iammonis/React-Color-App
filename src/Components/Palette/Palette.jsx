import { useState } from 'react'
import { ColorBox } from './ColorBox'
import styles from './Pallete.module.css'
import { Navbar } from './Navbar'

export const Palette = props => {
    const [sliderValue,setSliderValue] = useState(500)
    const colorBoxes = props.palette.colors[sliderValue]?.map( item =>   
        <ColorBox key={item.name} 
        color={item.hex}
        name={item.name} 
        /> )

    return (
    <div className={styles.main}>
        <Navbar sliderValue={sliderValue} setSliderValue={setSliderValue} />
        <div className={styles.paletteColors}>{ colorBoxes }</div>
        {/* footer */}
    </div>
    )
}
