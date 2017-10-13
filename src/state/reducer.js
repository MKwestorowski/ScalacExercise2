import angularData from './parts/angularData'
import angularRepoList from './parts/angularReposList'


export default (state = {}, action) => {
    return {

        angularData: angularData(state.angularData, action),
        angularRepoList: angularRepoList(state.angularRepoList, action)
    }
}