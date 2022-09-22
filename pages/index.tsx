import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import Image from 'next/image';

import React, { Component }  from 'react';


export default function Home() {
return (

    <Layout pageTitle='Home Page'>
      <Image src="/gereja.jpg" width={300} height={400}/>
      <p className={styles['title-homepage']}>Wellcome Eric</p>
     </Layout>

  )
}