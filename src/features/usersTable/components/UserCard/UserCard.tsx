import Typography from "@/shared/Typography/Typography.tsx";
import TUser from "../../types.ts";
import styles from './UserCard.module.scss'
import {useLocation} from "wouter";

type TUserCardProps = {
    user: TUser;
}

const UserCard = (props: TUserCardProps) => {
    const {name, username, email, phone, website, id} = props.user;

    const [, setLocation] = useLocation()

    return (
        <article onClick={() => setLocation(`/user/${id}`)} className={styles.wrapper}>
            <Typography variant={'title'} component={'h6'} color={'white'} className={styles.name}>
                {name}
            </Typography>
            <Typography className={styles.description}>
                {username}
            </Typography>
            <Typography className={styles.description}>
                {email}
            </Typography>
            <Typography className={styles.description}>
                {phone}
            </Typography>
            <Typography className={styles.description}>
                {website}
            </Typography>
        </article>
    );
};

export default UserCard;