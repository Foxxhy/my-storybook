interface ILink {
    font?: 'primary' | 'secondary' | 'unset',
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'unset'
    weight?: 'thin' | '100' | '200' | '300' | '400' | '500 ' | 'normal' | '600' | 'bold' | '700' | '800' | 'bolder' | '900' | 'unset',
    color?: 'success' | 'info' | 'warning' | 'danger' | 'primary' | 'secondary' | 'unset',
    style?: 'underline' | 'italic' | 'through' | 'unset',
    transform?: 'capitalize' | 'uppercase' | 'lowercase' | 'unset',
    cursor?: 'pointer' | 'unset',
    target?: 'self' | 'blank' | 'top' | 'parent' | 'unset',
    children: React.ReactNode,
}

/**
 * ### CSS component
 * - The Link component is used to urls actions.
 * The Link component accepts the following props:
 * 
 * 
 * - `font` : Specifies the font-family
 * - `size` : Specifies the font size
 * - `weight` : Specifies the font-weight
 * - `color` : Specifies the color
 * - `style` : Specifies if the Link should be styled
 * - `transform` : Specifies if the content is formated
 * - `children`: The content to be displayed inside the Link.
 */
export const Link = (props: ILink) => {
    const {
        font,
        size,
        weight,
        color,
        style,
        transform,
        cursor,
        target,
        children
    } = props;

    const classFont = (font && font !== 'unset') ? ` f-${font}-text` : '';
    const classSize = (size && size !== 'unset') ? ` f-size-${size}` : '';
    const classWeight = (weight && weight !== 'unset') ? ` f-weight-${weight}` : '';
    const classColor = (color && color !== 'unset') ? ` f-color-${color}` : '';
    const classStyle = (style && style !== 'unset') ? ` f-style-${style}` : '';
    const classTransform = (transform && transform !== 'unset') ? ` f-transform-${transform}` : '';
    const classCursor = (cursor && cursor !== 'unset') ? ` f-style-${cursor}` : '';
    const htmlTarget = (target && target !== 'unset') ? `_${target}` : '';

    return (
        <a className={classFont + classSize + classWeight + classColor + classStyle + classTransform + classCursor} href="http://localhost:6006" target={htmlTarget} >
            {children || 'Lorem Ipsum Factum'}
        </a>
    );
};
