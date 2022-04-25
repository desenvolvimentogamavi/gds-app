import React from 'react';
import ShowInfoTemplate from '../../../../templates/showInfoTemplate';

const OrderDataScreen = () => {
  const data = [
    {
      key: 'desc',
      label: 'Como o cliente quer ser chamado',
      value: 'André',
    },
    {
      key: 'name',
      label: 'Nome',
      value: 'André Henrique de Oliveira \nCPF: 222.644.555-09',
    },
    {
      key: 'tel',
      label: 'Telefone',
      value: '(41) 99900-9009',
    },
    {
      key: 'end',
      label: 'Endereço',
      value: 'Rua Padre Dehon, 2340. \nBoqueirão',
    },
    {
      key: 'pedido',
      label: 'Pedido',
      value: 'Botijão P13',
    },
  ];
  return (
    <ShowInfoTemplate
      data={data}
      submit
      isProof
      title="Dados do pedido"
      // submit={navigateToWritePasswordScreen}
      titleCustomized={undefined}
    />
  );
};

export default OrderDataScreen;
