import React from 'react';
import { Col, Container } from 'react-bootstrap';
import Heading from 'renderer/components/Heading';
import Sidebar from './../../components/partials/Sidebar';

const Language = () => {
  return (
    <>
      <Container fluid className="main-wrapper">
        <div className="flex pos_system">
          <Col lg={2}>
            <Sidebar />
          </Col>
          <Col lg={10}>
            <Heading title="Language" />
          </Col>
        </div>
      </Container>
    </>
  );
};

export default Language;