interface IPadding {
    direction: 'top' | 'right' | 'bottom' | 'left' | 'unset';
    size?: 0 | 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20 | 22 | 24 | 26 | 28 | 30 | 32 | 34 | 36 | 38 | 40 | 42 | 44 | 46 | 48 | 50;
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
export const Padding = ({
    direction = 'unset',
    size = 0,
}: IPadding) => {

    const classPadding = (direction && direction === 'unset') ? ` f-padding-${size}` : ` f-padding-${direction}-${size}`;

    return (
        <>
            <div className={"f-width-44 f-height-40 f-radius-10 f-background-blue" + classPadding} ></div>
        </>
    );
};