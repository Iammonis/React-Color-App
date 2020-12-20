import { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import styles from './ColorBox.module.css'

export const ColorBox = props => {
    const { name, color } = props
    const [isCopied, setIsCopied] = useState(false)
    let audio = new Audio('/copied.mp3')

    const handleCopy = () => {
        setIsCopied(true)
        audio.play()
        setTimeout(()=>{
            setIsCopied(false)
        },1000)
    }
        
    return (
        <CopyToClipboard text={color} onCopy={handleCopy}>
            <div className={styles.colorBox} style={{background: `${color}`}}>
            { isCopied && <div 
                    style={{background: `${color}`}}
                    className={ styles.showTime }
                >
                    <div className={ styles.copyMessage }>
                        <h1>Copied!!!</h1>
                        <p>{color}</p>
                    </div>
                </div> }
                <button>copy</button>
                <div className={styles.nameColor}>
                    <span className={styles.colorName}>{name}</span>
                    <span className={styles.seeMore}>MORE</span>
                </div>
            </div>
        </CopyToClipboard>
    )
}
