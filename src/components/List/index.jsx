import React, { Component } from "react";
import { Grid } from "antd-mobile";
import Request from "@/http/request";
import { LIST } from "@/config/uri";

class Index extends Component {
    state = {
        data: [],
    };
    async componentDidMount() {
        try {
            let ret = await Request.get(LIST);
            if (ret.data.code === 0) {
                this.setState(() => {
                    return {
                        data: ret.data.data,
                    };
                });
            }
        } catch (error) {}
    }
    render() {
        return (
            <div
                style={{
                    height: "220px",
                    overflow: "scroll",
                }}
            >
                <div style={{ color: "gray" }}>精品好菜</div>
                <Grid
                    data={this.state.data}
                    columnNum={2}
                    renderItem={(dataItem) => (
                        <div>
                            <img
                                src={dataItem.img}
                                style={{ width: "160px", height: "120px" }}
                                alt=""
                            />
                            <div
                                style={{
                                    color: "black",
                                    fontSize: "18px",
                                    marginTop: "8px",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                <span>{dataItem.name}</span>

                                <div
                                    style={{
                                        color: "gray",
                                        fontSize: "10px",
                                        marginTop: "0px",
                                    }}
                                >
                                    <span>{dataItem.all_click}浏览</span>
                                    &nbsp;&nbsp;
                                    <span>{dataItem.favorites}收藏</span>
                                </div>
                            </div>
                        </div>
                    )}
                    onClick={this.clickHandler}
                />
            </div>
        );
    }
    clickHandler = (el) => {
        console.log(el);
        //编程式导航走起 this.props.history.push
    };
}
export default Index;
