import React from 'react'
import mainColors from '../mainColors'
import { colorGenerator } from '../colorGenerator'
import { Switch, Route } from 'react-router-dom'
import Home from '../Components/Home/Home'
import Palette from '../Components/Palette/Palette'

export const AllRoutes = () => {
    const findPalette = id => {
        return mainColors.find( item => item.id === id )
    }

    return (
        <Switch>
            <Route path='/' exact render={ props => <Home {...props} /> } />
            <Route path='/palette/:id' 
                render={ props => <Palette {...props} 
                palette={ colorGenerator( findPalette( props.match.params.id ) ) } />  } 
            />
        </Switch>
    )
}
