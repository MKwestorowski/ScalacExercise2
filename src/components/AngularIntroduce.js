import React from 'react'



const HandleClick = (props) => {
    return (
        <h2 onClick={ () => props.angularContributors}>Take a look at their contributors!</h2>
    )

}

export const AngularIntroduce = (props) =>{
    return (
        <div className="container">
           <header>
               <img src={props.angularAvatar} alt=""/>
<h1>Count of Repositories {props.angularReposCount}</h1>
               <h1><a href={props.angularBlog}>Look at their BLOG, there is a lot of interting materials!</a></h1>
               <HandleClick/>
           </header>
        </div>

    )
}


