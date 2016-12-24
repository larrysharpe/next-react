import React from "react";
import Head from 'next/head';
import Link from "next/link";

export default () => (
    <div>
        <Head>
            <title>League Table</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="https://unpkg.com/purecss@0.6.1/build/pure-min.css" />
        </Head>
        <Link href="/about">About</Link>
        <h1>This is just so easy!</h1>
    </div>
);