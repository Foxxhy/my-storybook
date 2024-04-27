interface ITitle {
    type: 'title-main' | 'title-section' | 'title-sub ' | 'subtitle-main' | 'subtitle-section' | 'subtitle-sub',
    style?: 'underline' | 'italic' | 'through' | 'unset',
    transform?: 'capitalize' | 'uppercase' | 'lowercase' | 'unset'
    children: React.ReactNode;
}

/**
 * ### CSS component
 * - The Title component is used to urls actions.
 * The Title component accepts the following props:
 * 
 * 
 * - `font` : Specifies the type of Title
 * - `style` : Specifies if the Title should be styled
 * - `transform` : Specifies if the content is formated
 * - `children`: The content to be displayed inside the Title.
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
