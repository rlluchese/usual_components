import Button from '../components/Button';
import { useReducer } from 'react';
import Panel from '../components/Panel';

const INCREMENT_COUNT = 'increment-count';
const DECREMENT_COUNT = 'decrement-count';
const INCREMENT_COUNT_BY_QUANTITY = 'increment-count-by-quantity';
const EDIT_QUANTITY = 'edit-quantity';

const reducer = (state, action) => {
    switch (action.type){
        case INCREMENT_COUNT:
            return {
                ...state,
                count: state.count + 1
            };
        case DECREMENT_COUNT:
            return {
                ...state,
                count: state.count - 1
            };
        case INCREMENT_COUNT_BY_QUANTITY:
            return {
                ...state, // Even re-writing all the properties, we let this line if in the future we add a new property our code won't break
                count: state.count + state.quantity,
                quantity: 0
            };
        case EDIT_QUANTITY:
            return {
                ...state,
                quantity: action.payload
            };
        default:
            // Always guarantee a return value, or we could decide to throw an error. It's up to us!
            return state;
    }
};

function CustomReducerPage({ initialCount }){
    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        quantity: 0
    });

    const increment = () => {
        dispatch({
            type: INCREMENT_COUNT
        });
    };

    const decrement = () => {
        dispatch({
            type: DECREMENT_COUNT
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: INCREMENT_COUNT_BY_QUANTITY
        });
    };

    const handleEdit = (event) => {
        const value = parseInt(event.target.value) || 0;
        dispatch({
            type: EDIT_QUANTITY,
            payload: value
        });
    };

    return (
        <Panel className='m-3'>
            <h1 className='text-lg'>Count is { state.count }</h1>
            <div className='flex flex-row'>
                <Button onClick={ increment }>
                    Increment
                </Button>
                <Button onClick={ decrement }>
                    Decrement
                </Button>
            </div>

            <form onSubmit={ handleSubmit }>
                <label>Add a lot!</label>
                <input type='number' className='p-1 m-3 bg-gray-50 border border-gray-300' value={ state.quantity } onChange={ handleEdit }></input>
                <Button>
                    Add it!
                </Button>
            </form>
        </Panel>
    );
}

export default CustomReducerPage;