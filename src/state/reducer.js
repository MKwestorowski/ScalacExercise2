import angularData from './parts/angularData'
import angularRepoList from './parts/angularReposList'
import contributorData from './parts/contributorData'


export default (state = {}, action) => {
    return {
        angularData: angularData(state.angularData, action),
        angularRepoList: angularRepoList(state.angularRepoList, action),
        contributorData: contributorData(state.contributorData, action)
    }
}