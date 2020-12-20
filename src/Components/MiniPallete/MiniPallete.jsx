import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'

const styles = {
    root: {
        maxWidth: '270px',
        minWidth: '270px',
        margin: '20px',
        padding: '5px',
        backgroundColor: 'white',
        borderRadius: '5px',

        "& a": {
            textDecoration: 'none'
        }
    },
    patches:{
        display:'flex',
        alignItems: 'center',
        justifyContent:'center',
        flexWrap:'wrap',
        margin: '5px',
        
        '& > div': {
            width: '50px',
            height: '40px',
            display:'flex',
            alignItems: 'center',
            justifyContent:'center',
            
        }
    },
    title:{
        display: 'flex',
        justifyContent: 'space-between'
    }
}

const MiniPallete = props => {
    const { id, classes, paletteName, emoji, colors } = props
    const miniBoxes = colors.map( item => <div style={{backgroundColor: item.color}} key={item.name}></div> )
    return (
        <Grid item className={classes.root} >
            <Link to={`/palette/${id}`}>
                <div className={classes.main}>
                    <div className={classes.patches}>
                        { miniBoxes }
                    </div>
                    <div className={classes.title}>
                        <h4>{paletteName}</h4>
                        <p>{emoji}</p>
                    </div>
                </div>
            </Link>
        </Grid>
    )
}

export default withStyles(styles)(MiniPallete)