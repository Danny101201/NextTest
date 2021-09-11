import danny from '../../styles/Danny.module.css'
import Link from 'next/link';
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    return {
        props: { Danny: data }
    }
}

const Article = ({ Danny }) => {
    return (
        <div>
            <h1>Hellow Danny</h1>
            {
                Danny.map(data => (
                    <Link href={'/danny/' + data.id} key={data.id}>
                        <div className={danny.single} >
                            <a >
                                <h3>{data.name}</h3>
                            </a>
                        </div>
                    </Link> 

                ))
            }
        </div>
    );
}

export default Article;