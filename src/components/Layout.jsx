import React from "react";

function Layout({ children }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI'",
        background: "#0f172a",
        color: "#e5e7eb",
      }}
    >
      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "1.5rem" }}>
        {children}
      </div>
    </div>
  );
}

export default Layout;
