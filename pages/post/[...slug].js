
import { useRouter } from 'next/router'
import Layout from '../../components/Layout/layout'

const Comment = () => {
    const router = useRouter()
    const slug = router.query.slug || []
  
    return (
      <>
        <Layout>
            <h1>Slug: {slug.join('/')}</h1>
        </Layout>
      </>
    )
  }
  
  export default Comment