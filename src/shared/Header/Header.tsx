import {Link} from "wouter";
import styles from './Header.module.scss'
import Typography from "@/shared/Typography/Typography.tsx";
import {StarIcon} from "@/assets/StarIcon.tsx";


export const Header = () => {
    return (
        <nav className={styles.header}>
            <Link className={styles.link} to="/favorites">
                <Typography className={styles.text}>Избранное</Typography>
                <StarIcon/>
            </Link>
        </nav>
    );
};