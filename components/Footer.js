function Footer() {
  try {
    return (
      <footer className="bg-[var(--text-primary)] text-white" data-name="footer" data-file="components/Footer.js">
        <div className="section-padding">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Logo e Descrição */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-700 rounded-lg flex items-center justify-center">
                  <div className="icon-building-2 text-xl text-white"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-orange-300">
                    HELP
                  </span>
                  <span className="text-xs font-semibold text-gray-400 -mt-1 tracking-wider">
                    BANCO DIGITAL
                  </span>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Banco digital autorizado pelo Banco Central, especializado em soluções de crédito personalizadas e seguras.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors">
                  <div className="icon-facebook text-lg"></div>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors">
                  <div className="icon-twitter text-lg"></div>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors">
                  <div className="icon-instagram text-lg"></div>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors">
                  <div className="icon-linkedin text-lg"></div>
                </a>
              </div>
            </div>

            {/* Produtos */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Produtos</h3>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#emprestimos" className="hover:text-white transition-colors">Empréstimo Pessoal</a></li>
                <li><a href="#fgts" className="hover:text-white transition-colors">Antecipação FGTS</a></li>
                <li><a href="#financiamento" className="hover:text-white transition-colors">Financiamento Imobiliário</a></li>
                <li><a href="#veiculo" className="hover:text-white transition-colors">Financiamento Veicular</a></li>
                <li><a href="#simulador" className="hover:text-white transition-colors">Simulador</a></li>
              </ul>
            </div>

            {/* Empresa */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Empresa</h3>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a></li>
                <li><a href="#carreiras" className="hover:text-white transition-colors">Carreiras</a></li>
                <li><a href="#imprensa" className="hover:text-white transition-colors">Imprensa</a></li>
                <li><a href="#investidores" className="hover:text-white transition-colors">Investidores</a></li>
                <li><a href="#parceiros" className="hover:text-white transition-colors">Seja Parceiro</a></li>
              </ul>
            </div>

            {/* Suporte */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Suporte</h3>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#ajuda" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#contato" className="hover:text-white transition-colors">Fale Conosco</a></li>
                <li><a href="#ouvidoria" className="hover:text-white transition-colors">Ouvidoria</a></li>
                <li><a href="#seguranca" className="hover:text-white transition-colors">Segurança</a></li>
                <li><a href="#termos" className="hover:text-white transition-colors">Termos de Uso</a></li>
              </ul>
            </div>
          </div>

          {/* Informações Legais */}
          <div className="border-t border-gray-700 pt-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-sm text-gray-400 mb-4">
                  Help Banco Digital Sociedade de Crédito Direto S.A. - CNPJ: 00.000.000/0001-00
                </p>
                <p className="text-sm text-gray-400">
                  Endereço: Av. Paulista, 1000 - São Paulo, SP - CEP: 01310-100
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-400">
                  SAC: 0800 123 4567 | Ouvidoria: 0800 765 4321
                </p>
                <p className="text-sm text-gray-400">
                  Atendimento: Segunda a Sexta, 8h às 20h
                </p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-8 mt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Help Banco Digital. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-xs mt-2">
              Autorizado pelo Banco Central do Brasil. Operação sujeita à análise e aprovação de crédito.
            </p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}
