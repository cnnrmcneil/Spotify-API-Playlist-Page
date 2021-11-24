export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token placeholder for automatic login, set to null when done
    token: 'BQDNe7F3KOwAU5O6rGG5IaVVq-O6D_V8h3ZzxZrjGHZ6e-FHQzmrHdhvNr5npmjVxQb1jWCbM0YfiZOj7tzRUmWJ-TfzWQboYxV5TySVXlctHmquCgenmXO-bqkGdrImJv5yuIeYSpst-Yub7KKrxMGh7KmLfC3QMLf-brBf_39OdaGFfpbEJntyQbIIR6estdfaog',
}

const reducer = (state, action) => {
console.log('Reducer at work: ', action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
            default: 
                return state;
    }
}

export default reducer;