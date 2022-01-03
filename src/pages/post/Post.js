import React from 'react'
import { useMatch } from 'react-location'
import Pattern from '../../components/pattern/Pattern';
import useFetch from '../../hooks/useFetch';

const Post = () => {
    const { params: { id } } = useMatch();
    console.log("🚀 ~ file: Post.js ~ line 7 ~ Post ~ id", id)
    const [data, isPending, error] = useFetch(`http://localhost:3001/patterns/${id}`);
    if (!data || isPending) {
        <p>Skeleton loader</p>
    }

    return (
        <div>
            <Pattern title={data?.title} materials={data?.materials} pattern={data?.pattern} difficulty={data?.difficulty} isPreview={false} />
        </div>
    )
}

export default Post
