export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    // map data to an array of path objects with params (id)
    const paths = data.map(ninja => {
        return {
            params: { id: ninja.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: { Danny: data }
    }
}

const DeatailId = ({ Danny}) => {
    return ( 
        <div>
            <h1>{Danny.name}</h1>
            <p>{Danny.email}</p>
            <p>{Danny.website}</p>
            <p>{Danny.address.city}</p>
        </div>
     );
}
 
export default DeatailId;