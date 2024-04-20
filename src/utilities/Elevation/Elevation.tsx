interface IElevation {
    type: 'default' | 'cover' | 'side' | 'modal' | 'dialog' | 'toast',
}

/**
 * - Typography
 * @param props: ITypography
 * @returns - JSX
 */
export const Elevation = ({
    type = 'default',
}: IElevation) => {

    const classElevation = `f-elevation-${type}`

    return (
        <section style={{ width: '200px', height: '200px' }} >
            <div className="f-background-warning f-width-44 f-height-44 f-radius-10 f-absolute f-left-0 f-top-20 f-elevation-side"  > </div>
            <div className={`f-background-info f-width-44 f-height-40 f-radius-10 f-absolute ${classElevation}`}  > </div>
        </section>
    );
};
