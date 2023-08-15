import { Spin } from "antd";

export default function Loading() {
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100vh"}}>
      <Spin size="large" />
    </div>
  )
}