import React from 'react';

class A_service extends React.Component {
    render() {
        return (
            <div>
                <section class="service">
                    <div class="wrap">
                        <div class="service-title-top center">
                            <h2>Dịch vụ tiệc cưới</h2>
                        </div>
                        <div class="service-info-wrap">
                            <div class="service-title-bottom">
                                <p>Với mong muốn góp phần tô vẽ nên chuyện tình yêu đẹp của lứa đôi,<b> Trung Tâm Tiệc Cưới Hội Nghị Melisa Center hân hạnh được phục vụ tiệc cưới của Bạn</b></p>
                                <p>Từ lâu nay, những giai điệu tình yêu đã vang lên trong con tim của mỗi người,
                                    đưa đến những cung bậc thăng hoa trong những tâm hồn đồng điệu và rồi lễ cưới
                                    chính là minh chứng của một bản giao hưởng tình yêu mãnh liệt</p>
                            </div>
                            <div class="service-info-list">
                                <div class="service-info-list-row">
                                    <div class="service-info">
                                        <div class="service-info-pic">
                                            <img src="images/dv/decorativeTable.jpg" />
                                        </div>
                                        <div class="service-info-text">
                                            <p>
                                                <strong>BÀN TRANG TRÍ</strong>
                                            </p>
                                            <p>Melisa cung cấp các gói từ tiêu chuẩn đến cao cấp được thiết kế theo ý tưởng của hai bạn</p>
                                        </div>
                                    </div>
                                    <div class="service-info">
                                        <div class="service-info-pic">
                                            <img src="images/dv/gateFlower.jpg" />
                                        </div>
                                        <div class="service-info-text">
                                            <p>
                                                <strong>CỔNG HOA CHÀO</strong>
                                            </p>
                                            <p>Hơn 10 mẫu cổng chào với đủ màu sắc, kiểu thiết kế,
                                                phong cách phù hợp với từng sảnh, từng sở thích của Cd-Cr</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="service-info-list-row">
                                    <div class="service-info">
                                        <div class="service-info-pic">
                                            <img src="images/dv/par.jpg" />
                                        </div>
                                        <div class="service-info-text">
                                            <p>
                                                <strong>TIẾT MỤC KHAI TIỆC</strong>
                                            </p>
                                            <p>Nhiều chương trình đa dạng từ dân gian – hiện đại –
                                                hỗ trợ các tiết mục dàn dựng riêng của cô dâu chú rể</p>
                                        </div>
                                    </div>
                                    <div class="service-info">
                                        <div class="service-info-pic">
                                            <img src="images/dv/signed.jpg" />
                                        </div>
                                        <div class="service-info-text">
                                            <p>
                                                <strong>TRANH KÝ TÊN</strong>
                                            </p>
                                            <p>Liễn ký tên-  nơi các vị khách mời lưu lại
                                                những lời chúc mừng hạnh phúc dành cho hai bạn</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="service-info-list-row">
                                    <div class="service-info">
                                        <div class="service-info-pic">
                                            <img src="images/dv/violinist.jpg" />
                                        </div>
                                        <div class="service-info-text">
                                            <p>
                                                <strong>PIANIST VÀ VIOLINIST  ĐÓN KHÁCH</strong>
                                            </p>
                                            <p>Không khí sẽ trở nên trang trọng hơn với Pianist và Violinist đón khách tại đại sảnh</p>
                                        </div>
                                    </div>
                                    <div class="service-info">
                                        <div class="service-info-pic">
                                            <img src="images/dv/photoArea.jpg" />
                                        </div>
                                        <div class="service-info-text">
                                            <p>
                                                <strong>KHU VỰC CHỤP HÌNH</strong>
                                            </p>
                                            <p>Bốt chụp hình lấy ngay, và nhiều khu vực trang trí khác để bạn và
                                                người thân có những tấm hình yêu thương</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="advise">
                    <div class="service-title-top center">
                        <h2>Tư vấn</h2>
                    </div>
                    <div id="wp-slider" >
                        <div className="owl-carousel owl-theme" onChange={this.onChange}>
                            <div className="item"><img src="images/dv/tochuc.png" />  </div>
                            <div className="item"><img src="images/dv/tuvan.jpg" />  </div>
                            <div className="item"><img src="images/dv/decorativeTable.jpg" />  </div>
                            <div className="item"><img src="images/dv/dv.png" /></div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}


export default A_service;