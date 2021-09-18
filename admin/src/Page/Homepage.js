import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Heading from '../Components/Heading/Heading'

function Homepage() {
  const [render, setRender] = useState(false)

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:8000/item",
    })
      .then((response) => {
        console.log("Hasil Fetch: ", response.data.data);
       
      })
      .catch((err) => {
        console.log("Error: ", err);
      })
  }, [render])

  return (
    <div>
      <Heading />
    </div>
  )


}

export default Homepage;