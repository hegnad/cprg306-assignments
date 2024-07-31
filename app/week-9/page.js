'use client';

import React from 'react';
import Link from 'next/link';

const Page = () => {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-4">
            <div className="max-w-lg w-full">
                <div className="relative pb-[56.25%] h-0 overflow-hidden bg-black">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <br />
                <Link className="text-blue-500 hover:underline mt-4" href="/">Go back to Assignments</Link>
            </div>
        </main>
    );
};

export default Page;
