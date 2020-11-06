import React, { Component } from "react";
import { SearchBar } from "antd-mobile";

class Index extends Component {
    render() {
        return (
            // <></>相当于Frament
            <>
                <SearchBar placeholder="想吃什么搜这里" maxLength={20} />
            </>
        );
    }
}
export default Index;
