import React from 'react'
import { Col, Row } from 'react-bootstrap'
import API, { endpoints } from './API'
import { Card, Pagination } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Body extends React.Component {
    constructor() {
        super()
        this.state = {
            'menus': [],
            'count':0
        }
    }

    loadMenu= (page="?page=1") => {
        API.get(`${endpoints['menus']}${page}`).then(res => {
            this.setState({
                'menus': res.data.results,
                'count': res.data.count
            })
        })
    }

    componentDidMount() {
        this.loadMenu()
    }

    componentDidUpdate() {
        this.loadMenu(this.props.location.search)
    }
    
    render() {
        let items =[]
        for(let i=0; i<Math.ceil(this.state.count/6); i++)
            items.push(
                <Pagination.Item><Link to={"/?page=" + (i+1)}>{i+1}</Link></Pagination.Item>
            )
        return(
            <>
                <h1 class="text-center text-danger">CÁC MENU MÓN ĂN CỦA NHÀ HÀNG</h1>
                <Pagination>
                    {items}
                </Pagination>
                <Row>
                    {this.state.menus.map(m => <Amenu menu={m}/>)}
                </Row>
            </>
        )
    }
}

class Amenu extends React.Component {
    render() {
        return(
            <Col md={4}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.menu.image} />
                    <Card.Body>
                        <Card.Title>{this.props.menu.name}</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default Body