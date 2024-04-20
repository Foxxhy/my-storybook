interface IDisplay {
    type: 'inline' | 'block' | 'inline-block' | 'flex' | 'unset';
    wrap?: 'wrap' | 'nowrap' | 'unset',
    direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse' | 'unset',
    align?: 'start' | 'center' | 'end' | 'unset',
    justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'unset'
    gap?: 0 | 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20 | 22 | 24 | 26 | 28 | 30 | 32 | 34 | 36 | 38 | 40 | 42 | 44 | 46 | 48 | 50;
}

/**
 * - Typography
 * @param props: ITypography
 * @returns - JSX
 */
export const Display = ({
    type= 'unset',
    wrap,
    direction,
    align,
    justify,
    gap
}: IDisplay) => {

    const classDisplay = (type && type !== 'unset') ? ` f-${type}` :  ``;
    const classWrap = (wrap && wrap !== 'unset') ? ` f-flex-${wrap}` :  ``;
    const classDirection = (direction && direction !== 'unset') ? ` f-flex- ${direction}` :  ``;
    const classAlign = (align && align !== 'unset') ? ` f-align-${align}` :  ``;
    const classJustify = (justify && justify !== 'unset') ? ` f-justify-${justify}` :  ``;
    const classGap = (gap) ? ` f-gap-${gap}` :  ``;

    return (
        <section className={classDisplay + classWrap + classDirection + classAlign + classJustify + classGap} >
            <div className="f-width-44 f-height-40 f-radius-10 f-background-blue" ></div>
            <p className="f-title-main" >Lorem Ipsum Factum</p>
            <div className="f-width-full f-height-40 f-radius-10 f-background-info" ></div>
        </section>
    );
};
