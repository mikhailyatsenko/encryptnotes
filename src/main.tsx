import ReactDOM from 'react-dom/client';
import Spinner from 'shared/ui/Spinner/Spinner';
import './index.scss';
import { HashRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// eslint-disable-next-line
const AppLazy = lazy(async () => await import('app/App'));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <Suspense fallback={<Spinner />}>
      <AppLazy />
    </Suspense>
  </HashRouter>,
);
