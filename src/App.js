import React, { Component } from 'react';
import './App.css';
import ThemeContext from './ThemeContext'
import D from './D';

class App extends Component {

    render(){
        return (
         <ThemeContext.Provider value={{Mike:'Mike',Reze :'Reze'}}>
           <D/>
        </ThemeContext.Provider>
        );

    }
}

export default App;
