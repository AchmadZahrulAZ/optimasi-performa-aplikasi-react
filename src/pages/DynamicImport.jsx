import React, { lazy, Suspense, useState } from 'react';
const LazyComponent = lazy(() => import('../components/HeavyComponent'));

export default function DynamicImport() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <h1>Dynamic Import</h1>
      <button onClick={() => setIsVisible(!isVisible)}>Click</button>
      {isVisible && (
        <Suspense fallback={<div>Loading...</div>}>
          <LazyComponent />
        </Suspense>
      )}
    </>
  );
}
