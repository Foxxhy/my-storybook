interface IRadius {
    circle: boolean,
    size?: 0 | 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20 | 22 | 24 | 26 | 28 | 30 | 32 | 34 | 36 | 38 | 40 | 42 | 44 | 46 | 48 | 50;
}

/**
/**
 * ### CSS utilities
 * - The Radius is a utility class
 * 
 * - `circle` : Specifies the display of circle radius
 * - `size` : Specifies the extends of the radius
 */
export const Radius = ({
    size = 0,
    circle= false,
}: IRadius) => {

    const classCircle = circle ? ' f-radius-circle' : '';
    const classPadding = (!circle) ? ` f-radius-${size}` : ``;

    return (
        <>
            <div className={"f-width-44 f-height-40 f-background-blue" + classCircle + classPadding} ></div>
        </>
    );
};