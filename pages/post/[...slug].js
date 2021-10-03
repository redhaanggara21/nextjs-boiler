
import { useRouter } from 'next/router'
import Layout from '../../components/Layout/layout'
import Image from 'next/image'

const Comment = () => {
    const router = useRouter()
    const slug = router.query.slug || []
  
    return (
      <>
        <Layout pageTitle="post">
            <Image src="/profile.png" width={60} height={60}/>
            <h1>Slug: {slug.join('/')}</h1>
            <Image src="/profile.png" width={60} height={60}/>
            <h1>Slug: {slug.join('/')}</h1>
            <Image src="/profile.png" width={60} height={60}/>
            <h1>Slug: {slug.join('/')}</h1>
            <h1>Slug: {slug.join('/')}</h1>
            <h1>Slug: {slug.join('/')}</h1>
            <h1>Slug: {slug.join('/')}</h1>
            <h1>Slug: {slug.join('/')}</h1>
            <h1>Slug: {slug.join('/')}</h1>
            <h1>Slug: {slug.join('/')}</h1>
            <h1>Slug: {slug.join('/')}</h1>
            <h1>Slug: {slug.join('/')}</h1>
            <h1>Slug: {slug.join('/')}</h1>
            <h1>Slug: {slug.join('/')}</h1>
            <h1>Slug: {slug.join('/')}</h1>
            <h1>Slug: {slug.join('/')}</h1>
            <h1>Slug: {slug.join('/')}</h1>
            <h1>Slug: {slug.join('/')}</h1>
            <h1>Slug: {slug.join('/')}</h1>
            <h1>Slug: {slug.join('/')}</h1>
            <h1>Slug: {slug.join('/')}</h1>
            <h1>Slug: {slug.join('/')}</h1>
            <h1>Slug: {slug.join('/')}</h1>
            <h1>Slug: {slug.join('/')}</h1>
            <h1>Slug: {slug.join('/')}</h1>
            <h1>Slug: {slug.join('/')}</h1>
            <h1>Slug: {slug.join('/')}</h1>
            <Image src="/profile.png" width={60} height={60}/>
        </Layout>
      </>
    )
  }
  
  export default Comment