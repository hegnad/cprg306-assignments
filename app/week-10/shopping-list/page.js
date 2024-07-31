'use client';

import React, { useState, useEffect } from "react";
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import Link from 'next/link';
import { getItems, addItem, deleteItem } from '../_services/shopping-list-service';
import { useUserAuth } from '../_utils/auth-context';

const Page = () => {
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState('');
    const { user } = useUserAuth();

    const loadItems = async () => {
        if (user) {
            const items = await getItems(user.uid);
            setItems(items);
        }
    };

    useEffect(() => {
        if (user) {
            loadItems();
        }
    }, [user]);

    const handleAddItem = async (newItem) => {
        if (user) {
            const newItemId = await addItem(user.uid, newItem);
            setItems(prevItems => [...prevItems, { id: newItemId, ...newItem }]);
        }
    };

    const handleDeleteItem = async (itemId) => {
        if (user) {
            await deleteItem(user.uid, itemId);
            setItems(prevItems => prevItems.filter(item => item.id !== itemId));
        }
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
                <ItemList 
                    items={items} 
                    onItemSelect={handleItemSelect} 
                    onDeleteItem={handleDeleteItem} 
                />
                <Link
                    className="
                            w-1/6
                            flex tems-center p-4
                            border border-gray-500 rounded-lg mb-5
                             bg-blue-950 text-white hover:bg-blue-800
                            transition-all duration-300 ease-in-out
                            transform hover:scale-105"
                    href="/week-10">
                    Profile
                </Link>
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
