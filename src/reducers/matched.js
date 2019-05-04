export default (state = [], action) => {
    switch (action.type) {
        case 'MATCH':
            return action.matched   
        default:
            return state
    }
}