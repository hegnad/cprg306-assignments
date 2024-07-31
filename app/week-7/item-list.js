'use client';

import React, { useState } from "react";
import Item from "./item";

const ItemList = ({ items, onItemSelect }) => {

    const [sortBy, setSortBy] = useState("name");
    const [selectedCategory, setSelectedCategory] = useState("all");

    // Tailwind CSS classes
    const inputClassName = `
        w-2/5
        text-white
        flex justify-center items-center p-4
        border border-gray-500 rounded-lg mb-5
        bg-blue-950 text-white hover:bg-blue-800
        transition-all duration-300 ease-in-out
        transform hover:scale-105
    `;

    const sortItems = (sortBy) => {
        const sortedItems = [...items].sort((a, b) => {
            if (a[sortBy] < b[sortBy]) return -1;
            if (a[sortBy] > b[sortBy]) return 1;
            return 0;
        });
        return sortedItems;
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value.toLowerCase());
    };

    const filteredItems = selectedCategory === "all"
        ? sortItems(sortBy)
        : sortItems(sortBy).filter(item => item.category === selectedCategory);

    return (
        <ul className="max-w-lg mx-auto mt-10">
            <div className="flex justify-center items-center space-x-4 mb-4">
                <button onClick={() => setSortBy("name")} className={inputClassName}>Sort by Name</button>

                <select
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    className={inputClassName.toLowerCase()}
                >
                    <option value="all">All</option>
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen foods">Frozen Foods</option>
                    <option value="canned goods">Canned Goods</option>
                    <option value="dry goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
            </div>

            {filteredItems.map((item) => (
                <Item
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                    onSelect={() => onItemSelect(item)}
                />
            ))}
        </ul>
    );
};

export default ItemList;
