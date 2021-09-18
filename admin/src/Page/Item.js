import React, { useState, useEffect } from 'react'
import axios from 'axios'

import MainItem from '../Components/Item/MainItem'
import Heading from '../Components/Heading/Heading'
import Footer from '../Components/Footer/Footer'

import ModalAdd from '../Components/Item/ModalAdd'
import ModalEdit from '../Components/Item/ModalEdit'
import ModalDelete from '../Components/Item/ModalDelete'

function Item() {

  const [toggleAdd, setToggleAdd] = useState(false)
  const [toggleEdit, setToggleEdit] = useState(false)
  const [toggleDelete, setToggleDelete] = useState(false)

  const [itemData, setItemData] = useState({})
  const [fetchData, setFetchData] = useState([])
  const [render, setRender] = useState(false)

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:8000/item",
    })
      .then((response) => {
        console.log("Hasil Fetch: ", response.data.data);
        setFetchData(response.data.data)
      })
      .catch((err) => {
        console.log("Error: ", err);
      })
  }, [render])

  return (
    <div>
      {
        toggleAdd ?
          <ModalAdd
            setRender={setRender}
            render={render}
            openModal={setToggleAdd}
          />
          :
          null
      }

      {
        toggleEdit ?
          <ModalEdit
            setRender={setRender}
            render={render}
            openModal={setToggleEdit}
            itemId={itemData.itemId}
            nama={itemData.nama}
            harga={itemData.harga}
            stock={itemData.stock}
          />
          :
          null
      }

      {
        toggleDelete ?
          <ModalDelete
            setRender={setRender}
            render={render}
            openModal={setToggleDelete}
            itemId={itemData.itemId}
          />
          :
          null
      }

      <Heading />
      <MainItem openModal={setToggleEdit} openDelete={setToggleDelete} openAdd={setToggleAdd} fetchData={fetchData} setItemData={setItemData} />
      <Footer />
    </div>
  )


}

export default Item;