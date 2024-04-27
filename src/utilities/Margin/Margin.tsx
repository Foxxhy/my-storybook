interface IMargin {
    direction: 'top' | 'right' | 'bottom' | 'left' | 'unset';
    size?: 0 | 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20 | 22 | 24 | 26 | 28 | 30 | 32 | 34 | 36 | 38 | 40 | 42 | 44 | 46 | 48 | 50;
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
export const Margin = ({
    direction = 'unset',
    size = 0,
    children
}: IMargin) => {

    const classMargin = (direction && direction === 'unset') ? ` f-margin-${size}` : ` f-margin-${direction}-${size}`;

    return (
        <>
            <div className="f-width-44 f-height-40 f-radius-10 f-background-blue" ></div>
            <div className={classMargin}>{children}</div>
            <div className="f-width-44 f-height-40 f-radius-10 f-background-warning" ></div>
        </>
    );
};
