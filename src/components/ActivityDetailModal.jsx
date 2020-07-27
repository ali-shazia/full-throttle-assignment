import React from 'react'
import {Modal, Container, Row, Button} from 'react-bootstrap'
import { getUserActivity } from '../utils/MockApi'

export default function ActivityDetailModal({id, show, toggle}) {

    const user = getUserActivity(id)
    console.log(user)
    return (
        <Modal show={show} onHide={toggle}>
        <Modal.Header closeButton>
          <Modal.Title>{user.real_name} Activity Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container>
                {getDetails(user.activity_periods)}
            </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark" size="sm" onClick={toggle}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      );
}

const getDetails = (periods) => {
    return periods.map(period => <Row>{period.start_time} - {period.end_time}</Row>);
}