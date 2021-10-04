import React from 'react'
import Layout from '../../components/Layout/layout'
import { useRouter } from 'next/router';

// data fetching static props
export default function index(props) {

    const { dataUser } = props;
    const router = useRouter();

    return (
        <Layout pageTitle="list">
            {
                dataUser && dataUser.map( (post, index) => {
                    return(
                        <div key={post.id} onClick={ () => router.push(`/list/${post.id}`) }>
                            <p>{ post.id }</p>
                            <p>{ post.title }</p>
                        </div>   
                    )
                })

            }
        </Layout>
    )
}

// function embed from next js but its nopt recomended for data whos is not static
export async function getStaticProps(context){
    const res = await fetch('https://my-json-server.typicode.com/typicode/demo/posts');
    const dataUsers = await res.json();

    return{
        props : {
            dataUser: dataUsers
        }
    }
}