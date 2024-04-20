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
        <section>
            <div className={classCardShadow}> </div>
        </section>
    );
};
