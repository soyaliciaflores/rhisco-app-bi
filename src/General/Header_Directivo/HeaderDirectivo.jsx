import React from 'react'

function HeaderDirectivo({HeaderAnalistaIMG}) {
    return (
        
        <div className="headerDir">
           <div className="header">
                <img src={HeaderAnalistaIMG} alt='header' className='headerHeaderAnalistaIMG' width='100%'/>
            </div>   
        </div>
    )
}
export default HeaderDirectivo