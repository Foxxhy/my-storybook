import { useState } from 'react';

interface IModal {
    background?: 'shadow' | 'vague' | 'unset',
}

/**
 * ### CSS composable
 * - The Modal component is an amalgam of multiples class CSS
 * 
 * - The classes f-modal-show and f-modal-hide are the core of the composable.
 * It's possible to customize the composable with any classes CSS
 * 
 * - `background` : Specifies the effect in background when modal is open
 */
export const Modal = (props: IModal) => {
    const { background } = props;
    const [modal, setModal] = useState(false);

    const classBackground = background !== 'unset' ? `f-cover-${background}` : '';

    return (
        <div style={{ height: '600px'}} >
            <button className="f-button-outline-info" onClick={() => setModal(true)} >Open modal</button>
            <aside className={modal ? 'f-modal-show' : 'f-modal-hide'} >
                <section className='f-flex f-flex-column f-justify-between f-height-full' >
                    <p className='f-secondary-text f-gap-16' >
                        Lorem Ipsum Factum
                    </p>
                    <button className="f-button-danger" onClick={() => setModal(false)} >fermer</button>
                </section>
            </aside>
            <div className={(modal) ? classBackground : ''} ></div>
        </div>
    )
}
