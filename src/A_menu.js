import React from 'react';
import API, { endpoints } from './API';

class A_menu extends React.Component {
    constructor (){
        super()
        this.state = {"menu" : []}
    }
    
    componentDidMount() {
        API.get(endpoints['menu']).then(res => {
            console.info(res.data.results)
            this.setState({
                "menu": res.data.results
            })
        })
    }

    onClick = (x) => {
        if(x.target.classList.contains("food-menu-button")) 
        {
        const choseMenu =  document.querySelector(".food-menu")
        const Target = x.target.getAttribute("data-food");
        choseMenu.querySelector(".active").classList.remove("active")
        x.target.classList.add("active") /*x đã điều hướng tới button*/

        const putMenu =  document.querySelector(".food-elective")
        putMenu.querySelector(".food-elective-items.active").classList.remove("active")
        putMenu.querySelector(Target).classList.add("active")
        }       
    }

    zoomImg = () => {
        const bigImg = document.querySelector(".zoomOver img")
        const smallImg = document.querySelectorAll(".food-list-itme img")
        smallImg.forEach(imgItem => {
            bigImg.src = imgItem.src
            document.querySelector(".zoomOver-wrap").style.display = "flex"
            
        })  
    }
    closePic = () => {
         document.querySelector(".zoomOver-wrap").style.display = 'none';
        
    }

    render() {
        return (
            <>
                <section className="food">
                    <div className="food-title">
                        <div className="food-title-txt center">
                            <h2>Thực đơn tự chọn</h2>
                        </div>
                        <div className="food-menu" onClick = {this.onClick}>
                            <button className="food-menu-button active" data-food="#Menu1">Menu1</button>
                            <button className="food-menu-button" data-food="#Menu2">Menu2</button>
                            <button className="food-menu-button" data-food="#Menu1">Menu3</button>
                        </div>
                        <div className="food-elective">
                            <div className="food-elective-items active" id="Menu1">
                                <div className="food-elective-item">
                                    <img src="images/food/a.jpg" />
                                    <h3>Cá hồi tẩm bột chiên giòn dùng với gỏi xoài Thái</h3>
                                </div>
                                <div className="food-elective-item">
                                    <img src="images/food/b.jpg" />
                                    <h3>Cá hồi tẩm bột chiên giòn dùng với gỏi xoài Thái</h3>
                                </div>
                                <div className="food-elective-item">
                                    <img src="images/food/c.jpg" />
                                    <h3>Cá hồi tẩm bột chiên giòn dùng với gỏi xoài Thái</h3>
                                </div>
                                <div className="food-elective-item">
                                    <img src="images/food/d.jpg" />
                                    <h3>Cá hồi tẩm bột chiên giòn dùng với gỏi xoài Thái</h3>
                                </div>
                                <div className="food-elective-item">
                                    <img src="images/food/e.jpg" />
                                    <h3>Cá hồi tẩm bột chiên giòn dùng với gỏi xoài Thái</h3>
                                </div>
                                <div className="food-elective-item">
                                    <img src="images/food/1-101.jpg" />
                                    <h3>Cá hồi tẩm bột chiên giòn dùng với gỏi xoài Thái</h3>
                                </div>
                            </div>

                            <div className="food-elective-items" id="Menu2">
                                <div className="food-elective-item" >
                                    <img src="images/food/2-601.jpg" />
                                    <h3>Cá hồi tẩm bột chiên giòn dùng với gỏi xoài Thái</h3>
                                </div>
                                <div className="food-elective-item">
                                    <img src="images/food/3.jpg" />
                                    <h3>Cá hồi tẩm bột chiên giòn dùng với gỏi xoài Thái</h3>
                                </div>
                                <div className="food-elective-item">
                                    <img src="images/food/4-837.jpg" />
                                    <h3>Cá hồi tẩm bột chiên giòn dùng với gỏi xoài Thái</h3>
                                </div>
                                <div className="food-elective-item">
                                    <img src="images/food/5-581.jpg" />
                                    <h3>Cá hồi tẩm bột chiên giòn dùng với gỏi xoài Thái</h3>
                                </div>
                                <div className="food-elective-item">
                                    <img src="images/food/9-954.jpg" />
                                    <h3>Cá hồi tẩm bột chiên giòn dùng với gỏi xoài Thái</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="food-title">
                        <div className="food-title-txt center">
                            <h2>Thực đơn tiệc cưới mới nhất 2021</h2>
                        </div>
                        <p>Trung tâm tiệc cưới Melisa phục vụ hơn 150 món ăn phong cách Âu – Á</p>
                    </div>
                    <div className="food-list" onClick = { this.zoomImg }>
                        <div className="food-list-itme">
                        
                            {this.state.menu.map( c => 
                                    <img src = {c.image.replace("http://127.0.0.1:8000/", "http://127.0.0.1:8000/static/")}  />  
                            )}
                        </div>
                        <div className="zoomOver-wrap">
                            <div className="zoomOver">
                                <span><i className="far fa-times-circle" onClick ={this.closePic} style={{ color: 'black !important', fontSize: '40px', cursor: 'pointer' }} /></span>
                                <img style={{ width: '100%' }} src="images/food/menu1.jpg" />
                            </div>
                        </div>
                    </div> */}

                </section>

            </>
        );
    }
}

export default A_menu;