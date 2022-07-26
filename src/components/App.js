import React from 'react'
import NavBar from './NavBar/NavBar' //importing component
import OptionBar from './OptionBar/OptionBar' //importing component
import Options from './OptionBar/Options' //importing component
import Output from './Output/Output'
import List from './Output/List'

function App() {
    return(
        <div>
            <NavBar/>
            <OptionBar/>
            <Output/>
        </div>   
    )
}

export default App 
