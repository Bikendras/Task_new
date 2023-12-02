import React from 'react'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

export default function TableDataShow(props) {
  console.log(props);
  return (
        <div>
            <table border='1'>
              <tr>
                <td>{1}</td>
                <td>{props.name}</td>
                <td>{props.email}</td>
                <tr>
                  <td><button onClick={() => props.handleRemove()} ><DeleteOutlined /></button></td>
                  <td><button onClick={() => props.handleEdit()}><EditOutlined /></button></td>
                </tr>
              </tr>
            </table>
        </div>
  )
}
