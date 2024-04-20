interface ICardShadow {
    type: 's' | 'm' | 'l' | 'unset';
    children: React.ReactNode;
}

/**
 * - CardShadow
 * @param props: ITypography
 * @returns - JSX
 */
export const CardShadow = ({
    type = 's',
    children
}: ICardShadow) => {

    const classCardShadow = `f-card-shadow-${type}`;

    return (
        <div className={classCardShadow}>
            {children || 'Lorem Ipsum Factum'}
        </div>
    );
};
