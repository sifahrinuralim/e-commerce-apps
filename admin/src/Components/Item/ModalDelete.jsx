import React from "react"
import axios from 'axios'
import '../../Style/Modal.css'

function ModalDelete(props) {

   const {
      itemId,
      openModal,
      setRender,
      render
   } = props

   const deleting = (e) => {
      e.preventDefault()

      axios({
         method: "DELETE",
         url: `http://localhost:8000/delete/item/${itemId}`,
      })
         .then((response) => {
            console.log("response: ", response)
            openModal(false)
            setRender(!render)
         })
         .catch((err) => {
            console.log("error: ", err)
         })

   }

   return (
      <div className="modalContainer">
         <div className="modalField">
            <h2 className="modalTitle">Delete this item?</h2>
            <form className="modalForm" onSubmit={(e) => deleting(e)}>
               <button type="button" class="btn btn-primary" onClick={() => openModal(false)} >Cancel</button>
               <button type="submit" class="btn btn-danger" >Delete</button>
            </form>
         </div>
      </div>
   )
}

export default ModalDelete