/**
 * Created by MKwestorowski on 09/10/2017.
 */

import React from 'react'
import { ContributorsList } from './../components/ContributorsList'

import {connect} from 'react-redux'


export default connect(
    state => ({
        angularReposList: state.angularReposList
    }),
    dispatch =>  ({
        success: data => dispatch({
            type: 'angularData/FETCH__SUCCESS',
            data: data
        })

    })

)(class contributorList extends React.Component {



    componentDidMount() {
        this.fetchContributors()
    }

   wait = (ms) => {
        new Promise(r => setTimeout(r, ms))
       console.log(Promise)
}

    fetchContributors = async () => {
        try {
            await this.wait(1000)
            console.log(this.props.angularReposList)
             const response = await fetch(this.props.angularReposList)
             const result = await response.json()
        }
        catch(err) {
            throw console.log('Fetching failed', err)
        }
    }




    render() {

        // contributorList = this.props.angularReposList


        return (
            <ContributorsList
                // contributorList={contributorList}
                />

        )
    }
})