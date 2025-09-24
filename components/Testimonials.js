function Testimonials() {
  try {
    const testimonials = [
      {
        name: 'Maria Silva',
        role: 'Empresária - SP',
        content: 'Consegui R$ 12.000 em 3 minutos! Usei para expandir minha loja e hoje faturo 3x mais. Recomendo!',
        rating: 5,
        valor: 'R$ 12.000',
        tempo: '3 minutos',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
      },
      {
        name: 'João Santos',
        role: 'Motorista - RJ', 
        content: 'Saquei meu FGTS de R$ 8.500 no mesmo dia. Comprei minha moto e agora trabalho por aplicativo.',
        rating: 5,
        valor: 'R$ 8.500',
        tempo: 'mesmo dia',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
      },
      {
        name: 'Ana Costa',
        role: 'Enfermeira - MG',
        content: 'R$ 15.200 liberados! Quitei todas as dívidas e ainda sobrou para emergência. Mudou minha vida!',
        rating: 5,
        valor: 'R$ 15.200',
        tempo: '5 minutos',
        avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face'
      },
      {
        name: 'Carlos Mendes',
        role: 'Vendedor - BA',
        content: 'Recebi R$ 9.800 para reformar minha casa. Processo super fácil, nem acreditei que era verdade!',
        rating: 5,
        valor: 'R$ 9.800',
        tempo: '4 minutos',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
      },
      {
        name: 'Fernanda Lima',
        role: 'Professora - PR',
        content: 'FGTS de R$ 11.400 na conta! Realizei o sonho de viajar com minha família. Gratidão eterna!',
        rating: 5,
        valor: 'R$ 11.400',
        tempo: '2 minutos',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
      },
      {
        name: 'Roberto Costa',
        role: 'Autônomo - RS',
        content: 'Empréstimo de R$ 18.600 aprovado! Investi no meu negócio e hoje sou independente financeiramente.',
        rating: 5,
        valor: 'R$ 18.600',
        tempo: '6 minutos',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
      }
    ];

    return (
      <section className="bg-white" data-name="testimonials" data-file="components/Testimonials.js">
        <div className="section-padding">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
              Pessoas Reais, Resultados Reais
            </h2>
            <p className="text-xl text-[var(--text-secondary)] mb-4">
              Veja quem já conseguiu dinheiro conosco
            </p>
            <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl p-4 max-w-2xl mx-auto border border-orange-200">
              <p className="text-orange-700 font-bold text-lg">
                🔥 Mais de 50.000 pessoas aprovadas nos últimos 30 dias!
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card hover:shadow-xl transition-all duration-300">
                {/* Valor e tempo em destaque */}
                <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-xl p-3 mb-4 border border-green-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-700 mb-1">{testimonial.valor}</div>
                    <div className="text-sm text-green-600">Aprovado em {testimonial.tempo}</div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex space-x-1 mb-3 justify-center">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <div key={starIndex} className="icon-star text-yellow-400 text-lg"></div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-[var(--text-secondary)] mb-4 italic text-sm leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full mr-4 object-cover border-3 border-orange-200"
                  />
                  <div>
                    <div className="font-bold text-[var(--text-primary)] text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-[var(--text-secondary)] font-semibold">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 text-center">
            <p className="text-[var(--text-secondary)] mb-8">Confiança garantida por:</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="flex items-center space-x-2">
                <div className="icon-shield-check text-2xl text-[var(--accent-color)]"></div>
                <span className="font-semibold">Banco Central</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="icon-award text-2xl text-[var(--accent-color)]"></div>
                <span className="font-semibold">SSL Certificado</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="icon-users text-2xl text-[var(--accent-color)]"></div>
                <span className="font-semibold">100k+ Clientes</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Testimonials component error:', error);
    return null;
  }
}