//引入
import React, { useEffect, useState } from "react";

function Counter() {
    //声明一个新的叫做“count”的state变量
    //useState：使用Hook来实现类似类组件的及状态管理操作
    //【】是数组的解构赋值，第一个是读取数据，第二个是设置数据，useState中是数据的默认值
    //只要顺序按照上面的要求，里面的名字无所谓
    const [count, setCount] = useState(0); //模拟状态

    //effact hook , 模拟类似于类组件的生命周期的作用
    //该方法，会在组件首次挂载和后续更新后执行触发
    useEffect(() => {
        console.log("可以使用了");
        document.title = `${count}`;
        //ajax
    });
    return (
        <div>
            <p>计数器值是：{count}</p>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                点我
            </button>
        </div>
    );
}
export default Counter;
