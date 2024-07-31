'use client';

import React, { useState } from "react";
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';
import Link from 'next/link';

const Page = () => {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems(prevItems => [...prevItems, newItem]);
    };

    return (
        <main className="flex flex-col items-center p-4 mx-auto">
            <h1 className="text-lg font-bold mb-4">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />
            <Link className="text-blue-500 hover:underline mt-4" href="/">Go back to Assignments</Link>
        </main>
    );
};

export default Page;
