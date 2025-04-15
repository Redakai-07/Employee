import { Table, Tag } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Common.css';
import { getEmployee } from '../../API/Emp';

const Common = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const fetchEmployees = useCallback(async () => {
    const response = await getEmployee(navigate);
    if (response) {
      const employeeData = response.map((emp, index) => ({
        key: index.toString(),
        id: emp.id,
        name: `${emp.fName} ${emp.lName}`,
        email: emp.email,
        altEmail: emp.altEmail || 'N/A',
        mobile: emp.mobile,
        altMobile: emp.altMobile || 'N/A',
        isVerified: emp.isVerified,
        isSubmitted: emp.isSubmitted,
      }));
      setData(employeeData);
    }
  }, [navigate]);

  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Alternate Email', dataIndex: 'altEmail', key: 'altEmail' },
    { title: 'Mobile', dataIndex: 'mobile', key: 'mobile' },
    { title: 'Alternate Mobile', dataIndex: 'altMobile', key: 'altMobile' },
    {
      title: 'Status',
      key: 'status',
      render: (_, record) => (
        <>
          <Tag color={record.isVerified ? 'green' : 'volcano'}>
            {record.isVerified ? 'Verified' : 'Not Verified'}
          </Tag>
          <Tag color={record.isSubmitted ? 'blue' : 'red'}>
            {record.isSubmitted ? 'Submitted' : 'Not Submitted'}
          </Tag>
        </>
      ),
    },
  ];

  return (
    <div className='common-body'>
      <div className='heading'>Employee Details</div>
      <div className='emp-table'>
        <Table pagination={false} columns={columns} dataSource={data} size='middle' />
      </div>
    </div>
  );
};

export default Common;
