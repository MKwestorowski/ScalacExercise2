/**
 * Created by MKwestorowski on 09/10/2017.
 */

import React from 'react'
import {ContributorsList} from './../components/ContributorsList'

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

)(class angularRepoList extends React.Component {



    comonentDidMount() {
        console.log(this.props.angularReposList)

    }




    render() {



        return (
            <ContributorList
                showContributors={}
                angularBlog={}
                angularReposCount={}
                angularAvatar={}/>

        )
    }
})