import { ColorBox } from './ColorBox'
import styles from './Pallete.module.css'

export const Palette = props => {
    const colorBoxes = props.palette.colors?.map( item => 
        <ColorBox key={item.name} 
        color={item.color}
        name={item.name} 
        /> )

    return (
    <div className={styles.main}>
        {/* // Navbar */}
        <div className={styles.paletteColors}>{ colorBoxes }</div>
        {/* footer */}
    </div>
    )
}
