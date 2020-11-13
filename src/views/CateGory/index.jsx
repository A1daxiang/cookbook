import React, { Component } from "react";
import { SearchBar } from "antd-mobile";
import Cate1 from "@/views/CateGory/Cate1";
import Cate2 from "@/views/CateGory/Cate2";
import { HeaderContainer } from "./style";

class Index extends Component {
    state = {
        slider: "slider",
        classList: ["active", ""],
        flag: true,
    };
    clickHandler(index) {
        //修改滑块的位置
        let slider = index === 0 ? "slider" : "slider right";
        //修改默认选择的效果
        let classList = index === 0 ? ["active", ""] : ["", "active"];
        //默认展示的子组件，true=cate1,false=cate2
        let flag = index === 0 ? true : false;
        //修改最终的数据
        this.setState(() => {
            return {
                slider,
                classList,
                flag,
            };
        });
    }
    render() {
        return (
            <>
                <HeaderContainer>
                    <ul>
                        <li
                            className={this.state.classList[0]}
                            onClick={this.clickHandler.bind(this, 0)}
                        >
                            分类
                        </li>
                        <li
                            className={this.state.classList[1]}
                            onClick={this.clickHandler.bind(this, 1)}
                        >
                            食材
                        </li>
                        <li className={this.state.slider}></li>
                    </ul>
                </HeaderContainer>
                <SearchBar placeholder="想吃什么点这里" maxLength={20} />
                {this.state.flag && <Cate1></Cate1>}
                {!this.state.flag && <Cate2></Cate2>}
            </>
        );
    }
}

export default Index;
