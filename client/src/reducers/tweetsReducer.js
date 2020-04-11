export default function (state = [], action) {
    switch (action.type) {
        case 'GET_TWEETS':
            return [...action.tweets]

        case 'ADD_TWEET':
            return [...state, action.preload]

        case 'DELETE_TWEET':
            return [...state].filter(i=>i.id!=action.id)
        default:
            return state

    }
}
