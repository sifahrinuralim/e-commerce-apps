import React from "react"
import axios from 'axios'
import '../../Style/Modal.css'

function ModalEdit(props) {

    const {
        accountId,
        name,
        email,
        password,
        status_user,
        openModal,
        setRender,
        render
    } = props

    const update = (e) => {
        e.preventDefault()
        let target = e.nativeEvent.target
        let inputName = target.name.value
        let inputEmail = target.email.value
        let inputPassword = target.password.value
        let inputStatusUser = target.status_user.value

        axios({
            method: "PUT",
            url: `http://localhost:8000/update/account/${accountId}`,
            data: {
                name: inputName,
                email: inputEmail,
                password: inputPassword,
                status_user: inputStatusUser,
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
                <h2 className="modalTitle">Edit Account</h2>
                <form className="modalForm" onSubmit={(e) => update(e)}>

                    <label for="exampleFormControlInput1">Nama</label><br />
                    <input class="form-control" id="name" required={true} type="text" defaultValue={name} /><br />

                    <label for="exampleFormControlInput2" >Email</label><br />
                    <input class="form-control" id="email" required={true} type="text" defaultValue={email} /><br />

                    <label for="exampleFormControlInput3">Password</label><br />
                    <input class="form-control" id="password" required={true} type="password" defaultValue={password} /><br />

                    <label for="exampleFormControlInput4">Status User</label><br />
                    <input class="form-control" id="status_user" required={true} type="text" defaultValue={status_user} /><br />


                    <button type="button"  class="btn btn-danger" onClick={() => openModal(false)} >Cancel</button>
                    <button type="submit"  class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ModalEdit