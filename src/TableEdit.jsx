import React, { useState } from "react";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import TableDataShow from "./TableDataShow";

export default function TableEdit() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(null);
  const handleSubmit = () => {
    if (edit !== null) {
      // Append new data to the data array
      const newData = [...data];
      newData[edit] = { name, email };
      setData(newData);
      setEdit(null); // reset edit mode;
      setName("");
      setEmail("");
    } else {
      // save Data in Table... First time...
      setData([...data, { name, email }]);
      setName("");
      setEmail("");
    }
  };
  const handleRemove = (i) => {
    console.log(i);
    const NewData = [...data];
    NewData.splice(i, 1);
    setData(NewData);
  }
  const handleEdit = (i) => {
    console.log(i);
    setEdit(i);
    setName(data[i].name);
    setEmail(data[i].email);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Table Edit</h1>
      <div>
        <input
          type="text" style={{ margin: 10 }}
          value={name} // Use 'value' instead of 'onChange' to set the input value
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
        />
        <input
          type="email"
          value={email} // Use 'value' instead of 'onChange' to set the input value
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
        />
      </div>
      <div>
        {name.length > 0 && email.length > 0 ? <button style={{ margin: 10, padding: "5px 15px", cursor: "pointer" }} onClick={() => handleSubmit()}>Save</button> : <button style={{ margin: 10, padding: "5px 15px", cursor: "not-allowed" }}>Save</button>}
      </div>
      {data && data.map((a, i) => {
        return (
          <div key={i} style={{textAlign:"center"}}>
            <table border='1'>
              <tr>
                <td>{i + 1}</td>
                <td>{a.name}</td>
                <td>{a.email}</td>
                <tr>
                  <td><button onClick={() => handleRemove(i)} ><DeleteOutlined /></button></td>
                  <td><button onClick={() => handleEdit(i)}><EditOutlined /></button></td>
                </tr>
              </tr>
            </table>
          </div>
        )
      }
      )
      }
      {/* {show?<TableDataShow name={name} email={email} handleRemove={handleRemove} handleEdit={handleEdit} />:''} */}
    </div>
  );
}






