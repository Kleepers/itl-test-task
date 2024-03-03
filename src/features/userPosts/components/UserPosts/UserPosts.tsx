import {useEffect, useState} from "react";
import UserPost from "@/features/userPosts/components/UserPost/UserPost.tsx";
import TPost from "@/features/userPosts/types/TPost.ts";

type TUserProps = {
    userId: string
}

const UserPosts = (props: TUserProps) => {

    const {userId} = props;

    const [posts, setPosts] = useState<TPost[]>([])
    // const [isLoading, setIsLoading] = useState<boolean>(true)
    // const [isError, setIsError] = useState<boolean>(false)
    // or use react-query

    useEffect(() => {

        const fetchPosts = async () => {
            // try catch -> setIsError, setIsLoading
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            const data = await response.json() as TPost[]
            setPosts(data)
        }

        fetchPosts()
    }, [])

    // if (isLoading) ...
    // if (isError) ...

    return (
        <div>
            {posts.map((item) => {
                return <UserPost key={item.id} post={item}></UserPost>
            })}
        </div>
    );
};

export default UserPosts;
