interface ILink {
    font?: 'primary' | 'secondary' | 'unset',
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'unset'
    weight?: 'thin' | '100' | '200' | '300' | '400' | '500 ' | 'normal' | '600' | 'bold' | '700' | '800' | 'bolder' | '900' | 'unset',
    color?: 'success' | 'info' | 'warning' | 'danger' | 'primary' | 'secondary' | 'unset',
    style?: 'underline' | 'italic' | 'through' | 'unset',
    transform?: 'capitalize' | 'uppercase' | 'lowercase' | 'unset',
    cursor?: 'pointer' | 'unset',
    children: React.ReactNode,
}

/**
 * Atom - Typography
 * @param props: ITypography
 * @returns - JSX
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
        <a className={classFont + classSize + classWeight + classColor + classStyle + classTransform + classCursor} href="http://localhost:6006">
            {children || 'Lorem Ipsum Factum'}
        </a>
    );
};
