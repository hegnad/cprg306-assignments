import React from 'react';
import NewItem from './new-item';
import Link from 'next/link';

const Page = () => {
    return (
        <main className="min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold mb-6">Add a New Item</h1>
            <NewItem />
            <footer className="fixed bottom-0 w-full flex justify-center items-center">
                <Link href="/" className="text-blue-500 hover:underline">Go back to Assignments</Link>
            </footer>
        </main>
    );
};

export default Page;
