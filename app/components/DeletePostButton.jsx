export default function DeletePostButton({postId}) {

    async function handleClick() {

        try {
            await fetch(`/api/post/${postId}`, {
                method: 'DELETE',
            })
        }   

        catch (e) {
            console.error(e);
        }

    }


    return (
        <button onClick={handleClick}>Delete Post</button>
    )
}