class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">We're sorry, but something unexpected happened.</p>
            <button
              onClick={() => window.location.reload()}
              className="btn btn-black"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  try {
    const [modalOpen, setModalOpen] = React.useState(false);
    const [consultaResultado, setConsultaResultado] = React.useState(null);
    const [tipoConsulta, setTipoConsulta] = React.useState('');
    const [cpfsUtilizados, setCpfsUtilizados] = React.useState(new Map());

    const handleConsulta = (dados, tipo) => {
      const cpfLimpo = dados.cpf.replace(/\D/g, '');
      const tentativas = cpfsUtilizados.get(cpfLimpo) || 0;
      
      if (tentativas >= 3) {
        alert('Limite de 3 consultas por CPF atingido. Entre em contato com nosso suporte para mais informações.');
        return;
      }
      
      setCpfsUtilizados(prev => new Map(prev.set(cpfLimpo, tentativas + 1)));
      setConsultaResultado({...dados, tipo});
      setTipoConsulta(tipo);
      setModalOpen(true);
    };

    return (
      <div className="min-h-screen bg-[var(--secondary-color)]" data-name="app" data-file="app.js">
        <Header />
        <Hero onConsulta={handleConsulta} />
        <Services />
        <Benefits />
        <Testimonials />
        <Footer />
        <ConsultaModal 
          isOpen={modalOpen} 
          onClose={() => setModalOpen(false)}
          resultado={consultaResultado}
          tipoConsulta={tipoConsulta}
        />
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);