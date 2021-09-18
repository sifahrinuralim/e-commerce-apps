import React from "react"
import axios from 'axios'
import '../../Style/Modal.css'

function ModalAdd(props) {

   const {
      openModal,
      setRender,
      render,
   } = props

   const add = (e) => {
      e.preventDefault()
      let target = e.nativeEvent.target
      //   let inputThumbnail = target.thumbnail.value
      let inputNama = target.nama.value
      let inputHarga = target.harga.value
      let inputStock = target.stock.value

      axios({
         method: "POST",
         url: `http://localhost:8000/item/add_item`,
         data: {
            // thumbnail: inputThumbnail,
            nama: inputNama,
            harga: inputHarga,
            stock: inputStock
         }
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
            <h2 className="modalTitle">Add Item</h2>
            <form className="modalForm" onSubmit={(e) => add(e)}>
               {/* <label htmlFor="thumbnail">Thumbnail</label><br/>
               <input className="modalInput" id="thumbnail" placeholder="type an image url here" type="text"/><br/> */}
               <label for="exampleFormControlInput1">Nama Item</label><br />
               <input class="form-control" id="nama" required={true} type="text" /><br />
               <label for="exampleFormControlInput2" >Harga Item</label><br />
               <input class="form-control" id="harga" required={true} type="text" /><br />
               <label for="exampleFormControlInput3">Stock</label><br />
               <input class="form-control" id="stock" required={true} type="number" /><br />
               <button type="button" class="btn btn-danger" onClick={() => openModal(false)} >Cancel</button>
               <button type="button" class="btn btn-primary" type="submit" >Submit</button>
            </form>
         </div>
      </div>
   )
}

export default ModalAdd