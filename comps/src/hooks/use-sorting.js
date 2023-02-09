import { useState } from 'react';

function useSorting(){
    const [ sortOrder, setSortOrder ] = useState(null);
    const [ sortBy, setSortBy ] = useState(null);

    const handleClick = (label) => {
        if (sortBy && label !== sortBy){
            setSortOrder('asc');
            setSortBy(label);
            return;
        }

        if (sortOrder === null){
            setSortOrder('asc');
            setSortBy(label);
        } else if (sortOrder === 'asc'){
            setSortOrder('desc');
            setSortBy(label);
        } else if (sortOrder === 'desc'){
            setSortOrder(null);
            setSortBy(null);
        }
    };

    return {
        sortOrder,
        sortBy,
        handleClick
    };
}

export default useSorting;