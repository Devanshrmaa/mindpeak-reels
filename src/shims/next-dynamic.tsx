import React, { lazy, Suspense, ComponentType } from "react";

type DynamicOptions = {
  loading?: () => React.ReactElement | null;
  ssr?: boolean;
};

export default function dynamic<P = {}>(
  importFn: () => Promise<{ default: ComponentType<P> }>,
  options?: DynamicOptions
): ComponentType<P> {
  const LazyComponent = lazy(importFn);
  const LoadingComponent = options?.loading;

  const DynamicComponent = (props: any) => (
    <Suspense fallback={LoadingComponent ? <LoadingComponent /> : null}>
      <LazyComponent {...props} />
    </Suspense>
  );

  DynamicComponent.displayName = "DynamicComponent";
  return DynamicComponent as ComponentType<P>;
}
