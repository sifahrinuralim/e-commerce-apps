import React, { useState, useEffect } from 'react'
import axios from 'axios'

import MainAccount from '../Components/Account/MainAccount'
import Heading from '../Components/Heading/Heading'
import Footer from '../Components/Footer/Footer'

import ModalEdit from '../Components/Account/ModalEdit'
import ModalDelete from '../Components/Account/ModalDelete'

function Account() {

  const [toggleEdit, setToggleEdit] = useState(false)
  const [toggleDelete, setToggleDelete] = useState(false)

  const [accountData, setAccountData] = useState({})
  const [fetchData, setFetchData] = useState([])
  const [render, setRender] = useState(false)

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:8000/account",
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
        toggleEdit ?
          <ModalEdit
            setRender={setRender}
            render={render}
            openModal={setToggleEdit}
            accountId={accountData.accountId}
            name={accountData.name}
            email={accountData.email}
            password={accountData.password}
            status_user={accountData.status_user}
          />
          :
          null
      }

      {
        toggleDelete ?
          <ModalDelete
            setRender={setRender}
            render={render}
            openDelete={setToggleDelete}
            accountId={accountData.accountId}
          />
          :
          null
      }

      <Heading />
      <MainAccount openModal={setToggleEdit} openDelete={setToggleDelete} fetchData={fetchData} setAccountData={setAccountData} />
      <Footer />
    </div>
  )


}

export default Account;