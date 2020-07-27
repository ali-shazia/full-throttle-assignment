import React, { Component } from 'react'
import Header from './Header'
import UserCardList from './UserCardList'
import {Row} from 'react-bootstrap'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Row>
                    <UserCardList />
                </Row>
            </div>
        )
    }
}
