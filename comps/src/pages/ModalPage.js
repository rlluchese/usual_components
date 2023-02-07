import Modal from '../components/Modal';
import { useState } from 'react';
import Button from '../components/Button';

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = <div>
        <Button primary onClick={ handleClose }>Ok</Button>
    </div>;

    const modal = <Modal onClose={ handleClose } actionBar={ actionBar }>
        <p>Here is a modal for you to test. Ok?</p>
    </Modal>;

    return (
        <div className='relative'>
            <Button primary onClick={ handleClick }>Open Modal</Button>
            { showModal && modal }
        </div>
    );
}

export default ModalPage;