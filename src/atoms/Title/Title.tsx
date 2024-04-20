interface ITitle {
    type: 'title-main' | 'title-section' | 'title-sub ' | 'subtitle-main' | 'subtitle-section' | 'subtitle-sub',
    style?: 'underline' | 'italic' | 'through' | 'unset',
    transform?: 'capitalize' | 'uppercase' | 'lowercase' | 'unset'
    children: React.ReactNode;
}

/**
 * Atom - Typography
 * @param props: ITypography
 * @returns - JSX
 */
export const Title = (props: ITitle) => {
    const {
        type,
        style,
        transform,
        children
    } = props;

    const classType =  `f-${type}`;
    const classStyle = (style && style !== 'unset') ? ` f-style-${style}` : '';
    const classTransform = (transform && transform !== 'unset') ? ` f-transform-${transform}` : '';

    return (
        <p className={classType + classStyle + classTransform}>
            {children || 'Lorem Ipsum Factum'}
        </p>
    );
};
