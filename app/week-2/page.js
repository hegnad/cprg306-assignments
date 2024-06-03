import React from 'react';
import StudentInfo from './student-info';
import Link from 'next/link';

export default function Page() {
    return (
        <main>
            <h1>Shopping List</h1>
            <StudentInfo />

            <Link href="/" className="text-blue-500 hover:underline flex justify-center items-center">Go back to Assignments</Link>

        </main>
    );
}
