interface IBorder {
    type: 'blue' | 'indigo' | 'purple' | 'pink' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'cyan' | 'white' | 'gray' | 'gray-dark' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | 'transparent';
    direction: 'top' | 'right' | 'bottom' | 'left' | 'unset';
    children: React.ReactNode;
}

/**
 * - Typography
 * @param props: ITypography
 * @returns - JSX
 */
export const Color = ({
    type = 'blue',
    direction='unset',
    children
}: IBorder) => {

    const classBorder = (direction && direction === 'unset') ? ` f-border-${type}` :  ` f-border-${direction}-${type}`;

    return (
        <p className={classBorder}>{children}</p>
    );
};
