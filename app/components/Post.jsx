import DeletePostButton from "./DeletePostButton";

export default function Post({id, title, content, authorName}) {
    return ( 

        <div style={{border: '1px solid blue', padding: '5px'}}>
            <h4>{authorName}</h4>
            <p>{title}</p>
            <p>{content}</p>
            <DeletePostButton  postId={id} />
        </div>

    )
}