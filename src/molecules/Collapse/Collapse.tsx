import { useState } from 'react';

interface ICollapse {
    open: boolean,
}

/**
 * ### CSS composable
 * - The Collapse component is an amalgam of multiples class CSS
 * 
 * - The classes f-collapse-header, f-collapse-body-show and f-collapse-body-hid are the core of the composable.
 * It's possible to customize the composable with any classes CSS
 * 
 * - `open` : Specifies the state of the dropdown at the loading
 */
export const Collapse = (props: ICollapse) => {
    const { open } = props;
    const [collapse, setCollapse] = useState(open);

    return (
        <div className='f-card-dot-dark f-shadow-m f-radius-10'>
            <button className="f-collapse-header f-text f-weight-bold" onClick={() => setCollapse(!collapse)}>Click here to display</button>
            <div className={collapse ? 'f-collapse-body-show' : 'f-collapse-body-hide'} >
                Lorem Ipsum factum...
            </div>
        </div>
    )
}
