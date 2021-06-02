import React from 'react'
import rhisco_blackout_logo from '../../Assets/rhisco_blackout_logo.png'
import {Link} from 'react-router-dom'
const Navigation = () => {
    return (
        <div className='main-container-navigation'>
            <img className='image-navigation'src={rhisco_blackout_logo} alt='logo de Rhisco'/>
            <div className='container-buttons-navigation'>
                <Link to='/executive'>
            <button className='dir-analyst-button-navig'> Executive </button>
                </Link>
            <Link to='/analyst'>
                <button className='dir-analyst-button-navig'> Analyst </button>
            </Link>
            </div>
        </div>
    )
}
export default Navigation
