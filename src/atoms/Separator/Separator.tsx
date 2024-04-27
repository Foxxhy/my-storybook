interface ISeparator {
    type: 'vertical' | 'horizontal';
}

/**
 * ### CSS component
 * - The Separator component is used to display a line to seperate information.
 * The Separator component accepts the following props:
 * 
 * - `type`: Specifies the direction of the separator
 */
export const Separator = ({
    type,
}: ISeparator) => {

    const classCardShadow = `f-separator-${type}`;

    return (
        <section style={{ height: '200px'}} >
            <div className={classCardShadow}> </div>
        </section>
    );
};
