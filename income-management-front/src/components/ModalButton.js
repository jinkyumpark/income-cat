import React from 'react'

import { Button } from 'react-bootstrap'

import classnames from 'classnames'

const ModalButton = ({ isModalOpen, setIsModalOpen, label, labelClose }) => {
    const openCloseModal = () => {
        setIsModalOpen(!isModalOpen)
    }

  return (
    <Button 
        onClick={openCloseModal}
        className={classnames(
            'col-lg-1 col-md-2 col-sm-3',
            isModalOpen && "btn-danger",
            !isModalOpen && "btn-success"
        )}>
            { isModalOpen ? labelClose : label }        
    </Button>
  )
}

export default ModalButton