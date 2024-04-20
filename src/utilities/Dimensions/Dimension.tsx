interface IDimension {
    width: 0 | 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20 | 22 | 24 | 26 | 28 | 30 | 32 | 34 | 36 | 38 | 40 | 42 | 44 | 46 | 48 | 50;
    height: 0 | 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20 | 22 | 24 | 26 | 28 | 30 | 32 | 34 | 36 | 38 | 40 | 42 | 44 | 46 | 48 | 50;
    fullWidth: boolean;
    fullHeight: boolean;
}

/**
 * - Typography
 * @param props: ITypography
 * @returns - JSX
 */
export const Dimension = ({
    width = 30,
    height = 30,
    fullWidth = false,
    fullHeight = false,
}: IDimension) => {

    const classWidth = (width > -1 && !fullWidth) ? `f-width-${width} ` : '';
    const classHeight = (height > -1 && !fullHeight) ? `f-height-${height} ` : '';
    const classFullWidth = fullWidth ? 'f-width-full ' : '';
    const classFull = fullHeight ? 'f-height-full ' : '';

    return (
        <section style={{ height: '200px'}} >
            <div className={`${classWidth + classHeight + classFullWidth + classFull} f-background-info`}  >
            </div>
        </section>
    );
};
