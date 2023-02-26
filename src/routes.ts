import Home from './pages/home';
import Book from './pages/books';

export enum Routes {
    Home = '/',
    Book = '/book',
}

interface RouteProps {
    path: string;
    component: React.ComponentType<any>;
}

export const routes: RouteProps[] = [
    {
        path: Routes.Home,
        component: Home,
    },
    {
        path: Routes.Book,
        component: Book,
    },
];
