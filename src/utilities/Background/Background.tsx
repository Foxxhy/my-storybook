interface IButton {
    type: 'blue' | 'indigo' | 'purple' | 'pink' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'cyan' | 'white' | 'gray' | 'gray-dark' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | 'transparent';
}

/**
 * - Typography
 * @param props: ITypography
 * @returns - JSX
 */
export const Background = ({
    type = 'blue',
} : IButton) => {

    const classColor = `f-background-${type}`

    return (
        <div className={`${classColor} f-width-44 f-height-40 f-radius-10`}  >

        </div>
    );
};
