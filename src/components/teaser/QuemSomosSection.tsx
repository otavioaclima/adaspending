
import React from 'react';
import { Users, Globe, FilePen, BadgeCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const QuemSomosSection = () => {
  return (
    <section id="quem-somos" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Quem Somos</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça a equipe por trás do ADAspending e nosso compromisso com a transparência na governança Cardano.
          </p>
        </div>

        <Card className="mb-10 overflow-hidden border-none shadow-lg">
          <div className="bg-cardano-blue text-white p-6">
            <h3 className="text-xl font-semibold flex items-center">
              <Users className="mr-2 h-5 w-5" /> 
              Nossa Equipe
            </h3>
          </div>
          <CardContent className="p-6">
            <p className="text-gray-700 mb-4">
              Somos a mesma equipe por trás do <a href="https://governancespace.com" target="_blank" rel="noopener noreferrer" className="text-cardano-blue font-medium hover:underline">GovernanceSpace.com</a> e do <a href="https://cardanofeed.com" target="_blank" rel="noopener noreferrer" className="text-cardano-blue font-medium hover:underline">CardanoFeed.com</a>, plataformas reconhecidas no ecossistema Cardano.
            </p>
            <p className="text-gray-700">
              Com anos de experiência no ecossistema Cardano, nossa equipe está profundamente envolvida nos processos de governança e na comunidade, buscando sempre contribuir para um ecossistema mais transparente e acessível.
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="overflow-hidden border-none shadow-lg">
            <div className="bg-cardano-blue text-white p-6">
              <h3 className="text-xl font-semibold flex items-center">
                <Globe className="mr-2 h-5 w-5" /> 
                Nossa Missão
              </h3>
            </div>
            <CardContent className="p-6">
              <p className="text-gray-700">
                Nosso objetivo é promover a transparência financeira dentro do ecossistema Cardano, tornando os dados de financiamento e governança acessíveis a todos os membros da comunidade de forma fácil e intuitiva.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-none shadow-lg">
            <div className="bg-cardano-blue text-white p-6">
              <h3 className="text-xl font-semibold flex items-center">
                <FilePen className="mr-2 h-5 w-5" /> 
                Nosso Compromisso
              </h3>
            </div>
            <CardContent className="p-6">
              <p className="text-gray-700">
                Estamos comprometidos com a disponibilização de dados precisos e verificáveis sobre como os fundos da tesouraria Cardano são alocados e utilizados, contribuindo para um ecossistema mais transparente e responsável.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <BadgeCheck className="mr-2 h-5 w-5 text-cardano-blue" /> 
            Por que confiar em nós?
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-cardano-blue mr-2">•</span>
              <span className="text-gray-700">Experiência comprovada no ecossistema Cardano</span>
            </li>
            <li className="flex items-start">
              <span className="text-cardano-blue mr-2">•</span>
              <span className="text-gray-700">Desenvolvimento de plataformas de referência como GovernanceSpace e CardanoFeed</span>
            </li>
            <li className="flex items-start">
              <span className="text-cardano-blue mr-2">•</span>
              <span className="text-gray-700">Participação ativa nos processos de governança da Cardano</span>
            </li>
            <li className="flex items-start">
              <span className="text-cardano-blue mr-2">•</span>
              <span className="text-gray-700">Compromisso com dados abertos e transparência</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default QuemSomosSection;
