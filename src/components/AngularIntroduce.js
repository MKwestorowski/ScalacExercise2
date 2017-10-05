import React from 'react'

export const AngularIntroduce = (props) =>{
    return (
        <div className="container">
           <header>
               <img src={props.angularAvatar} alt=""/>
<p>{props.angularReposCount}</p>
           </header>
        </div>

    )
}


export default AngularIntroduce