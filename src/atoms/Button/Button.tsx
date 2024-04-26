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
 * The Button component is used to start an action. It can be customized to represent different types of buttons.
 * The Button component accepts the following props:
 * 
 * - `type`: Specifies the type of button.
 * - `weight`: Specifies the weight of the button text. 
 * - `outline`: A boolean value indicating whether the button should have an outline. Defaults to false.
 * - `full`: A boolean value indicating whether the button should expand to fill its container's width. Defaults to false.
 * - `children`: The content to be displayed inside the button.
 * - 'focus': Add a box-shadow effect onFocus. Default to false.
 * - 'hover': Add a zoom effect onHover. Default to false.
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
