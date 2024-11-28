import React, { lazy, Suspense } from 'react';
import { useInView } from 'react-intersection-observer';

const LazyComponent = lazy(() => import('../components/HeavyComponent'));

export default function ImportOnVisibility() {
  const [ref, inView] = useInView({
    threshold: 0.5
  });

  return (
    <>
      <div>Import On Visibility</div>
      <div style={{ height: '150vh' }}></div>
      <div ref={ref}>
        {inView && (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyComponent />
          </Suspense>
        )}
      </div>
    </>
  );
}
