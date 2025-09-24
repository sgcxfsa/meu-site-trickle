function Services() {
  try {
    const services = [
      {
        icon: 'credit-card',
        title: 'Empréstimo Pessoal',
        description: 'Crédito pré-aprovado com taxas especiais e parcelamento em até 60x.',
        features: ['Até R$ 500.000', 'Taxa a partir de 0,99% a.m.', 'Sem consulta SPC/Serasa'],
        link: '#emprestimos'
      },
      {
        icon: 'piggy-bank',
        title: 'Antecipação FGTS',
        description: 'Antecipe seu FGTS e receba o valor hoje mesmo, sem sair de casa.',
        features: ['Até 13 parcelas', 'Aprovação imediata', 'Sem análise de crédito'],
        link: '#fgts'
      },
      {
        icon: 'home',
        title: 'Financiamento Imobiliário',
        description: 'Realize o sonho da casa própria com as melhores condições do mercado.',
        features: ['Até 35 anos para pagar', 'Use FGTS', 'Taxa fixa ou variável'],
        link: '#financiamento'
      },
      {
        icon: 'car',
        title: 'Financiamento Veicular',
        description: 'Compre seu carro novo ou usado com financiamento facilitado.',
        features: ['Carros 0km e seminovos', 'Entrada facilitada', 'Aprovação rápida'],
        link: '#veiculo'
      }
    ];

    return (
      <section id="servicos" className="bg-white" data-name="services" data-file="components/Services.js">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              Soluções financeiras completas para todas as suas necessidades
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card group hover:shadow-[var(--shadow-medium)] transition-all duration-300">
                <div className="w-16 h-16 bg-[var(--secondary-color)] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[var(--primary-color)] transition-colors duration-300">
                  <div className={`icon-${service.icon} text-2xl text-[var(--primary-color)] group-hover:text-white transition-colors duration-300`}></div>
                </div>
                
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                  {service.title}
                </h3>
                
                <p className="text-[var(--text-secondary)] mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-[var(--text-secondary)]">
                      <div className="icon-check text-[var(--accent-color)] mr-2 text-xs"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a href={service.link} className="text-[var(--primary-color)] font-semibold hover:text-blue-700 transition-colors">
                  Saiba mais →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Services component error:', error);
    return null;
  }
}