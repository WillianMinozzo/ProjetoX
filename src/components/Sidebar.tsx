import { signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';

import { Animation, Box, Button } from '@react-bulk/web';

import Navigation from './Navigation';

export default function Sidebar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const menus = [
    {
      title: 'Atividade Complementar',
      href: '/atividade',
      icon: 'FileText',
    },
    { title: 'Biliotecas Digitais', href: '/bibliotecas-digitais', icon: 'Books' },
    { title: 'Avisos', href: '/avisos', icon: 'Megaphone' },
    { title: 'Carteira Estudantil', href: '/carteira-estudantil', icon: 'IdentificationCard' },
    { title: 'Cursos Livres', href: '/cursos-livres', icon: 'BookOpen' },
    { title: 'Documentos', href: '/documentos', icon: 'FileDoc' },
    { title: 'Financeiro', href: '/financeiro', icon: 'CurrencyCircleDollar' },
    { title: 'Indique e Ganhe', href: '/indique-ganhe', icon: 'WechatLogo' },
    { title: 'Meus Dados', href: '/meus-dados', icon: 'UserCircle' },
    { title: 'Office 365', href: '/office365', icon: 'SquaresFour' },
    { title: 'Relação Disciplinas', href: '/relacao-disciplinas', icon: 'Medal' },
    { title: 'Renovação de Matrícula', href: '/renovacao', icon: 'Star' },
    { title: 'Serviço de Atenção ao Aluno', href: '/servico-atencao', icon: 'Megaphone' },
  ];

  const fromAnimation = isMobile ? 290 : 50;
  const toWidth = isMobile ? 50 : 290;

  return (
    <Box h="100%" w={toWidth} style={{ overflow: 'hidden' }}>
      <Animation in mh={'auto'} speed={1000} from={{ width: fromAnimation }} to={{ width: toWidth }}>
        {menus.map((menu, key) => {
          return <Navigation key={key} {...menu} />;
        })}
      </Animation>
      <Button mt={'auto'} mb={1} mh={3} onPress={signOut}>
        Logout
      </Button>
    </Box>
  );
}
