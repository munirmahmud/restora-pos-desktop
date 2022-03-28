import { Modal } from 'antd';
import { checkTokenLength } from 'helpers';
import moment from 'moment';

const TokenModal = ({ openModal, setOpenModal, cartItems, orderData }) => {
  const date = new Date();

  const printToken = (printToken) => {
    var printContents = document.getElementById(printToken).innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    window.location.reload();
  };

  const tokenNo = orderData?.token_no?.toString().length;
  const orderNo = orderData?.order_id?.toString().length;

  return (
    <Modal
      visible={openModal}
      onCancel={() => setOpenModal(false)}
      width={600}
      okText="Print"
      onOk={() => printToken('printToken')}
    >
      <div id="printToken">
        <h2
          style={{
            textAlign: 'center',
            fontWeight: '700',
            color: '#000',
            marginBottom: 0,
          }}
        >
          Token No: {checkTokenLength(tokenNo, orderData?.token_no)}
        </h2>

        <div className="flex content_between">
          <div className="flex content_between">
            <h4
              style={{
                fontWeight: '700',
                color: '#000',
                marginBottom: 0,
                marginRight: '1rem',
              }}
            >
              Q
            </h4>
            <h4 style={{ fontWeight: '700', color: '#000', marginBottom: 0 }}>
              Item
            </h4>
          </div>
          <h4 style={{ fontWeight: '700', color: '#000', marginBottom: 0 }}>
            Size
          </h4>
        </div>

        {orderData?.order_info?.map((item) => (
          <div key={item.id} className="flex content_between">
            <div className="flex content_between">
              <p
                style={{
                  fontSize: '13px',
                  color: '#000',
                  marginBottom: 0,
                  marginRight: '1rem',
                }}
              >
                {item.quantity}
              </p>
              <p style={{ fontSize: '12px', color: '#000', marginBottom: 0 }}>
                {item.product_name}
              </p>
            </div>
            <p style={{ fontSize: '12px', color: '#000', marginBottom: 0 }}>
              {item.foodVariant}
            </p>
          </div>
        ))}

        <div style={{ textAlign: 'center' }}>
          <h3 style={{ color: '#000' }}>
            Order No: {checkTokenLength(orderNo, orderData?.order_id)}
          </h3>
          <div style={{ border: '1px solid #000' }}></div>
          <p style={{ fontSize: '12px', color: '#000' }}>
            Date: {`${moment(date).format('LL')}`}
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default TokenModal;
