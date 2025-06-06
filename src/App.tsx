

function App() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "#f5f5f5"
    }}>
      <h1>Descarga nuestra App</h1>
      <p>Haz clic en el botón para descargar la APK de APKminera.</p>
      <a
        href="URL_DE_TU_APK.apk"
        download
        style={{
          padding: "1em 2em",
          background: "#007bff",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none",
          fontSize: "1.2em",
          marginTop: "1em"
        }}
      >
        Descargar APK
      </a>
    </div>
  );
}

export default App;