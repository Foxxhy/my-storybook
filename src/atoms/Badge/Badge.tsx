interface IBadge {
    type: 'success' | 'info' | 'warning' | 'danger' | 'primary' | 'secondary'| 'dark';
    weight?: 'thin' | '100' | '200' | '300' | '400' | '500 ' | 'normal' | '600' | 'bold' | '700' | '800' | 'bolder' | '900' | 'unset';
    outline? : boolean;
    full?: boolean,
    children: React.ReactNode;
}

/**
 * ### CSS component
 * - The Badge component is used to display a small piece of information, typically containing a status, number, or icon. It can be customized to represent different types of badges.
 * The Badge component accepts the following props:
 * 
 * - `type`: Specifies the type of badge.
 * - `weight`: Specifies the weight of the badge text. 
 * - `outline`: A boolean value indicating whether the badge should have an outline. Defaults to false.
 * - `full`: A boolean value indicating whether the badge should expand to fill its container's width. Defaults to false.
 * - `children`: The content to be displayed inside the badge.
 */
export const Badge = ({
    type = 'success',
    weight = undefined,
    outline = false,
    full = false,
    children
} : IBadge) => {

    const classButton = `f-badge${outline ? `-outline` : ''}-${type || 'success'}`;
    const classWeight = (weight && weight !== 'unset') ? ` f-weight-${weight}` : '';
    const classFull = full ? ` f-width-full` : '';

    return (
        <span className={classButton + classWeight + classFull}>
            {children || 'Lorem Ipsum Factum'}
        </span>
    );
};
