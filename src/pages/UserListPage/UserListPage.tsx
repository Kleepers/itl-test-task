import {useEffect} from 'react';
import {UserTable, useUsersStore} from "@/features/usersTable";


export const UserListPage = () => {

    const {users, fetchUsers} = useUsersStore((state) => state)

    useEffect(() => {
        if (!users.length) {
            fetchUsers()
        }
    }, [])


    return (
        <UserTable users={users}/>
    );
};
