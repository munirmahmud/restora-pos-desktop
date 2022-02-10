import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import { Button, Image, message, Modal, Space, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import defaultImage from '../../../../assets/default.jpg';
import { getDataFromDatabase } from './../../../helpers';
import './AllCategoryList.style.scss';

const { confirm } = Modal;

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {},
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
};

const AllCategoryList = () => {
  // Send request to the main
  window.get_category.send('sendResponseForCategory', { status: true });
  window.parent_category.send('parent_category', { status: true });

  const [checkStrictly, setCheckStrictly] = useState(false);
  const [categories, setCategories] = useState(null);
  const [parentCategory, setParentCategory] = useState(null);

  useEffect(() => {
    getDataFromDatabase('sendCategoryData', window.get_category)
      .then((allCategories) => {
        const categoryLists = allCategories.map((categoryObj, i) => {
          // Find the parent category Object
          const getParentCategory = allCategories.find(
            (item) => item.category_id === categoryObj.parent_id
          );

          // Assign the parent category name into a new property
          categoryObj.parent_category_name = getParentCategory?.category_name;

          // 1 represents Active & 0 represents Inactive
          // We only show the active items but it is category lists that's why we show all
          if (categoryObj.category_is_active === 1) {
            categoryObj.category_is_active = 'Active';
          } else {
            categoryObj.category_is_active = 'Inactive';
          }
        });

        setCategories(allCategories);
      })
      .catch((err) => console.log('error', err));
  }, []);

  let navigate = useNavigate();
  const handleEditCategory = (categoryItem) => {
    navigate('/add_category', { state: categoryItem });
  };

  const handleDeleteCategory = (categoryItem) => {
    confirm({
      title: 'Are you sure to delete this item?',
      icon: <ExclamationCircleOutlined />,
      content:
        'If you click on the ok button the item will be deleted permanently from the database. Undo is not possible.',
      onOk() {
        window.delete_category.send('delete_category', {
          id: categoryItem.category_id,
        });

        setCategories(
          categories.filter(
            (item) => item.category_id !== categoryItem.category_id
          )
        );

        window.delete_category.once(
          'delete_category_response',
          ({ status }) => {
            if (status) {
              message.success({
                content: 'Category deleted successfully',
                className: 'custom-class',
                duration: 1,
                style: {
                  marginTop: '5vh',
                  float: 'right',
                },
              });
            }
          }
        );
      },
      onCancel() {},
    });
  };

  const columns = [
    {
      title: 'Image',
      dataIndex: 'categoryImage',
      key: 'categoryImage',
      render: (text, record) => (
        <Image
          // src={record.categoryImage}
          src={defaultImage}
          width="50px"
          height="50px"
          className="category_image"
        />
      ),
    },
    {
      title: 'Category Name',
      dataIndex: 'category_name',
      key: 'category_name',
      width: '30%',
    },
    {
      title: 'Parent Menu',
      dataIndex: 'parent_category_name',
      key: 'parent_category_name',
      width: '20%',
    },
    {
      title: 'Status',
      dataIndex: 'category_is_active',
      key: 'category_is_active',
      width: '15%',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      width: '20%',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => handleEditCategory(record)}>
            <EditOutlined />
            Edit
          </Button>

          <Button type="danger" onClick={() => handleDeleteCategory(record)}>
            <DeleteOutlined />
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div
      style={{
        margin: '0rem 1.5rem',
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
      }}
    >
      <Table
        columns={columns}
        rowSelection={{ ...rowSelection, checkStrictly }}
        dataSource={categories}
        pagination={false}
        rowKey={(record) => record?.category_id}
      />
    </div>
  );
};

export default AllCategoryList;
