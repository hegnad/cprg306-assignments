'use client';

import React, { useState } from 'react';

const NewItem = ({ onAddItem }) => {

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState('produce');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            id: Date.now().toString(),  // Generating a random ID
            name,
            quantity,
            category: category.toLowerCase()  // Format category to lower-case
        };

        onAddItem(newItem);

        setName('');
        setQuantity(1);
        setCategory('produce');
    };

    // Tailwind CSS classes
    const formItemClassName =`
        w-full
        flex justify-between items-center p-4 
        border border-gray-500 rounded-lg mb-5
        bg-blue-950 text-white hover:bg-blue-800
        transition-all duration-300 ease-in-out
        transform hover:scale-105
    `;

    return (
        
        <div className="border border-gray-500 p-6 rounded-lg">
            <form onSubmit={handleSubmit} className="flex flex-col items-center max-w-lg">
                
                <div className='w-full'>
                    <label htmlFor="name">Item Name:</label>
                    <input 
                        type="text"
                        id="name"
                        value={name}
                        className={formItemClassName}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className='w-full'>
                    <label htmlFor="quantity">Quantity:</label>
                    <input 
                        type="number"
                        id="quantity"
                        value={quantity}
                        className={formItemClassName}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                </div>

                <div className='w-full'>
                    <label htmlFor="category">Category:</label>
                    <select 
                        id="category"
                        value={category}
                        className={formItemClassName}
                        onChange={(e) => setCategory(e.target.value.toLowerCase())}  // Format selection to lower-case
                    >
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

                <div className='justify-center'>
                    <button 
                        type="submit"
                        className={formItemClassName}
                    >
                        Add Item
                    </button>
                </div>

            </form>
        </div>

    )
};

export default NewItem;
