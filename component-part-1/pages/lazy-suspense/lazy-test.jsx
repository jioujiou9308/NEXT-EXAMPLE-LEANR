import React, { Suspense, lazy, Fragment, useState, useEffect, startTransition } from 'react';

// 模拟网络延迟函数
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// 包装 lazy 函数以添加延迟
const delayedImport = (importFunction, delay) => {
  return lazy(() =>
    sleep(delay).then(() => importFunction())
  );
};

// 使用包装后的延迟导入函数
const Lazy = delayedImport(() => import(/* webpackChunkName: "lazy-lazy-lazy~~~" */ '../../component/lazySuspense/Lazy'), 3000);

const LazyTest = () => {
  const [showLazy, setShowLazy] = useState(false);

  useEffect(() => {
    startTransition(() => {
      const timer = setTimeout(() => {
        setShowLazy(true);
      }, 100); // 延迟触发组件加载
      return () => clearTimeout(timer);
    });
  }, []);

  return (
    <div>
      asdf
      <Fragment>
        {showLazy ? (
          <Suspense fallback={<p>Loading~~!!!~~~</p>}>
            <Lazy />
          </Suspense>
        ) : (
          <p>Initializing...</p>
        )}
      </Fragment>
    </div>
  );
};

export default LazyTest;
