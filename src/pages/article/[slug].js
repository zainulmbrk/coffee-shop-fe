import { useRouter } from 'next/router'


const ArticleDetails = ()=>{
    const router = useRouter()
    return(<>

        <h1>Article: {router.query.slug}</h1>

    </>)
}

export default ArticleDetails