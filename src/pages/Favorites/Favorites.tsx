import {UserTable} from "@/features/usersTable";
import useUsersStore from "../../features/usersTable/store/users.ts";
import {useEffect} from "react";

export const Favorites = () => {

    const {users, fetchUsers, favorites} = useUsersStore((state) => state)

    const favoriteUsers = users.filter((user) => favorites.includes(user.id))

    useEffect(() => {
        if (!users.length) {
            fetchUsers()
        }
    }, [])

    return (
        <>
            <UserTable users={favoriteUsers}/>
        </>
    );
};
