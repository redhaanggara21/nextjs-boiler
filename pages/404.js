import React, { useEffect } from 'react'
import Layout from '../components/Layout/layout'
import { useRouter } from 'next/router';

export default function Custom404() {
    const route = useRouter();

    useEffect(() => {
        
        setTimeout(() => {
            route.push("/");
        },2000);

        // return () => {
        //     cleanup
        // }

    }, [])

    return (
        <Layout>
            Not Found
        </Layout>
    )
}
