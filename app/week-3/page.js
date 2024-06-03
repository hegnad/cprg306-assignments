import React from "react";
import ItemList from './item-list';

export default function Page() {
    return (
        <main>
            <h1 className="flex justify-center items-center text-lg font-bold">Shopping List</h1>
            <ItemList />
        </main>
    );
}