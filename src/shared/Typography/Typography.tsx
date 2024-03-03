import cn from "classnames";
import {ReactNode} from "react";
import './Typography.scss'

type TTypographyProps = {
    component?: React.ElementType,
    variant?: TTypographyVariants,
    color?: TTypographyColors,
    className?: string,
    children: ReactNode
}

type TTypographyVariants = "body" | "title" | 'header' | 'header-bold';

type TTypographyColors = 'white';

const Typography = ({ component: Component = 'p', children, variant = 'body', color = 'white', className, ...props }: TTypographyProps) => {

    return <Component
        className={cn(className, {
            [`typography--variant-${variant}`]: variant,
            [`typography--color-${color}`]: color,

        })}
        {...props}>{children}</Component>;
};

export default Typography;