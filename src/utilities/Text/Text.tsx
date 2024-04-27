interface IText {
    font?: 'primary' | 'secondary' | 'unset',
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'unset'
    weight?: 'thin' | '100' | '200' | '300' | '400' | '500 ' | 'normal' | '600' | 'bold' | '700' | '800' | 'bolder' | '900' | 'unset',
    color?: 'success' | 'info' | 'warning' | 'danger' | 'primary' | 'secondary' | 'unset',
    style?: 'underline' | 'italic' | 'through' | 'unset',
    transform?: 'capitalize' | 'uppercase' | 'lowercase' | 'unset',
    cursor?: 'pointer' | 'unset',
    align?: 'start' | 'center' | 'end' | 'justify' | 'unset',
    children: React.ReactNode,
}

/**
 * ### CSS composable
 * - The Text component is to have customize texts
 * The Text component accepts the following props:
 * 
 * - `font` : Specifies the font-family
 * - `size` : Specifies the font size
 * - `weight` : Specifies the font-weight
 * - `color` : Specifies the color
 * - `style` : Specifies if the Text should be styled
 * - `transform` : Specifies if the content is formated
 * - `align`: The content to be align inside the Text.
 * - `children`: The content to be displayed inside the Text.
 */
export const Text = (props: IText) => {
    const {
        font,
        size,
        weight,
        color,
        style,
        transform,
        cursor,
        children
    } = props;

    const classFont = (font && font !== 'unset') ? ` f-${font}-text` : '';
    const classSize = (size && size !== 'unset') ? ` f-size-${size}` : '';
    const classWeight = (weight && weight !== 'unset') ? ` f-weight-${weight}` : '';
    const classColor = (color && color !== 'unset') ? ` f-color-${color}` : '';
    const classStyle = (style && style !== 'unset') ? ` f-style-${style}` : '';
    const classTransform = (transform && transform !== 'unset') ? ` f-transform-${transform}` : '';
    const classCursor = (cursor && cursor !== 'unset') ? ` f-style-${cursor}` : '';

    return (
        <p className={classFont + classSize + classWeight + classColor + classStyle + classTransform + classCursor}>
            {children || 'Lorem Ipsum Factum'}
        </p>
    );
};
