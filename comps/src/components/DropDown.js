import { useState, useEffect, useRef } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';

function DropDown({ options, onChange, value }){
    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (!divEl.current){
                return;
            }

            if (!divEl.current.contains(event.target)){
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handler, true);

        const cleanUp = () => {
            document.removeEventListener('click', handler);
        };

        return cleanUp;
    }, []);

    const handleIsOpen = () => {
        setIsOpen((current) => !current);
    };

    const handleOptionClick = (option) => {
        onChange(option);
        setIsOpen(false);
    };

    const renderedOptions = options.map((option) => {
        return (
            <div key={ option.value } onClick={ () => handleOptionClick(option) } className='hover:bg-sky-100 rounded cursos-pointer p-1'>{ option.label }</div>
        );
    });

    return (
        <div ref={ divEl } className='w-48 relative'>
            <Panel onClick={ handleIsOpen } 
                className='flex justify-between items-center cursor-pointer'>
                { value?.label || 'Select...' }
                <GoChevronDown className='text-2xl' />
            </Panel>
            { isOpen && <Panel className='absolute top-full'>{ renderedOptions }</Panel> }
        </div>
    );
}

export default DropDown;