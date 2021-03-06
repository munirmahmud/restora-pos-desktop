import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Col, ConfigProvider, Modal, Row, Typography } from 'antd';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Heading from 'renderer/components/Heading';
import AddNewFood from './../../../../components/AddNewFood';
import Sidebar from './../../../../components/partials/Sidebar';

const { Text } = Typography;

const AddFood = ({ settings }) => {
  const [show, setShow] = useState(false);

  const [openModal, setOpenModal] = useState(false);

  const handleShow = () => setOpenModal(true);
  const { state } = useLocation();

  return (
    <>
      <ConfigProvider direction={settings.site_align}>
        <div className="main_wrapper">
          <div className="pos_system">
            <Row>
              <Col lg={5} xl={3} xxl={3}>
                <Sidebar settings={settings} />
              </Col>

              <Col lg={19} xl={21} xxl={21}>
                <div className="flex content_between item_center">
                  {state?.id ? (
                    <Heading title=" Update Food Name" />
                  ) : (
                    <Heading title=" Add Food" />
                  )}

                  <div className="d-flex justify-content_end mb-3">
                    <Button
                      type="primary"
                      className="bulk_upload_btn"
                      onClick={handleShow}
                    >
                      <PlusCircleOutlined />
                      Bulk Upload
                    </Button>
                  </div>
                </div>

                <AddNewFood state={state} settings={settings} />
              </Col>
            </Row>
          </div>
        </div>

        <Modal
          title="Bulk Upload"
          visible={openModal}
          onOk={() => setOpenModal(false)}
          onCancel={() => setOpenModal(false)}
          footer={null}
          width={650}
        >
          <Text>
            Category, kitchen, Food Name, Description, status, VariantName,
            Price Demo, Italian, Dosa, Delicious Food, Active, Small, 60
          </Text>
        </Modal>
      </ConfigProvider>
    </>
  );
};

export default AddFood;
