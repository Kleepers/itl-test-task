import Typography from "@/shared/Typography/Typography.tsx";
import {StarIcon} from "@/assets/StarIcon.tsx";
import styles from './PostsHeader.module.scss'
import {TUser, useUsersStore} from "@/features/usersTable";
import FilledStarIcon from "@/assets/FilledStarIcon.tsx";

type TPostsHeaderProps = {
    user: TUser
}

const PostsHeader = (props: TPostsHeaderProps) => {

    const {user} = props;

    const {favorites, addFavorite} = useUsersStore();

    const isFavorite = favorites.includes(user.id);

    return (
        <div className={styles.wrapper}>
            <Typography className={styles.name} variant={'header-bold'}>{user.name}</Typography>
            {isFavorite ? <FilledStarIcon /> : <StarIcon className={styles.button} onClick={() => addFavorite(user.id)}></StarIcon>}
            <Typography className={styles.title} variant={'header'}>Posts</Typography>
        </div>
    );
};

export default PostsHeader
