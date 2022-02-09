import React from 'react';


export default function Info() {
    
    return(
        <div className="info--container">
        <h1 className="info--name">Robert Milliken</h1>
        <h2 className="info--job">Software Developer</h2>
        <a href="https://thisismysite.pw" target="_blank" className="info--website">thisismysite.pw</a>
        <div className="info--btn_wrapper">
        <button className="info--btn email"><div className="info--btn_text email" >Email</div></button>
        <button className="info--btn link"><div className="info--btn_text link">LinkedIn</div></button>
        </div>
        </div>
    )
    
}