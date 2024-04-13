import { MainPage } from 'pages/MainPage';
import { CreateNotePage } from 'pages/CreateNotePage';
import { DecodeNotePage } from 'pages/DecodeNotePage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { type RouteProps } from 'react-router-dom';

export enum AppRoutes {
  MAIN = 'main',
  CREATE = 'create',
  DECODE = 'decode',
  NOT_FOUND = 'not_found',
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.CREATE]: 'create',
  [AppRoutes.DECODE]: 'decode',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePaths.main,
    element: <MainPage />,
  },

  [AppRoutes.CREATE]: {
    path: RoutePaths.create,
    element: <CreateNotePage />,
  },

  [AppRoutes.DECODE]: {
    path: RoutePaths.decode,
    element: <DecodeNotePage />,
  },

  [AppRoutes.NOT_FOUND]: {
    path: RoutePaths.not_found,
    element: <NotFoundPage />,
  },
};
