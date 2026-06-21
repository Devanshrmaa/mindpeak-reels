import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

/** Detect chunk-load / dynamic-import errors (HTML returned instead of JS) */
function isChunkLoadError(error: Error | null): boolean {
  if (!error) return false;
  const msg = String(error.message ?? '');
  return (
    msg.includes('Failed to fetch') ||
    msg.includes('Loading chunk') ||
    msg.includes('dynamically imported module') ||
    msg.includes('Expected expression') ||
    msg.includes('text/html') ||
    msg.includes('Unexpected token') ||
    msg.includes('Loading CSS chunk')
  );
}

/**
 * Global error boundary — catches React render errors.
 * For chunk-load errors it auto-reloads (once) to fetch fresh assets.
 * For other errors it shows a friendly fallback UI.
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

    // Auto-reload once for chunk load errors
    if (isChunkLoadError(error)) {
      const reloadKey = 'mp_chunk_reload';
      try {
        if (!sessionStorage.getItem(reloadKey)) {
          sessionStorage.setItem(reloadKey, '1');
          window.location.reload();
          return;
        }
      } catch {
        // sessionStorage unavailable — fall through to UI
      }
    }
  }

  render() {
    if (this.state.hasError) {
      const isChunk = isChunkLoadError(this.state.error);

      return (
        <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif', background: '#0a0e27', color: '#f8f8f2', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <div style={{ maxWidth: '480px' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{isChunk ? '🔄' : '⚠️'}</div>
            <h1 style={{ color: '#f8f8f2', fontSize: '1.4rem', marginBottom: '0.75rem', fontWeight: 700 }}>
              {isChunk ? 'New Version Available' : 'Something went wrong'}
            </h1>
            <p style={{ color: '#9ca3af', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {isChunk
                ? 'We\'ve updated the app. Please reload to get the latest version.'
                : 'An unexpected error occurred. Please reload the page to try again.'}
            </p>
            <button
              onClick={() => {
                try { sessionStorage.removeItem('mp_chunk_reload'); } catch { /* storage unavailable */ }
                window.location.reload();
              }}
              style={{ padding: '0.75rem 2rem', background: 'linear-gradient(135deg, #f59e0b, #ea580c)', color: '#fff', border: 'none', borderRadius: '9999px', cursor: 'pointer', fontWeight: 600, fontSize: '0.95rem', boxShadow: '0 4px 14px rgba(245,158,11,0.3)' }}
            >
              Reload Page
            </button>
            {!isChunk && (
              <details style={{ marginTop: '2rem', textAlign: 'left' }}>
                <summary style={{ cursor: 'pointer', color: '#6b7280', fontSize: '0.8rem' }}>Technical Details</summary>
                <pre style={{ color: '#f1fa8c', background: '#282a36', padding: '1rem', borderRadius: '8px', overflow: 'auto', fontSize: '0.75rem', marginTop: '0.5rem' }}>
                  {this.state.error?.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
