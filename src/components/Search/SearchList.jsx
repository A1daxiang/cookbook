import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "@/store/actions/action_search";
//引入请求需要的信息
import Request from "@/http/request";
import { GOODCOOK } from "@/config/uri";
import { Title, Item, Dl, Dd } from "./style.js";
import { SearchBar } from "antd-mobile";

class SearchList extends Component {
    state = {
        list: [],
    };
    async componentDidMount() {
        try {
            let ret = await Request.get(
                GOODCOOK + "?keyword=" + this.props.search
            );
            if (ret.data.code === 0) {
                this.setState(() => ({ list: ret.data.data }));
            }
        } catch (error) {}
        console.log(this.state.list);
    }
    render() {
        return (
            <>
                <SearchBar
                    placeholder={this.props.search}
                    maxLength={20}
                    onSubmit={this.submit}
                />

                <Item>
                    {this.state.list.map((item, index) => {
                        return (
                            <Dl key={item.id}>
                                <dt>
                                    <img src={item.img} />
                                </dt>
                                <Dd>
                                    <h3>{item.name}</h3>
                                    <p>
                                        {item.all_click}浏览&emsp;
                                        {item.favorites}收藏
                                    </p>
                                </Dd>
                            </Dl>
                        );
                    })}
                </Item>
            </>
        );
    }
}
const mapStateToProps = (state) => {
    // console.log(state.get("reducer_search").get("search"));
    return {
        search: state.get("reducer_search").get("search"),
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        submitHandler(keyword) {
            dispatch(actions.actionCreator(keyword));
        },
    };
};
export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(SearchList)
);
