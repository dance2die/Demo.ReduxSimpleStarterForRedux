// "state" arg is not application state,
// only the state this reducer is responsible for
// Redux doesn't allow returning 'undefined' from a reducer.
// So "state" is initialized to "null".
export default function(state = null, action) {
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }

    return state;
}