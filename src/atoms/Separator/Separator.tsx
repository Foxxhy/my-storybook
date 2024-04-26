interface ISeparator {
    type: 'vertical' | 'horizontal';
}

/**
 * - CardShadow
 * @param props: ITypography
 * @returns - JSX
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
