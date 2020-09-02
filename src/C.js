import React from 'react';
import ThemeContext from './ThemeContext';

const C = () => {
    const value = React.useContext(ThemeContext);
    return (
        <div >
            {console.log('From Component C ', value.Mike,"and",value.Reze)}
        </div>
    );
}

export default C;