import { signOut } from 'next-auth/react';

import { SignOut } from '@phosphor-icons/react';

import { Box, Button } from '@react-bulk/web';

import { UiNavigationProps } from '../utils/types';

import { UiNavigation } from '.';
import useIsMobile from '../hooks/useIsMobile';

export default function Sidebar() {
  const isMobile = useIsMobile();

  const menus: UiNavigationProps[] = [
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

  return (
    <Box h="100%" style={{ overflow: 'hidden' }}>
      {menus.map((menu, key) => {
        return <UiNavigation key={key} {...menu} />;
      })}

      <Button
        startAddon={<SignOut size={24} color="white" />}
        mt={'auto'}
        mb={1}
        onPress={signOut}
        label={!isMobile ? 'Logout' : ''}
      ></Button>
    </Box>
  );
}
