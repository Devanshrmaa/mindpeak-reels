import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

/**
 * Global error boundary — catches React render errors and displays
 * them on-screen instead of showing a blank white page.
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ errorInfo });
    console.error('[ErrorBoundary]', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem', fontFamily: 'monospace', background: '#0a0e27', color: '#f8f8f2', minHeight: '100vh' }}>
          <h1 style={{ color: '#ff5555', fontSize: '1.5rem', marginBottom: '1rem' }}>
            Something went wrong
          </h1>
          <pre style={{ color: '#f1fa8c', background: '#282a36', padding: '1rem', borderRadius: '8px', overflow: 'auto', fontSize: '0.85rem', marginBottom: '1rem' }}>
            {this.state.error?.toString()}
          </pre>
          {this.state.errorInfo && (
            <details style={{ marginTop: '1rem' }}>
              <summary style={{ cursor: 'pointer', color: '#8be9fd' }}>Component Stack</summary>
              <pre style={{ color: '#bd93f9', background: '#282a36', padding: '1rem', borderRadius: '8px', overflow: 'auto', fontSize: '0.75rem', marginTop: '0.5rem' }}>
                {this.state.errorInfo.componentStack}
              </pre>
            </details>
          )}
          <button
            onClick={() => window.location.reload()}
            style={{ marginTop: '1.5rem', padding: '0.75rem 1.5rem', background: '#50fa7b', color: '#282a36', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
