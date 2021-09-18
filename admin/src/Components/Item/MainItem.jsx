// import React, { useState, useEffect } from 'react'
import Item from './ItemDB'
import '../../Style/Main.css'

function MainItem(props) {
    const { openModal, openDelete, setItemData, fetchData, openAdd } = props

    return (
        <div className="main">
            <h1>-List Item Team 1 Market-</h1>
            <button type="button" class="btn btn-primary" onClick={() => openAdd(true)}>Add Item</button>
            <table className="bookTable">
                <thead>
                    <th scope="col">Nama</th>
                    <th scope="col">Harga</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Edit Item</th>
                    <th scope="col">Delete Item</th>

                </thead>
                {
                    fetchData.map((item, key) => {
                        console.log(item);
                        return (
                            <Item
                                key={item.id}
                                setItemData={setItemData}
                                itemId={item.id}
                                nama={item.nama}
                                harga={item.harga}
                                stock={item.stock}
                                openDelete={openDelete}
                                openModal={openModal} />
                        )
                    })
                }

            </table>
        </div>
    )
}

export default MainItem