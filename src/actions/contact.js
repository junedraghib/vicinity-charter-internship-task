export const addAction = (data) => ({ type: 'ADD_CONTACT', data })
export const deleteAction = (index) => ({type: 'DELETE_CONTACT', index})
export const editAction = (payload) => ({type: 'EDIT_CONTACT', payload})
export const setAction = (payload) => ({type: 'SET', payload})