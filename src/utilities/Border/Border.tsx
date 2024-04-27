interface IBorder {
    type: 'blue' | 'indigo' | 'purple' | 'pink' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'cyan' | 'white' | 'gray' | 'gray-dark' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | 'transparent';
    direction: 'top' | 'right' | 'bottom' | 'left' | 'unset';
    children: React.ReactNode;
}

/**
/**
 * ### CSS utilities
 * - The Background is a utility class
 * 
 * - `type` : Specifies the background-color
 * - `direction` : Specifies the direction of the border
 * - `children`: The content to be displayed inside the button.
 */
export const Border = ({
    type = 'blue',
    direction='unset',
    children
}: IBorder) => {

    const classBorder = (direction && direction === 'unset') ? ` f-border-${type}` :  ` f-border-${direction}-${type}`;

    return (
        <p className={classBorder}>{children}</p>
    );
};
