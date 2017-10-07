import React from 'react'

import './App.css'

export const LoginScreen = () => {
    return (
        <div className="gitHubButtonWidth flex-container">
            <a href={`http://github.com/login/oauth/authorize?client_id=9f13dc502b256fcebd4f`}
               className="flex-item-button btn btn-block btn-sm btn-social btn-github">
                <span className="fa fa-github"></span>
                Sign in with Github
            </a>
        </div>

    )
}

