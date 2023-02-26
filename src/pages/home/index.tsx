import Loading from '@/components/loading';
import { Table } from 'antd';
import React, { useEffect } from 'react';
import { throttle } from 'lodash';

import './index.less';

const dataSource = [
    {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
    },
    {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
];

const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
    },
];

const Home: React.FC = () => {
    const scrollHandler = throttle(() => {
        console.log('hhhh');
    }, 50);
    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, []);
    return (
        <div className="home">
            <Loading />
            <Table dataSource={dataSource} columns={columns} />
        </div>
    );
};
export default Home;
