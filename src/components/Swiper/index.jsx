import React, { Component } from "react";
import { Carousel } from "antd-mobile";
import Request from "@/http/request";
import { SWIPER } from "@/config/uri";

// 导入图片
// import Swiper1 from "@/assets/swiper/swiper-1.png";
// import Swiper2 from "@/assets/swiper/swiper-2.jpeg";
// import Swiper3 from "@/assets/swiper/swiper-3.jpeg";

class Index extends Component {
    state = {
        // data: [Swiper1, Swiper2, Swiper3],
        data: [],
        imgHeight: 176,
        flag: false,
    };
    async componentDidMount() {
        try {
            let ret = await Request.get(SWIPER);
            if (ret.data.code === 0) {
                this.setState(() => ({
                    data: ret.data.data,
                    flag: true,
                }));
            }
        } catch (error) {}
    }

    render() {
        return (
            <>
                {/* 逻辑运算符&&的特性,如果前面为假则后面的表达式就不会执行.不习惯就写if判断 */}
                {this.state.flag && (
                    <Carousel autoplay={true} infinite>
                        {this.state.data.map((val, index) => (
                            <img
                                key={index}
                                src={val.img}
                                alt=""
                                style={{ width: "100%", verticalAlign: "top" }}
                                onLoad={() => {
                                    window.dispatchEvent(new Event("resize"));
                                    this.setState({ imgHeight: "auto" });
                                }}
                            />
                        ))}
                    </Carousel>
                )}
            </>
        );
    }
}

export default Index;
