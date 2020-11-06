import React, { Component } from "react";
import { Carousel } from "antd-mobile";

// 导入图片
import Swiper1 from "@/assets/swiper/swiper-1.png";
import Swiper2 from "@/assets/swiper/swiper-2.jpeg";
import Swiper3 from "@/assets/swiper/swiper-3.jpeg";

class Index extends Component {
    state = {
        data: [Swiper1, Swiper2, Swiper3],
        imgHeight: 176,
    };

    render() {
        return (
            <>
                <Carousel autoplay={true} infinite>
                    {this.state.data.map((val, index) => (
                        <img
                            key={index}
                            src={val}
                            alt=""
                            style={{ width: "100%", verticalAlign: "top" }}
                            onLoad={() => {
                                window.dispatchEvent(new Event("resize"));
                                this.setState({ imgHeight: "auto" });
                            }}
                        />
                    ))}
                </Carousel>
            </>
        );
    }
}

export default Index;
