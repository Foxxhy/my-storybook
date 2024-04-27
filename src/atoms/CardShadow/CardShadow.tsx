interface ICardShadow {
    type: 's' | 'm' | 'l' | 'unset';
    children: React.ReactNode;
}

/**
 * ### CSS component
 * - The CardShadow component is used to display block of information with a box-shadow.
 * The Card component accepts the following props:
 * 
 * - `shadow` : Specifies the box-shadow of the card
 * - `children`: The content to be displayed inside the Cards.
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
