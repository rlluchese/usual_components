import Button from '../components/Button';
import { useState } from 'react';
import Panel from '../components/Panel';

function CustomCounterPage({ initialCount }){
    const [count, setCount] = useState(initialCount);
    const [quantity, setQuantity] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setCount(count + quantity);
    };

    const handleEdit = (event) => {
        const value = parseInt(event.target.value) || 0;
        setQuantity(value);
    };

    return (
        <Panel className='m-3'>
            <h1 className='text-lg'>Count is { count }</h1>
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
                <input type='number' className='p-1 m-3 bg-gray-50 border border-gray-300' value={ quantity } onChange={ handleEdit }></input>
                <Button>
                    Add it!
                </Button>
            </form>
        </Panel>
    );
}

export default CustomCounterPage;