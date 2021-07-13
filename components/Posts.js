import {useCollection} from 'react-firebase-hooks/firestore';
import {db} from '../firebase';
import PostView from './PostView';
function Posts() {
    const [realtimePosts, loading, error] = useCollection(
        db.collection('posts').orderBy('timestamp', 'desc')
    );
    return (
        <div>
            {
                realtimePosts.docs.map(post => <PostView/>)
            }
        </div>
    )
}

export default Posts
