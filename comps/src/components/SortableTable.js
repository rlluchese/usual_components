import Table from './Table';
import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';
import useSorting from '../hooks/use-sorting';

function SortableTable(props) {
    const { sortOrder, sortBy, handleClick } = useSorting();
    const { config, data } = props;

    const updatedConfig = config.map((column) => {
        if (!column.sortValue){
            return column;
        }
        else{
            return {
                ...column,
                header: () => (
                    <th className='cursor-pointer hover:bg-gray-100' onClick={ () => handleClick(column.label) } >
                        <div className='flex items-center'>
                            { getIcons(column.label, sortBy, sortOrder) }
                            { column.label }
                        </div>
                    </th>
                )
            }
        }
    });

    const getIcons = (label, sortBy, sortOrder) => {
        if (label !== sortBy){
            return (<div>
                    <GoArrowSmallUp />
                    <GoArrowSmallDown />
                </div>
            );
        }

        if (sortOrder === null){
            return (<div>
                <GoArrowSmallUp />
                <GoArrowSmallDown />
            </div>
            );
        } else if (sortOrder === 'asc'){
            return (<div>
                <GoArrowSmallUp />
            </div>
            );
        } else if (sortOrder === 'desc'){
            return (<div>
                <GoArrowSmallDown />
            </div>
            );
        }
    };

    let sortedData = data;

    if (sortOrder !== null && sortBy !== null){
        const { sortValue } = config.find(column => column.label === sortBy);
        sortedData = [...data].sort((a,b) => {
            const valueA = sortValue(a);
            const valueB = sortValue(b);

            const reverseOrder = sortOrder === 'asc' ? 1 : -1;

            if (typeof valueA === 'string'){
                return valueA.localeCompare(valueB) * reverseOrder;
            } else {
                return (valueA - valueB) * reverseOrder;
            }
        });
    }

    return (
        <Table { ...props } config={ updatedConfig } data={ sortedData } />
    );
}

export default SortableTable;