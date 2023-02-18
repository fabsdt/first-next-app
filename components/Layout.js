import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title + ' - AnalyaTech' : 'AnalyaTech'}</title>
        <meta name="description" content="Miner Shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link href="/">
              <p className="text-lg font-bold">AnalyaTech</p>
            </Link>
            <div className='flex'>
              <Link href="/cart">
                <p className="p-2"> Panier </p>
              </Link>
              <Link href="/login">
                <p className="p-2">Connexion</p>
              </Link>
            </div>
          </nav>
        </header>
        <main className='container m-auto mt-4 px-4'>{children}</main>
        <footer className='flex h-10 justify-center items-center shadow-inner'>2022 AnalyaTech</footer>
      </div>
    </>
  );
};

export default Layout;
