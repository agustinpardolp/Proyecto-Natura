import React from 'react'
import { Layout } from "antd";
const {  Footer } = Layout;

export default function footer() {
    return (
        <div className = "footer">
             <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
            </Footer>
        </div>
    )
}

