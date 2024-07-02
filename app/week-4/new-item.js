'use client';

import React, { useState } from 'react';

const NewItem = () => {

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState('Produce');

    const handleSubmit = (e) => {
        
        e.preventDefault();
        alert(`New Item:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

        setName('');
        setQuantity(1);
        setCategory('Produce');

    };

    // Tailwind CSS classes
    const inputClassName = `
        w-full
        flex justify-between items-center p-4 
        border border-gray-500 rounded-lg mb-5
        bg-blue-950 text-white hover:bg-blue-800
        transition-all duration-300 ease-in-out
        transform hover:scale-105
    `;

    return (

        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center max-w-lg">
            
            <div className='w-full'>
                <label htmlFor="name">Item Name:</label>
                <input 
                    type="text"
                    id="name"
                    value={name}
                    className={inputClassName}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className='w-full'>
                <label htmlFor="quantity">Quantity:</label>
                <input 
                    type="number"
                    id="quantity"
                    value={quantity}
                    className={inputClassName}
                    onChange={(e) => setQuantity(e.target.value)}
                />
            </div>

            <div className='w-full'>
                <label htmlFor="category">Category:</label>
                <select 
                    id="category"
                    value={category}
                    className={inputClassName}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Meat">Meat</option>
                    <option value="Frozen Foods">Frozen Foods</option>
                    <option value="Canned Goods">Canned Goods</option>
                    <option value="Dry Goods">Dry Goods</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Household">Household</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div className='justify-center'>
                <button 
                    type="submit"
                    className={inputClassName}
                    >
                            Add Item
                </button>
            </div>

        </form>

    )

};

export default NewItem;