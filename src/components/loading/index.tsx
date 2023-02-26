import Lottie from 'lottie-web';
import React, { useEffect, useRef } from 'react';
import Data from './data.json';
import './index.less';

const Loading: React.FC = () => {
    const loadingRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!loadingRef.current) {
            return;
        }
        Lottie.loadAnimation({
            container: loadingRef.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: Data,
        });
    }, [loadingRef]);

    return (
        <div className="loading">
            <div className="loading-inner" style={{ width: 300 }} ref={loadingRef}></div>
        </div>
    );
};
export default Loading;
