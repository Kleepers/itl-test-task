import UserCard from "../UserCard/UserCard.tsx";
import styles from './UserTable.module.scss'
import {TUser} from "@/features/usersTable";

type TUserTableProps = {
    users: TUser[];
}

const UserTable = (props: TUserTableProps) => {

    const {users} = props;

    return (
        <div className={styles.table}>
            {users.map((user) => {
                return (
                    <UserCard key={user.id} user={user}/>
                )
            })}
        </div>
    );
};

export default UserTable;
