import React from "react"
import axios from 'axios'
import '../../Style/Modal.css'

function ModalDelete(props) {

    const {
        accountId,
        name,
        email,
        password,
        status_user,
        openDelete,
        setRender,
        render
    } = props

    const deleting = (e) => {
        e.preventDefault()

        axios({
            method: "DELETE",
            url: `http://localhost:8000/delete/account/${accountId}`,
        })
            .then((response) => {
                console.log("response: ", response)
                openDelete(false)
                setRender(!render)
            })
            .catch((err) => {
                console.log("error ", err)
            })
    }

    return (
        <div className="modalContainer">
            <div className="modalField">
                <h2 className="modalTitle">Delete this account?</h2>
                <form className="modalForm" onSubmit={(e) => deleting(e)}>
                    <button class="btn btn-primary" type="button" onClick={() => openDelete(false)} >Cancel</button>
                    <button class="btn btn-danger" type="submit" >Delete</button>
                </form>
            </div>
        </div>
    )
}

export default ModalDelete