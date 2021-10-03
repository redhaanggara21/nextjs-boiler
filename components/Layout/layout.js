import React from 'react'
import Header from '../Header/header'
import Footer from '../Footer/footer'
import { ReactNode } from 'react'
import style from './layout.module.css'

// interface LayoutProps {
//     children: ReactNode
// }

export default function Layout(props) {
    console.log(props);
    const { children } = props;

    return (
        <div>
            <Header/>
            <div className={style.container}>
                {children}
            </div>
            <Footer/>
        </div>
    )
}
