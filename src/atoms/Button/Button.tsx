interface IButton {
    type: 'success' | 'info' | 'warning' | 'danger' | 'dark' | 'gray' | 'light';
    weight?: 'thin' | '100' | '200' | '300' | '400' | '500 ' | 'normal' | '600' | 'bold' | '700' | '800' | 'bolder' | '900' | 'unset';
    outline? : boolean;
    full?: boolean,
    hover?: boolean,
    focus?: boolean,
    children: React.ReactNode;
}

/**
 * - Typography
 * @param props: ITypography
 * @returns - JSX
 */
export const Button = ({
    type = 'success',
    weight = undefined,
    outline = false,
    full = false,
    hover= false,
    focus= false,
    children
} : IButton) => {

    const classButton = `f-button${outline ? '-outline' : ''}-${type || 'success'}`;
    const classWeight = (weight && weight !== 'unset') ? ` f-weight-${weight}` : '';
    const classHover = hover ? ` f-effect-hover` : '';
    const classFocus = focus ? ` f-effect-focus` : '';
    const classFull = full ? ` f-width-full` : '';

    return (
        <button className={classButton + classWeight + classFull + classHover + classFocus}>
            {children || 'Lorem Ipsum Factum'}
        </button>
    );
};
