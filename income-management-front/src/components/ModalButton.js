import React from 'react'

import { Button } from 'react-bootstrap'

import classnames from 'classnames'

const ModalButton = ({ isModalOpen, setIsModalOpen, label, labelClose, css }) => {
    const openCloseModal = () => {
        setIsModalOpen(!isModalOpen)
    }

  return (
    <Button 
        onClick={openCloseModal}
        className={classnames(
            isModalOpen && "btn-danger",
            !isModalOpen && "btn-success",
        )}>
            { isModalOpen ? labelClose : label }        
    </Button>
  )
}

export default ModalButton