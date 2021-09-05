import  React,  { useState } from "react"
import { Form, Button } from "react-bootstrap"
import API, { AuthAPI, endpoints } from "./API"
import cookies from 'react-cookies'

export default function A_login(props) {
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)

    const login = async (event) => {
        event.preventDefault()

        let res = await API.post(endpoints['login'], {
            'client_id':'FtaRWM9Nb53WSKZVlfzIpHufui2DvY7TADNwe8fy',
            'client_secret':'Lnai9ViEGYyVSr5Nq3lvqThtb7W8BQfvdaj4bZMoFOROYx53hktZLExOwNTnTnt3sx1tjv13Q50qRYRFITgmCMH5ybCavRl3NjWIXz4pTu3shQNWEhKCYjwBo9UpGWMx',
            'username':username,
            'password':password,
            'grant_type':'password'
        })
        console.info(res.data)
        
        cookies.save("access_token", res.data.access_token)

        let user = await API.get(endpoints['current-user'], {
            headers: {
                'Authorization': `Bearer ${cookies.load('access_token')}`
            }
        })
        console.info(user.data)
        cookies.save("user", user.data)

        props.history.push("/")
    }
    return (
        <>
            <h1 class="text-center text-danger">ĐĂNG NHẬP</h1>
            <Form onSubmit={login}>
                <LoginForm id="username" type="text" field={username} change={event => setUsername(event.target.value)}/>
                <LoginForm id="password" type="password" field={password} change={event => setPassword(event.target.value)}/>
                <Button type="submit">Login</Button>
            </Form>
        </>
    )
}

class LoginForm extends React.Component {
    render() {
        return(
            <Form.Group controlId={this.props.id}>
                <Form.Label>{this.props.label}</Form.Label>
                <Form.Control type={this.props.type} value={this.props.field} onChange={this.props.change}/>
            </Form.Group>
        )
    }
}