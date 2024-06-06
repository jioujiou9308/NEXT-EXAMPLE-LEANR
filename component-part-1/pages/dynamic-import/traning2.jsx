import React, { useState } from 'react'
// import Component2 from '../../component/test-dynamic/Component2'
import dynamic from "next/dynamic";

const Component2 = dynamic(import('../../component/test-dynamic/Component2'))

const Traning = () => {
    const [visible, setVisible] = useState(false)
    return (
        <div>{visible && <Component2 />}
            <button onClick={() => { setVisible(true) }}>Click me</button>
        </div>

    )
}

export default Traning


// 在實作的時候可以到.next/static/chunks/pages/dynamic-import/traning2.js檔案中查看有沒有在Component2加入的字段來檢查是否有成功使用dynamic import

// 適合 dynamic import 的 component
// 像是 Modal、Drawer 等等會等待跟使用者互動後才顯示的 component，換句話說，並不是每位使用者都會用到的 component