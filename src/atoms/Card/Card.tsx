interface ICard {
    type: 'default' | 'dot';
    color: 'success' | 'info' | 'warning' | 'danger' | 'dark' | 'gray' | 'light';
    radius: '2' | '4' | '6' | '8' | '10' | '12' | '14' | '16' | '18' | '20' | '22' | '24' | '26' | '28' | '30' | '32' | '34' | '36' | '38' | '40' | '42' | '44' | '46' | '48' | '50' | 'unset';
    shadow?: 's' | 'm' | 'l' | 'unset';
    children: React.ReactNode;
}

/**
 * The Card component is used to display block of information. It can be customized to represent different types of cards.
 * The Card component accepts the following props:
 * 
 * - `type`: Specifies the type of the card.
 * - `color`: Specifies the color of the border
 * - `radius` : Specifies the border radius of the card
 * - `shadow` : Specifies the box-shadow of the card
 * - `children`: The content to be displayed inside the Cards.
 */
export const Card = ({
    type = 'default',
    color = 'success',
    radius = '8',
    shadow = undefined,
    children
}: ICard) => {

    const classButton = `f-card${type === 'default' ? '' : `-${type}`}-${color || ''}`;
    const classRadius = (radius && radius !== 'unset') ? ` f-radius-${radius}` : '';
    const classShadow = (shadow && shadow !== 'unset') ? ` f-shadow-${shadow}` : '';

    return (
        <div className={classButton + classRadius + classShadow}>
            {children || 'Lorem Ipsum Factum'}
        </div>
    );
};
