interface ITypography {
    type?: 'text' | 'label' | 'unset',
    weight?: 'thin' | '100' | '200' | '300' | '400' | '500 ' | 'normal' | '600' | 'bold' | '700' | '800' | 'bolder' | '900' | 'unset',
    style?: 'underline' | 'italic' | 'through' | 'unset',
    transform?: 'capitalize' | 'uppercase' | 'lowercase' | 'unset'
    children: React.ReactNode;
}

/**
 * Atom - Typography
 * @param props: ITypography
 * @returns - JSX
 */
export const Typography = (props: ITypography) => {
    const {
        type,
        weight,
        style,
        transform,
        children
    } = props;

    const classType = type !== 'label' ? 'f-text' : 'f-text-label';
    const classWeight = (weight && weight !== 'unset') ? ` f-weight-${weight}` : '';
    const classStyle = (style && style !== 'unset') ? ` f-style-${style}` : '';
    const classTransform = (transform && transform !== 'unset') ? ` f-transform-${transform}` : '';

    return (
        <p className={classType  + classWeight + classStyle + classTransform}>
            {children || 'Lorem Ipsum Factum'}
        </p>
    );
};
