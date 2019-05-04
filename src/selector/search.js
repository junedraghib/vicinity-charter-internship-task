export default (contacts, text = ' ') => {
    const matched = contacts.filter((contact) => contact.data.name.includes(text))
    return text === ''?[]:matched
}