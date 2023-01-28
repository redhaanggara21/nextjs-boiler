import React from 'react'
import Header from '../Header'
import Footer from '../Footer/footer'
import { ReactNode } from 'react'
import style from './layout.module.css'
import Head from 'next/head'

// interface LayoutProps {
//     children: ReactNode
// }

export default function Layout(props) {

    const { children, pageTitle } = props;

    return (
        <div>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content="next js learn"/>
            </Head>
            <Header/>
            <div className={style.container}>
                {children}
            </div>
            <Footer/>
        </div>
    )
}
