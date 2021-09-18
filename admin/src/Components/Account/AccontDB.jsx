import React, { useEffect } from 'react'

function Account(props) {

    const {
        accountId,
        name,
        email,
        password,
        status_user,
        openModal,
        openDelete,
        setAccountData,
    } = props

    const edit = () => {
        setAccountData({
            accountId,
            name,
            email,
            password,
            status_user,
        })
        openModal(true)
    }

    const deleting = () => {
        setAccountData({
            accountId
        })
        openDelete(true)
    }

    return (
        <tbody>
            <td>{name}</td>
            <td>{email}</td>
            <td>{password}</td>
            <td>{status_user}</td>
            <td><button type="button" class="btn btn-success"  onClick={() => edit()}>Edit</button></td>
            <td><button type="button" class="btn btn-danger" onClick={() => deleting()}>Delete</button></td>
        </tbody>
    )
}

export default Account