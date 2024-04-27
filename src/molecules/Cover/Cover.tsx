interface ICover {
    type?: 'shadow' | 'vague' | 'unset',
}

/**
 * ### CSS composable
 * - The Cover component is an amalgam of multiples class CSS
 * 
 * - The classes f-cover-shadow and f-cover-vague are the core of the composable.
 * It's possible to customize the composable with any classes CSS
 * 
 * - `type` : Specifies the effect
 */
export const Cover = (props: ICover) => {
    const { type } = props;
    const classType = type !== 'unset' ? `f-cover-${type}` : '';

    return (
        <div style={{ height: '300px'}} >
            <div className="f-width-44 f-height-40 f-radius-10 f-background-blue" ></div>
            <p className="f-title-main" >Lorem Ipsum Factum</p>
            <div className="f-width-full f-height-40 f-radius-10 f-background-info" ></div>
            <div className={classType} ></div>
        </div>
    )
}
