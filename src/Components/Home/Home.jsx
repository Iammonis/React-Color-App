import React from 'react'
import { withStyles } from '@material-ui/styles'
import PaletteList from '../PaletteList/PaletteList'

const styles = {
    root: {
        minWidth: '100%',
        minHeight: '100%',
        maxWidth: '100%',
        maxHeight: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        background: `url(${process.env.PUBLIC_URL + '/bg.png'})`,
        backgroundRepeat: 'repeat',

        '& h1': {
            color: '#444'
        },
        
        '& .list': {
            display:'grid',
            placeItems: 'center'
        }
    }
}

const Home = ({classes}) => {
    return (
        <div className={classes.root}>
            <h1>FLAT UI COLORS</h1>
            <div className="list">
                <PaletteList />
            </div>
        </div>
    )
}

export default withStyles(styles)(Home)