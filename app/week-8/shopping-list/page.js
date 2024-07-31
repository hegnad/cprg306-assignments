'use client';

import React, { useState } from "react";
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';
import Link from 'next/link';

const Page = () => {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState('');

    const handleAddItem = (newItem) => {
        setItems(prevItems => [...prevItems, newItem]);
    };

    const handleItemSelect = (item) => {
        const cleanedName = item.name
            .toLowerCase()
            .split(',')[0]
            .replace(/[^a-z\s]/g, '')
            .trim();
        setSelectedItemName(cleanedName);

    };

    return (
        <main className="flex p-4 mx-auto">
            <div className="flex flex-col w-1/2 p-6">
                <h1 className="text-center text-lg font-bold mb-4">Shopping List</h1>
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} onItemSelect={handleItemSelect} />
                <Link className="text-blue-500 hover:underline mt-4" href="/week-8">Profile</Link>
                <br />
                <Link className="text-blue-500 hover:underline mt-4" href="/">Go back to Assignments</Link>
            </div>

            <div className="sticky top-0 border border-gray-500 rounded-lg flex flex-col w-1/2 p-6 h-screen">
                <h1 className="text-center text-lg font-bold mb-4">Meal Ideas</h1>
                <MealIdeas ingredient={selectedItemName} />
            </div>
        </main>
    );
};

export default Page;
