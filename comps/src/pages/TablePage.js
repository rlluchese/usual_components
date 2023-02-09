import Table from "../components/Table";
import SortableTable from "../components/SortableTable";

function TablePage() {
    const data = [
        { name: 'Orange', color: 'bg-orange-500', score: 5 },
        { name: 'Apple', color: 'bg-red-500', score: 3 },
        { name: 'Banana', color: 'bg-yellow-500', score: 1 },
        { name: 'Lime', color: 'bg-green-500', score: 4 }
    ];

    const config = [
        {
            label: 'Fruits',
            render: (fruit) => fruit.name,
            sort: (a, b) => a.localCompare(b)
        },
        {
            label: 'Color',
            render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>
        },
        {
            label: 'Score',
            render: (fruit) => fruit.name,
            header: () => <th className="bg-red-500">Score</th>,
            sort: (a, b) => a - b
        }
    ];

    const keyFn = (fruit) => {
        return fruit.name;
    };

    const data2 = [
        { name: 'Orange', color: 'bg-orange-500', score: 5 },
        { name: 'Apple', color: 'bg-red-500', score: 3 },
        { name: 'Banana', color: 'bg-yellow-500', score: 1 },
        { name: 'Lime', color: 'bg-green-500', score: 4 }
    ];

    const config2 = [
        {
            label: 'Fruits',
            render: (fruit) => fruit.name,
            sortValue: (fruit) => fruit.name
        },
        {
            label: 'Color',
            render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>
        },
        {
            label: 'Score',
            render: (fruit) => fruit.score,
            sortValue: (fruit) => fruit.score
        }
    ];

    const keyFn2 = (fruit) => {
        return fruit.name;
    };

    return (
        <div>
            <Table data={ data } config={ config } keyFn={ keyFn }/>
            <SortableTable data={ data2 } config={ config2 } keyFn={ keyFn2 }/>
        </div>
    );
}

export default TablePage;