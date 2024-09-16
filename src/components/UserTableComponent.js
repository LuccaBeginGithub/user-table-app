import users from "../models/user";
import { Table,Modal } from "antd";
import React, { useState } from 'react'

function UserTableComponent() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(users.at(0));
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          sorter: (a, b) => a.name.localeCompare(b.name),
          sortDirections: ['descend','ascend'],
  
        },
        {
          title: 'Email',
          dataIndex: 'email',
          
        },
        {
            title: 'Age',
            dataIndex: 'age',
            
          },
      ];
      const handleRowClick = (record) =>{
        setSelectedUser(record)
        setIsModalOpen(true);
      }
      const handleOk = () => {
        setIsModalOpen(false);
      };
      const handleCancel = () => {
        setIsModalOpen(false);
      };
  return (
    <section style={{margin:'1.5rem', borderRadius:'1rem'}}>
      <Table dataSource={users} 
      columns={columns}
      showSorterTooltip={{
        target: 'sorter-icon',
      }}
      onRow={(record) => ({
          onClick: () => handleRowClick(record),
          className: 'clickable-row',
      } )}/>
      <Modal title={'Details of ' + selectedUser.name} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
        <p><span style={{fontStyle: 'italic' }}>Name: </span>{selectedUser.name}</p>
        <p><span style={{fontStyle: 'italic' }}>Email: </span>{selectedUser.email}</p>
        <p><span style={{fontStyle: 'italic' }}>Age: </span>{selectedUser.age}</p>
        <p><span style={{fontStyle: 'italic' }}>Address: </span>{selectedUser.address}</p>
      </Modal>
    </section>
  )
}

export default UserTableComponent