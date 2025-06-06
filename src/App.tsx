function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-900 px-4">
      <div className="bg-neutral-800 rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
        <img
          src="/icon.png"
          alt="Logo APKminera"
          className="mx-auto mb-6 w-20 h-20 rounded-full shadow-lg object-cover glow-animate"
        />
        <h1 className="text-3xl font-bold mb-4 text-white">Descarga nuestra App</h1>
        <p className="mb-8 text-gray-300">
          Haz clic en el botón para descargar la APK de <span className="font-semibold text-white">APKminera</span>.
        </p>
        <a
          href="URL_DE_TU_APK.apk"
          download
          className="btn btn-primary w-full text-lg normal-case text-white"
        >
          Descargar APK
        </a>
        <div className="mt-8 text-xs text-gray-500">
          © {new Date().getFullYear()} APKminera. Todos los derechos reservados.
        </div>
      </div>
    </div>
  );
}

export default App;