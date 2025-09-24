function Header() {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
      <header className="bg-white shadow-[var(--shadow-soft)] sticky top-0 z-50" data-name="header" data-file="components/Header.js">
        <div className="section-padding py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-700 rounded-lg flex items-center justify-center shadow-lg">
                <div className="icon-building-2 text-3xl text-white"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-[var(--primary-color)] tracking-tight">
                  HELP
                </span>
                <span className="text-xs font-semibold text-gray-600 -mt-1 tracking-wider">
                  BANCO DIGITAL
                </span>
              </div>
            </div>

            {/* Navigation Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => document.getElementById('formulario-consulta').scrollIntoView({ behavior: 'smooth' })}
                className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] font-medium transition-colors"
              >
                Crédito Pessoal
              </button>
              <button 
                onClick={() => document.getElementById('formulario-consulta').scrollIntoView({ behavior: 'smooth' })}
                className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] font-medium transition-colors"
              >
                Saque FGTS
              </button>
              <button 
                onClick={() => document.getElementById('formulario-consulta').scrollIntoView({ behavior: 'smooth' })}
                className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] font-medium transition-colors"
              >
                Simulação
              </button>
              <button 
                onClick={() => window.open('https://wa.me/5562981661546', '_blank')}
                className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] font-medium transition-colors"
              >
                Atendimento
              </button>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-[var(--primary-color)] font-semibold hover:text-blue-700 transition-colors">
                Área do Cliente
              </button>
              <button 
                onClick={() => document.getElementById('formulario-consulta').scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Iniciar Análise
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-3 rounded-xl bg-[var(--secondary-color)]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="icon-menu text-3xl text-[var(--text-primary)]"></div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-6 pb-6 border-t border-[var(--border-color)] pt-6">
              <div className="flex flex-col space-y-6">
                <button 
                  onClick={() => {
                    setIsMenuOpen(false);
                    document.getElementById('formulario-consulta').scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] font-bold text-xl py-3 text-left"
                >
                  💼 Crédito Pessoal
                </button>
                <button 
                  onClick={() => {
                    setIsMenuOpen(false);
                    document.getElementById('formulario-consulta').scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] font-bold text-xl py-3 text-left"
                >
                  🏦 Saque FGTS
                </button>
                <button 
                  onClick={() => {
                    setIsMenuOpen(false);
                    document.getElementById('formulario-consulta').scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] font-bold text-xl py-3 text-left"
                >
                  📊 Simulação Creditícia
                </button>
                <button 
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.open('https://wa.me/5562981661546', '_blank');
                  }}
                  className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] font-bold text-xl py-3 text-left"
                >
                  📞 Atendimento Especializado
                </button>
                <div className="flex flex-col space-y-4 pt-6">
                  <button className="mobile-button bg-[var(--secondary-color)] text-[var(--primary-color)] border-2 border-[var(--primary-color)]">
                    Área do Cliente
                  </button>
                  <button className="mobile-button bg-[var(--primary-color)] text-white">
                    💼 Iniciar Análise Creditícia
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}