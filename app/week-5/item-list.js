'use client';

import React, {useEffect, useState} from "react";
import Item from "./item";
import itemsFile from "./items.json";

const ItemList = () => {

    const [items, setItems] = useState( itemsFile );
    const [sortBy, setSortBy] = useState( "name" );

    // Tailwind CSS classes
    const inputClassName = `
        w-1/3
        text-white
        flex justify-center items-center p-4
        border border-gray-500 rounded-lg mb-5
        bg-blue-950 text-white hover:bg-blue-800
        transition-all duration-300 ease-in-out
        transform hover:scale-105
    `;

    const sortItems = ( sortBy ) => {

        const sortedItems = [ ...items ].sort( ( a, b ) => {

            if ( a[sortBy] < b[sortBy] ) return -1;
            if ( a[sortBy] > b[sortBy] ) return 1;
            return 0;

        } );

        setItems( sortedItems );

    };

    const buttonSortByName = () => {
        setSortBy("name");
        sortItems("name");
    };

    const buttonSortByCategory = () => {
        setSortBy("category");
        sortItems("category");
    };

    return (

    <ul className="max-w-lg mx-auto mt-20">

        <div className="flex justify-center items-center space-x-4 mb-4">

            <button onClick={buttonSortByName} className={inputClassName}>Sort by Name</button>

            <button onClick={buttonSortByCategory} className={inputClassName}>Sort by Category</button>

        </div>

        {items.map((item) => (

                <Item
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                />

            ))}

        </ul>

    );

};

export default ItemList;