import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter , Form} from 'reactstrap';

const ModalInputs = (props) => {
  const {
    title,
    btntitle
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  console.log(props.children)
  return (

    <>
      <Button color="danger" onClick={toggle}>{btntitle}</Button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>
          <Form>
            {props.children}
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>ذخیره</Button>{' '}
          <Button color="secondary" onClick={toggle}>انصراف</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default ModalInputs;