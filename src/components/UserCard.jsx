import React, { useState } from 'react'
import { Card, Button, Row} from 'react-bootstrap'
import { getUserLastActive } from '../utils/MockApi'
import ActivityDetailModal from './ActivityDetailModal';

export default function UserCard({ user }) {
    const [modalShow, setModalShow] = useState(false);

    const toggleModal = ()=> {
        setModalShow(!modalShow)
    }
    return (
        <div>
            <Card className="m-2">
                <Card.Header as="h5">{user && user.real_name}</Card.Header>
                <Card.Body>
                    <Row>
                        <div>
                            <div>
                                <strong>User ID : </strong> {user.id}
                            </div>
                            <div>
                                <strong>Timezone : </strong> {user.tz}
                            </div>
                            <div>
                                <strong>Last Activity Time : </strong> {getUserLastActive(user.id)}
                            </div>
                        </div>
                    </Row>

                </Card.Body>
                <Card.Footer>
                    <Button onClick={toggleModal} variant="primary">View Activity</Button>
                </Card.Footer>
            </Card>

            <ActivityDetailModal id={user.id} show={modalShow} toggle={toggleModal}/>
        </div>
    )
}

