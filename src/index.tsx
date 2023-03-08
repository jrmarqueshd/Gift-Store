import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

const App = lazy(() => import(/* webpackChunkName: "[request]" */"./App"));

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<Suspense fallback={<div>Carregando APP</div>}><App /></Suspense>);
