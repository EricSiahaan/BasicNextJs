import { ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import styles from './Layout.module.css';
import Head from 'next/head';
import React from 'react'


interface LayoutProps {
    children: ReactNode ;
    pageTitle:string;
}
export default function Layout(props: LayoutProps) {
    const { children, pageTitle } = props;
  return (
    <>
    <Head>
        <title>NextJS Basic |
        {' '}
        {pageTitle}
             </title>
             <meta name="description" content="Website NextJs Basic" />    
    </Head>
    <div className={styles.container}>
        <Header /> 
        <div className={styles.content}>{children}</div>
        <Footer />
    </div> 
    </>
  );
}
