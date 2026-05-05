import React, { useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import App from './App';

class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean, error: any}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("Lock Manager UI Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', color: 'red', backgroundColor: '#fee' }}>
          <h2>Something went wrong in Lock Manager UI.</h2>
          <pre>{this.state.error?.toString()}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

const ThemeWrapper = ({ hass, narrow }: { hass: any, narrow: boolean }) => {
    const isDarkMode = hass?.themes?.darkMode ?? false;
    
    const theme = useMemo(() => createTheme({
        palette: {
            mode: isDarkMode ? 'dark' : 'light',
        }
    }), [isDarkMode]);

    return (
        <ThemeProvider theme={theme}>
            <App hass={hass} narrow={narrow} />
        </ThemeProvider>
    );
};

class Z2MLockManagerPanel extends HTMLElement {
  _hass: any;
  _narrow: boolean = false;
  root: ReactDOM.Root | null = null;
  cache: any = null;

  set hass(hass: any) {
    this._hass = hass;
    this.renderReact();
  }

  set narrow(narrow: boolean) {
    this._narrow = narrow;
    this.renderReact();
  }

  renderReact() {
    if (this.root && this.cache) {
        this.root.render(
            <CacheProvider value={this.cache}>
                <ErrorBoundary><ThemeWrapper hass={this._hass} narrow={this._narrow} /></ErrorBoundary>
            </CacheProvider>
        );
    }
  }

  connectedCallback() {
    this.style.display = 'block'; // Make sure the panel behaves like a block element
    this.cache = createCache({
      key: 'z2m-lock',
      container: this,
    });
    this.root = ReactDOM.createRoot(this);
    this.renderReact();
  }
  
  disconnectedCallback() {
      if (this.root) {
          this.root.unmount();
          this.root = null;
      }
  }
}

customElements.define('z2m-lock-manager', Z2MLockManagerPanel);
