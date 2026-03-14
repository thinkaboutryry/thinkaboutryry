import { useRouteError, isRouteErrorResponse } from 'react-router';

export default function GlobalError() {
  const error = useRouteError();
  console.error(error);

  let errorMessage = "Ocurrió un error inesperado al cargar la página.";
  
  if (isRouteErrorResponse(error)) {
    errorMessage = error.data || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#faf5ff] dark:bg-[#0a0510] text-neutral-900 dark:text-white p-6 text-center font-sans">
      <h1 className="text-6xl font-black mb-4 tracking-tight">¡Ups!</h1>
      <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-md">
        {errorMessage}
      </p>
      
      <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-8 max-w-md">
        Si estabas usando un traductor automático (como Google Translate), a veces puede causar problemas con la página. Intenta recargar.
      </p>

      <button
        onClick={() => window.location.href = '/'}
        className="px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow-lg"
      >
        Volver al inicio
      </button>
    </div>
  );
}
