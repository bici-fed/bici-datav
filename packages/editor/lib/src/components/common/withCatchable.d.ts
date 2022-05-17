import * as React from "react";
export declare type ErrorChild = React.ReactNode | ((error: Error, errorInfo: React.ErrorInfo) => React.ReactNode);
export default function withCatchable<T extends object>(WrappedComponent: React.ComponentType<T>, errorChild?: ErrorChild): React.ComponentType<T>;
