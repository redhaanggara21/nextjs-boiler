import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout/layout'


export default function List(props) {

    const router = useRouter()
    const { id } = router.query
    const { comment } = props;
    console.log(id);
    return (
        <Layout pageTitle="detail loist">
            { comment &&
                <div>
                    <p>{comment.id}</p>
                    <p>{comment.body}</p>
                    <p>{comment.postId}</p>
                </div>
            }
        </Layout>
    )
}

// export async function getStaticPaths(context){
//     const res = await fetch('https://my-json-server.typicode.com/typicode/posts');
//     const posts = await res.json();

//     const paths = posts.map((post) => ({
//         params: {
//             id: `${post.id}`
//         }
//     }));

//     return{
//         paths,
//         fallback: false
//     };
// }


// export const getStaticProps = async (context) => {
//     const res = await fetch('https://my-json-server.typicode.com/typicode/demo/comments/'+context.params.id);
//     const comments = await res.json();
//     return{
//         props : {
//             comment: comments
//         }
//     }
// };

export async function getServerSideProps(context){
    const res = await fetch('https://my-json-server.typicode.com/typicode/demo/comments/'+context.params.id);
    const comments = await res.json();
    return{
        props : {
            comment: comments
        }
    }
};

// export async function getStaticProps(context){
//     console.log(context.params); 
//     // const { id } = context.params;
//     const res = await fetch('https://my-json-server.typicode.com/typicode/demo/posts');
//     const posts = await res.json();
//     // console.log(id);
//     // const paths = da

//     return{
//         props : {
//             post: posts
//         }
//     }
// }



