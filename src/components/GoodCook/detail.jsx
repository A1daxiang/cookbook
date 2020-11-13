// 作用：菜谱详情组件，依据动态参数id展示对应菜谱的详情信息
import React, { Component } from "react";
import Request from "@/http/request";
import { DETAIL } from "@/config/uri";

class Detail extends Component {
    state = {
        list: [],
    };

    render() {
        return (
            <>
                {this.props.match.params.id}

                {this.state.list.map((item, index) => {
                    return (
                        <img
                            style={{
                                width: 500,
                                height: 350,
                                marginTop: 50,
                            }}
                            src={item.img}
                            alt=""
                            key={index}
                        />
                    );
                })}
            </>
        );
    }
    async componentDidMount() {
        try {
            let ret = await Request.get(DETAIL);
            if (ret.data.code === 0) {
                this.setState(() => {
                    return {
                        list: [ret.data.data],
                    };
                });
            }
        } catch (error) {}
        // console.log(this.state.list);
    }
}

export default Detail;
