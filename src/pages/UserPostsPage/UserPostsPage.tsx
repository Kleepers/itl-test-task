import {useParams} from "wouter";
import {useUsersStore} from "@/features/usersTable";
import PostsHeader from "@/features/userPosts/components/PostsHeader/PostsHeader.tsx";
import { UserPosts } from "@/features/userPosts";
import {useEffect} from "react";

export const UserPostsPage = () => {

    // isError isLoading не делал, дизайна нет, в требованиях четко нет,
    // в целом вставил бы это через useState и условный рендер
    // + как вариант в zustand стейте это хранить

    const {userId} = useParams()
    const user = useUsersStore((state) => state.users.find((user) => user.id === Number(userId)))

    useEffect(() => {
        if (!user) {
            useUsersStore.getState().fetchUsers()
        }
    }, [])

    if (user && userId) {
        return (
            <div>
                <PostsHeader user={user}></PostsHeader>
                <UserPosts userId={userId}></UserPosts>
            </div>
        );
    }
};
