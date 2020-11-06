//作用: 包裹当前菜谱菜单中显示页面中的所有的子组件或内容
import React, { Component } from "react";

//引入当前组件需要使用的子组件
import HeaderNav from "@/components/HeaderNav"; //小写index可以省略
import Swiper from "@/components/Swiper";
import Search from "@/components/Search";
import HotCat from "@/components/HotCat";
import List from "@/components/List";

class Index extends Component {
    render() {
        return (
            <>
                {/*底部导航*/}
                <HeaderNav></HeaderNav>
                {/*滑动块*/}
                <Swiper></Swiper>
                {/*搜索框*/}
                <Search></Search>
                {/* 热门分类 */}
                <HotCat></HotCat>
                {/* 精品好菜 */}
                <List></List>
            </>
        );
    }
}
export default Index;
