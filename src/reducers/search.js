import selectMatched from '../selector/search'
export default (state = [], action) => {
    switch (action.type) {
        case 'SEARCH':
            const newstate = selectMatched(action.payload.contacts, action.payload.text)
            console.log(newstate)
            return newstate
        default:
            return state
    }
}