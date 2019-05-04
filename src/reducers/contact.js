export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            console.log("add action dispatched")
            return [...state, {data: action.data, edit : false}]
        case 'DELETE_CONTACT':
            console.log("delete action dispatched")
            return state.filter((item, index) => index !== action.index)
        case 'OPEN_FORM':
            var newstate = []
            for (let index = 0; index < state.length; index++) {
                if (index === action.index) {
                    newstate[index] = {data: state[index].data, edit:true}
                } else {
                    newstate[index] = state[index]
                }
            }
            return newstate

        case 'EDIT_CONTACT':
            console.log("edit action dispatched")
            console.log("payload"+action.payload.data)
            newstate = []
            for (let index = 0; index < state.length; index++) {
                if (index === action.payload.index) {
                    newstate[index] = { data: action.payload.data, edit: false }
                } else {
                    newstate[index] = state[index]
                }
            }
            console.log(newstate)
            return newstate
        case 'SET':
            return action.payload
        default:
            return state
    }
};