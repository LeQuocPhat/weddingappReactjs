import React, { Component } from 'react';
import API, { endpoints } from './API';

class A_spaces extends Component {
    constructor() {
        super()
        this.state = { "weddinghalls": [] }
    }
    componentDidMount() {
        API.get(endpoints['weddinghalls']).then(res => {
            console.info(res.data.results)
            this.setState({
                "weddinghalls": res.data.results
            })
        })
    }
    render() {

        return (
            <>
                <section class="space">
                    <div class="space-content center">
                        <h2>Không gian sảnh </h2>
                    </div>
                    <div class="space-party">
                        <div class="space-party-list">
                            {this.state.weddinghalls.map(c =>
                                <div class="space-party-row">
                                    <div class="space-party-img">
                                        <img src={c.image.replace("http://127.0.0.1:8000/", "http://127.0.0.1:8000/static/")} alt="sanh2" />
                                    </div>
                                    <div class="space-party-content">
                                        <p> {c.description} </p>
                                        <div class="deti">
                                            <button class="bt-deti">Chi tiết</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default A_spaces;