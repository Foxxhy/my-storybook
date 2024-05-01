interface IShadow {
    shadow?: 's' | 'm' | 'l' | 'unset';
}

/**
 * ### CSS composable
 * - The Shadow component is to add shadow on elements
 * The Shadow component accepts the following props:
 * 
 * - `shadow` : Specifies the importance of the sadow
 */
export const Shadow = ({
    shadow = undefined,
}: IShadow) => {

    const classShadow = (shadow && shadow !== 'unset') ? ` f-shadow-${shadow}` : '';

    return (
        <div className={"f-background-info f-width-44 f-height-44 f-radius-10 f-absolute f-left-0 f-top-20 f-elevation-side" + classShadow} > </div>
    );
};
