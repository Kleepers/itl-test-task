import {UserTable} from "@/features/usersTable";
import useUsersStore from "../../features/usersTable/store/users.ts";
import {useEffect} from "react";
import Typography from "@/shared/Typography/Typography.tsx";
import './Favorites.scss'

export const Favorites = () => {

    const {users, fetchUsers, favorites} = useUsersStore((state) => state)

    const favoriteUsers = users.filter((user) => favorites.includes(user.id))

    useEffect(() => {
        if (!users.length) {
            fetchUsers()
        }
    }, [])

    if (!favoriteUsers.length) {
        return (
            <div>
                <Typography className={'empty-state'} variant={'header-bold'}>Вы пока никого не добавили в избранное 😭</Typography>
            </div>
        )
    }

    return (
        <>
            <UserTable users={favoriteUsers}/>
        </>
    );
};
