import React from "react"
import axios from 'axios'
import '../../Style/Modal.css'

function ModalEdit(props) {

    const {
        itemId,
        nama,
        harga,
        stock,
        openModal,
        setRender,
        render
    } = props

    const update = (e) => {
        e.preventDefault()
        let target = e.nativeEvent.target
        let inputNama = target.nama.value
        let inputHarga = target.harga.value
        let inputStock = target.stock.value

        axios({
            method: "PUT",
            url: `http://localhost:8000/update/item/${itemId}`,
            data: {
                nama: inputNama,
                harga: inputHarga,
                stock: inputStock,
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
                <h2 className="modalTitle">Edit Book</h2>
                <form class="form-group" onSubmit={(e) => update(e)}>
                    {/* <label htmlFor="thumbnail">Thumbnail</label><br />
                    <input className="modalInput" id="thumbnail" placeholder="type an image url here" type="text" defaultValue={thumbnail} /><br /> */}
                    
                    <label for="exampleFormControlInput1">Nama Item</label><br />
                    <input class="form-control" id="nama" required={true} type="text" defaultValue={nama} /><br />

                    <label for="exampleFormControlInput2" >Harga</label><br />
                    <input class="form-control" id="harga" required={true} type="text" defaultValue={harga} /><br />

                    <label for="exampleFormControlInput3">Stock</label><br />
                    <input class="form-control" id="stock" required={true} type="number" defaultValue={stock} /><br />

                    <button type="button"  class="btn btn-danger" onClick={() => openModal(false)} >Cancel</button>
                    <button type="submit"  class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ModalEdit