import React from 'react'

export const AngularIntroduce = (props) =>{
    return (
        <div className="container">
           <header>
               <img src={props.angularAvatar} alt=""/>
<h1>Count of Repositories {props.angularReposCount}</h1>
               <h1><a href={props.angularBlog}>Look at their BLOG, there is a lot of interting materials!</a></h1>
               <h2 onClick={() => props.showContributors()} >Take a look at their contributors!</h2>
           </header>
        </div>

    )
}


