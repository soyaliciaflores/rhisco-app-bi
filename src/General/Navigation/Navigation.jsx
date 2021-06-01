import React from 'react'
import rhisco_blackout_logo from '../../Assets/rhisco_blackout_logo.png'
import {Link} from 'react-router-dom'


const Navigation = () => {
    return (
        <div className='main-container'>
            
            <img src={rhisco_blackout_logo} alt='logo de Rhisco'/>
            

            <div className='container-buttons'>
                <Link to='/directivo'>
            <button className='dir-analyst-button'>Directivo</button>
                </Link>

            <Link to='/analista'>
                <button className='dir-analyst-button'>Analista</button>
            </Link>
            </div>
            
        </div>
    )
}

export default Navigation
