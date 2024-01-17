import './App.css'
import { useState } from 'react'
import { nanoid } from 'nanoid'

function App() {

  // const [item, setItem] = useState('')
  // const [quantity, setQuantity] = useState('')
  // const [rate, setRate] = useState('')
  // const [amount, setAmount] = useState('')
  const [data, setData] = useState([])
  const [addFormData, setAddFormData] = useState({
    desc: '',
    qty: '',
    rate: '',
    amount: ''
  })

  const handleAddFormChange = (event) => {
    event.preventDefault()

    const fieldName = event.target.getAttribute('name')
    const fieldValue = event.target.value

    const newFormData = { ...addFormData }
    newFormData[fieldName] = fieldValue

    setAddFormData(newFormData)
  }

  const handleAddFormSubmit = (event) => {
    event.preventDefault()

    const newData = {
      id: nanoid(),
      desc: addFormData.desc,
      qty: addFormData.qty,
      rate: addFormData.rate,
      amount: addFormData.amount
    }
    const newDataArr = [...data, newData]
    document.getElementById('desc').value = ''
    document.getElementById('qty').value = ''
    document.getElementById('rate').value = ''
    document.getElementById('amount').value = ''
    setData(newDataArr)
    
  }
  

  return (
    <>
      <div className="container">
        <table className='table-container'>
          <thead>
            <tr>
              <th>Item Description</th>
              <th>Qty</th>
              <th>Rate</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => {
              return (
                <tr key={idx}>
                  <td>{item.desc}</td>
                  <td>{item.qty}</td>
                  <td>{item.rate}</td>
                  <td>{item.amount}</td>
                </tr>
              )
            })}
            <tr>
              <td><input type="text" name="desc" onChange={handleAddFormChange} id="desc" /></td>
              <td><input type="text" name="qty" onChange={handleAddFormChange} id="qty" /></td>
              <td><input type="text" name="rate" onChange={handleAddFormChange} id="rate" /></td>
              <td><input type="text" name="amount" onChange={handleAddFormChange} id="amount"  /></td>
            </tr>
          </tbody>


        </table>
        <div>
          <div className="btn" onClick={handleAddFormSubmit}>
            <h5 className='plus'>+
            </h5>
            <h5>Add Line Item</h5>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default App
