// import React, { useEffect } from 'react'

function Item(props) {

    const {
        itemId,
        nama,
        harga,
        stock,
        openModal,
        openDelete,
        setItemData
    } = props

    const edit = () => {
        setItemData({
            nama,
            harga,
            stock,
            itemId,
        })
        openModal(true)
    }

    const deleting = () => {
        setItemData({
            itemId
        })
        openDelete(true)
    }

    return (
        <tbody class>
            <td>{nama}</td>
            <td>{harga}</td>
            <td>{stock}</td>
            <td><button type="button" class="btn btn-success" onClick={() => edit()}>Edit</button></td>
            <td><button type="button" class="btn btn-danger" onClick={() => deleting()}>Delete</button></td>
        </tbody>
    )
}

export default Item