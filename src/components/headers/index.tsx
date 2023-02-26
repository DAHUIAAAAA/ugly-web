import { Routes } from '@/routes';
import React from 'react';
import { Link } from 'react-router-dom';
import './index.less';

const Header: React.FC = () => {
    return (
        <div className="header">
            <div className="header-inner">
                <Link className="header-item" to={Routes.Home}>
                    Home
                </Link>
                <Link className="header-item" to={Routes.Book}>
                    Books
                </Link>
            </div>
        </div>
    );
};
export default Header;
