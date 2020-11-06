import React, { Component } from "react";
import { Grid } from "antd-mobile";
import Request from "@/http/request";
import { HOTCAT } from "@/config/uri";

class Index extends Component {
    state = {
        data: [],
    };
    async componentDidMount() {
        try {
            let ret = await Request.get(HOTCAT);
            if (ret.data.code === 0) {
                //将数据处理成Grid需要的数据格式
                let data = [];
                ret.data.data.map((item, index) => {
                    data.push({
                        // icon: item.img,
                        text: item.title,
                        id: item.id,
                    });
                });
                data.push({ text: "更多>>", id: 0 });
                // this.setState(() => ({ data: data }));
                this.setState(() => ({ data })); //简写
            }
        } catch (error) {}
    }
    render() {
        return (
            <>
                <div style={{ color: "gray" }}>热门分类</div>
                <Grid
                    data={this.state.data}
                    square={false}
                    className="not-square-grid"
                    onClick={this.clickHandler}
                />
            </>
        );
    }
    clickHandler = (el) => {
        console.log(el);
        //编程式导航走起 this.props.history.push
    };
}
export default Index;
