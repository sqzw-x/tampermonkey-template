import { createRoot } from "react-dom/client";

// 本模板不预置任何 UI 组件库，UI 由你自行决定：
// 需要时安装 antd / MUI / shadcn-ui 等依赖，然后在下面的 App 中直接使用即可。
const ROOT_ID = "tm-template-root";

GM_addStyle(`
  #${ROOT_ID} {
    position: fixed;
    right: 16px;
    bottom: 16px;
    z-index: 2147483647;
    font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
  }
`);

function App() {
  return (
    <div
      style={{
        padding: "8px 12px",
        border: "1px solid #d9d9d9",
        borderRadius: 8,
        background: "#fff",
        color: "#000",
        boxShadow: "0 2px 12px rgba(0, 0, 0, 0.15)",
      }}
    >
      Hello, Tampermonkey!
    </div>
  );
}

const container = document.createElement("div");
container.id = ROOT_ID;
document.body.append(container);

createRoot(container).render(<App />);
