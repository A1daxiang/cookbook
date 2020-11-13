import React, { Component } from "react";
import { SearchBar } from "antd-mobile";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "@/store/actions/action_search";

class Index extends Component {
    render() {
        // console.log(this.props.search);
        return (
            // <></>相当于Frament
            <>
                <SearchBar
                    placeholder="想吃什么搜这里"
                    maxLength={20}
                    onSubmit={this.submit}
                />
            </>
        );
    }

    submit = (val) => {
        this.props.submitHandler(val);
        this.props.history.push({
            pathname: "/searchList",
        });
    };
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));
