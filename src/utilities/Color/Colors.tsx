interface IColor {
    type: 'blue' | 'indigo' | 'purple' | 'pink' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'cyan' | 'white' | 'gray' | 'gray-dark' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | 'transparent';
    children: React.ReactNode;
}

/**
 * - Typography
 * @param props: ITypography
 * @returns - JSX
 */
export const Color = ({
    type = 'blue',
    children
}: IColor) => {

    const classColor = `f-color-${type}`;

    return (
        <p className={classColor}>{children}</p>
    );
};
