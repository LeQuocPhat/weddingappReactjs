import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import './A_style.css' ;
import cookies from 'react-cookies'
import { UserContext } from './App';

export default function A_header() {
    const auth = useContext(UserContext)

    useEffect(() => {
         window.addEventListener('scroll', handleScroll);
    })

    function handleScroll() {
        const header = document.querySelector(".header")
        const bar = document.querySelector(".row")
        const x = this.pageYOffset
        if (x > 150) {
            header.classList.add("active")
            bar.classList.add("active")
        }
        else {
            header.classList.remove("active")
            bar.classList.remove("active")
        }
    }
    const isSearch = () =>{
        // const icon = document.querySelector(".fa-times");
        document.querySelector(".search-icon").classList.toggle("active")
    }
    let user = auth.user
    if(cookies.load("user") != null)
        user = cookies.load("user")
    let r = <>
        <li><Link to="/login">Đăng nhập</Link></li> 
        <li><Link to="/register">Đăng kí</Link></li>
    </>
    if(user !=null)
        r= <li><Link to="/">Welcome {user.username}</Link></li>
    return (
        <div>
            <section class="header">
                <div class="contai">
                    <div class="row">
                        <div class="muli">
                            <div class="search">
                                <div class="search-icon">
                                    <i class="fas fa-times" onClick={isSearch}></i><input type="text" placeholder="Nhập từ khóa tìm kiếm" /><i class="fas fa-search"></i>
                                </div>
                            </div>
                        </div>
                        <div class="menu-bar-left">
                            <nav>
                                <ul class="menu-bar-left-items row">
                                    <li><i class="fas fa-search fa"></i> </li>
                                    <li class="menu-bar-items-sub">
                                        <a href="#">Hệ thống</a>
                                        <ul class="menu-bar-items-sub1">
                                            <li><a href="#">Thực đơn</a></li>
                                            <li><a href="#">Thực đơn</a></li>
                                        </ul>
                                    </li>
                                    <li ><Link to="/menu">Thực đơn</Link></li>
                                    <li class="menu-bar-items-sub">
                                        <a >Tiệc cưới</a>
                                        <ul class="menu-bar-items-sub1">
                                            <li><Link to="/service">Dịch vụ tiệc cưới</Link></li>
                                            <li><Link to="/weddinghalls">Sảnh tiệc</Link></li> 
                                        </ul>
                                    </li>
                                    <li><a href="#">Ưu đãi</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div class="logo">
                            <img src="images/logo/logo.svg" alt="" />
                        </div>
                        <div class="menu-bar-right">
                            <nav>
                                <ul class="menu-bar-right-food row">
                                    <li><a href="#">Liên hệ</a></li>
                                    <li class="menu-bar-items-sub">
                                        <a href="#">Blog</a>
                                        <ul class="menu-bar-items-sub1">
                                            <li><a href="#">Thực đơn</a></li>
                                            <li><a href="#">Thực đơn</a></li>
                                        </ul>
                                    </li>
                                    {r} 
                                    <li><button class="btOrder">Đặt tiệc</button></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            <section class="imageMain">
                <div class="imageMain-content">
                    <div class="imageMain-content-text" style={{height: '110px'}}>
                        <img src="images/logo/text-banner.png" />
                    </div>
                    <div class="imageMain-content-textsmall" style={{textAlign: 'center'}}>
                        <h2>Trung tâm tổ chức tiệc cưới và sự kiện</h2>
                    </div>

                </div>

            </section>
        </div>
    );
    
}

