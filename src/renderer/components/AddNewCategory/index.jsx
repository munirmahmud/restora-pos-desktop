import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import './AddNewCategory.style.scss';

const AddNewCategory = () => {
  const [offerTime, setOfferTime] = useState();

  const handleOffer = () => {
    setOfferTime(!offerTime);
  };

  return (
    <div className="add-new-category">
      <Form>
        <Row>
          <Col lg={7}>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column lg={4} align="right">
                Category Name *
              </Form.Label>
              <Col lg={8}>
                <Form.Control placeholder="Category Name" />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column lg={4} align="right">
                Parent Category
              </Form.Label>
              <Col lg={8}>
                <Form.Control placeholder="Parent Category" />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column lg={4} align="right">
                Category Color
              </Form.Label>
              <Col lg={8}>
                <Form.Control
                  type="color"
                  id="exampleColorInput"
                  defaultValue="#563d7c"
                  title="Choose your color"
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column lg={4} align="right">
                Image
              </Form.Label>
              <Col lg={8}>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Control type="file" />
                </Form.Group>
              </Col>
            </Form.Group>
          </Col>

          <Col lg={5}>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column lg={4} align="right">
                Category Icon
              </Form.Label>
              <Col lg={8}>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Control type="file" />
                </Form.Group>
              </Col>
            </Form.Group>

            <Form.Check
              inline
              label="offer"
              name="offer"
              onChange={handleOffer}
              // type={type}
              // id={`inline-${type}-1`}
            />
            {offerTime && (
              <>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextEmail"
                >
                  <Form.Label column lg={4} align="right">
                    Offer Start Date
                  </Form.Label>
                  <Col lg={8}>
                    <Form.Control type="date" placeholder="Offer Start Date" />
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextEmail"
                >
                  <Form.Label column lg={4} align="right">
                    Offer End Date
                  </Form.Label>
                  <Col lg={8}>
                    <Form.Control type="date" placeholder="Offer End Date" />
                  </Col>
                </Form.Group>
              </>
            )}
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default AddNewCategory;