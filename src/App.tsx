

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f5f5",
        padding: "1em",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "16px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          padding: "2em",
          maxWidth: "400px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h1 style={{ marginBottom: "0.5em" }}>Descarga nuestra App</h1>
        <p style={{ marginBottom: "1.5em" }}>
          Haz clic en el botón para descargar la APK de APKminera.
        </p>
        <a
          href="URL_DE_TU_APK.apk"
          download
          style={{
            display: "inline-block",
            padding: "1em 2em",
            background: "linear-gradient(90deg, #007bff 60%, #0056b3 100%)",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1.1em",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            transition: "background 0.2s, transform 0.2s",
          }}
          onMouseOver={e => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={e => (e.currentTarget.style.transform = "scale(1)")}
        >
          Descargar APK
        </a>
      </div>
      <style>
        {`
          @media (max-width: 500px) {
            div[style*="box-shadow"] {
              padding: 1em !important;
              max-width: 95vw !important;
            }
            h1 {
              font-size: 1.3em !important;
            }
            p {
              font-size: 1em !important;
            }
          }
        `}
      </style>
    </div>
  );
}

export default App;