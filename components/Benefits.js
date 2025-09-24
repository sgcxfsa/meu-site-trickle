function Benefits() {
  try {
    const benefits = [
      {
        icon: 'zap',
        title: 'Aprovação Rápida',
        description: 'Análise automática em até 2 minutos'
      },
      {
        icon: 'shield-check',
        title: '100% Seguro',
        description: 'Tecnologia bancária com certificação de segurança'
      },
      {
        icon: 'smartphone',
        title: 'Tudo Digital',
        description: 'Sem papelada, tudo pelo celular'
      },
      {
        icon: 'clock',
        title: '24/7 Disponível',
        description: 'Atendimento e solicitações a qualquer hora'
      },
      {
        icon: 'percent',
        title: 'Melhores Taxas',
        description: 'Taxas competitivas e transparentes'
      },
      {
        icon: 'headphones',
        title: 'Suporte Especializado',
        description: 'Atendimento humanizado e especializado'
      }
    ];

    return (
      <section className="bg-[var(--secondary-color)]" data-name="benefits" data-file="components/Benefits.js">
        {/* Banner Institucional */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-4 text-center">
          <div className="flex items-center justify-center space-x-4">
            <div className="icon-shield-check text-2xl text-green-400"></div>
            <div className="text-lg font-semibold">
              BANCO DIGITAL AUTORIZADO PELO BANCO CENTRAL
            </div>
            <div className="icon-award text-2xl text-yellow-400"></div>
          </div>
        </div>
        
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
              Por que escolher o Help?
            </h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              Mais de 100 mil clientes confiam em nossos serviços
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-[var(--shadow-soft)]">
                  <div className={`icon-${benefit.icon} text-3xl text-[var(--primary-color)]`}></div>
                </div>
                
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                  {benefit.title}
                </h3>
                
                <p className="text-[var(--text-secondary)]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-[var(--primary-color)] to-orange-700 rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">
              Pronto para começar?
            </h3>
            <p className="text-xl mb-8 text-orange-100">
              Simule seu empréstimo agora e veja quanto você pode receber
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary bg-white text-[var(--primary-color)] hover:bg-gray-100">
                <div className="flex items-center justify-center space-x-2">
                  <div className="icon-calculator text-lg"></div>
                  <span>Fazer Simulação</span>
                </div>
              </button>
              <button className="btn-secondary border-white text-white hover:bg-white hover:text-[var(--primary-color)]">
                <div className="flex items-center justify-center space-x-2">
                  <div className="icon-phone text-lg"></div>
                  <span>Falar com Especialista</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Benefits component error:', error);
    return null;
  }
}