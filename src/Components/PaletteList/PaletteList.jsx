import React from 'react'
import mainColors from '../../mainColors'
import MiniPallete from '../MiniPallete/MiniPallete'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/styles'

const styles = {
    root: {
        width: '80%',
    }
}

const PaletteList = ({classes}) => {
    return (
        <Grid xs={4} sm={4} md={8} lg={12} xl={12} className={classes.root} container direction="row" alignItems='center' justify='center'>
            {mainColors.map( item => <MiniPallete key={item.id} {...item} /> )}
        </Grid>
    )
}

export default withStyles(styles)(PaletteList)