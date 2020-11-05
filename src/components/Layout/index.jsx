import React, { Component } from "react";
import { TabBar } from "antd-mobile";

//引入八个图标
import cb from "@/assets/icon/cookbook.png";
import cbActive from "@/assets/icon/cookbook-active.png";
import menu from "@/assets/icon/menu.png";
import menuActive from "@/assets/icon/menu-active.png";
import location from "@/assets/icon/location.png";
import locationActive from "@/assets/icon/location-active.png";
import more from "@/assets/icon/more.png";
import moreActive from "@/assets/icon/more-active.png";

//导入需要使用的内容组件
import CookBookCmp from "@/views/CookBook";

class Index extends Component {
    //构造方法,初始化渲染方法中需要用到的数据
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: "cookbook",
            hidden: false,
            fullScreen: true,
        };
    }
    //渲染组件的内容
    render() {
        return (
            <div
                style={
                    this.state.fullScreen
                        ? {
                              position: "fixed",
                              height: "100%",
                              width: "100%",
                              top: 0,
                          }
                        : { height: 400 }
                }
            >
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    <TabBar.Item
                        title="菜谱"
                        key="cookbook"
                        icon={
                            <div
                                style={{
                                    width: "22px",
                                    height: "22px",
                                    background: `url(${cb}) center center /  21px 21px no-repeat`,
                                }}
                            />
                        }
                        selectedIcon={
                            <div
                                style={{
                                    width: "22px",
                                    height: "22px",
                                    background: `url(${cbActive}) center center /  21px 21px no-repeat`,
                                }}
                            />
                        }
                        selected={this.state.selectedTab === "cookbook"}
                        onPress={() => {
                            this.setState({
                                selectedTab: "cookbook",
                            });
                        }}
                        data-seed="logId"
                    >
                        <CookBookCmp></CookBookCmp>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div
                                style={{
                                    width: "22px",
                                    height: "22px",
                                    background: `url(${menu}) center center /  21px 21px no-repeat`,
                                }}
                            />
                        }
                        selectedIcon={
                            <div
                                style={{
                                    width: "22px",
                                    height: "22px",
                                    background: `url(${menuActive}) center center /  21px 21px no-repeat`,
                                }}
                            />
                        }
                        title="分类"
                        key="category"
                        selected={this.state.selectedTab === "category"}
                        onPress={() => {
                            this.setState({
                                selectedTab: "category",
                            });
                        }}
                        data-seed="logId1"
                    >
                        内容:第二个菜单的内容
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div
                                style={{
                                    width: "22px",
                                    height: "22px",
                                    background: `url(${location}) center center /  21px 21px no-repeat`,
                                }}
                            />
                        }
                        selectedIcon={
                            <div
                                style={{
                                    width: "22px",
                                    height: "22px",
                                    background: `url(${locationActive}) center center /  21px 21px no-repeat`,
                                }}
                            />
                        }
                        title="位置"
                        key="location"
                        selected={this.state.selectedTab === "location"}
                        onPress={() => {
                            this.setState({
                                selectedTab: "location",
                            });
                        }}
                    >
                        内容:第三个菜单的内容
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{
                            uri: more,
                        }}
                        selectedIcon={{
                            uri: moreActive,
                        }}
                        title="更多"
                        key="more"
                        selected={this.state.selectedTab === "more"}
                        onPress={() => {
                            this.setState({
                                selectedTab: "more",
                            });
                        }}
                    >
                        内容:第四个菜单的内容
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}

export default Index;
