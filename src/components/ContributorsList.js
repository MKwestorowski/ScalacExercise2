/**
 * Created by MKwestorowski on 10/10/2017.
 */
import React from 'react'

export const ContributorsList = (props) => {
    return (

        <div>
            {console.log(props.contributorList.data)}
        {props.contributorList.data.map(e => e.map(r => <p key={r.id}> {r.login}</p>))}

        </div>

    )
}
