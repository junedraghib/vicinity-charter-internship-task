export default (state = false, action) => {
    switch (action.type) {
        case 'EDIT':
            console.log("edit action despatched")
            return true;
        default:
            return state
    }
};