import React from 'react'
import { Modal, Button } from "antd"

function modalError({handleOk, handleCancel, modalShow}) {
    return (
        <div>
            <Modal
          title="Error"
          okType= "danger"
          visible={modalShow}
          onOk={handleOk}
          cancelButtonProps="true"
          onCancel = {handleCancel} 
        >
          <p>Usuario y/o contraseña no encontrado/a.</p>
         
        </Modal>
        </div>
    )
}

export default modalError
