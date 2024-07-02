import React from "react";
import ItemList from './item-list';
import Link from 'next/link';

const Page = () => {

    return (

        <main>

            <h1 className="flex justify-center items-center text-lg font-bold">Shopping List</h1>
            <ItemList />
            <Link className="text-blue-500 hover:underline flex justify-center items-center" href="/">Go back to Assignments</Link>

        </main>

    );

};

export default Page;