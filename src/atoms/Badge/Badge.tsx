interface IBadge {
    type: 'success' | 'info' | 'warning' | 'danger' | 'primary' | 'secondary'| 'dark';
    weight?: 'thin' | '100' | '200' | '300' | '400' | '500 ' | 'normal' | '600' | 'bold' | '700' | '800' | 'bolder' | '900' | 'unset';
    full?: boolean,
    children: React.ReactNode;
}

/**
 * - Typography
 * @param props: ITypography
 * @returns - JSX
 */
export const Badge = ({
    type = 'success',
    weight = undefined,
    full = false,
    children
} : IBadge) => {

    const classButton = `f-badge-${type || 'success'}`;
    const classWeight = (weight && weight !== 'unset') ? ` f-weight-${weight}` : '';
    const classFull = full ? ` f-width-full` : '';

    return (
        <span className={classButton + classWeight + classFull}>
            {children || 'Lorem Ipsum Factum'}
        </span>
    );
};
