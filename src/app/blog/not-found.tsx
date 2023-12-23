import React from 'react'
import Link from 'next/link';

export default function Notfound() {
    return (
        <div>
            <h2>404 😒❌ | Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/">Return Home</Link>
        </div>
    )
}


