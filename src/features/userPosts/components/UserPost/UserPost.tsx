import Typography from "@/shared/Typography/Typography.tsx";
import TPost from "@/features/userPosts/types/TPost.ts";
import styles from './UserPost.module.scss'

type TUserPostProps = {
    post: TPost
}

const UserPost = (props: TUserPostProps) => {
    const {title, body} = props.post;

    return (
        <article className={styles.wrapper}>
            <Typography variant={'title'} component={'h6'} color={'white'}>
                {title}
            </Typography>
            <Typography className={styles.description}>
                {body}
            </Typography>
        </article>
    );
};

export default UserPost;