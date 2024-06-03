import React from 'react';

const Item = ({ name, quantity, category }) => {

    return (

        <li className="
            flex justify-between items-center p-4 
            border border-gray-500 rounded-lg mb-5
            bg-blue-950 hover:bg-blue-800 
            transition-all duration-300 ease-in-out
            transform hover:scale-105
            ">

            <span className="font-medium text-white-900">{name}</span>
            <span className="text-gray-400">Quantity: {quantity}</span>
            <span className="text-yellow-500 italic">{category}</span>

        </li>

    );

};

export default Item;
