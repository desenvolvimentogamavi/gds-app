import React, {memo, ReactNode, useCallback} from 'react';
import {useNavigation} from '@react-navigation/core';
import {CommonActions} from '@react-navigation/routers';
import {
  ContentInput,
  Scaffold,
  BaseView,
  Margin,
  ContainerMiddle,
  ContentContainerMiddle,
  ContentButton,
} from './styles';
import {Button, Markdown} from '../../components';

interface IShowInfoTemplate {
  title?: string;
  showButton?: boolean;
  titleCustomized: ReactNode;
  loading?: boolean;
  data: Array<{
    key: string | number;
    label: string;
    value: string | number;
    renderItem?: (value: string | number) => ReactNode;
  }>;
  isProof?: boolean;
  submit?: () => void;
}

const ShowInfoTemplate = ({
  title,
  data,
  loading,
  submit,
  isProof,
  showButton = true,
  titleCustomized,
}: IShowInfoTemplate) => {
  const {dispatch} = useNavigation();

  const navigateToOrderDataScreen = useCallback(() => {
    dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          {
            name: 'RequestStackNavigator',
          },
        ],
      }),
    );
  }, [dispatch]);

  return (
    <BaseView>
      <ContainerMiddle>
        <Scaffold
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}>
          {titleCustomized && titleCustomized()}
          {title && !titleCustomized && (
            <Markdown value={title} types="h2" color="blue" />
          )}
          <ContentContainerMiddle>
            {data.map(({label, key, renderItem, value}) => {
              return (
                <ContentInput key={key}>
                  {label && <Markdown value={label} color="blue" types="h3" />}
                  {renderItem ? (
                    renderItem(value)
                  ) : (
                    <Markdown value={value.toString()} types="p" />
                  )}
                </ContentInput>
              );
            })}
          </ContentContainerMiddle>
        </Scaffold>
      </ContainerMiddle>

      <ContentButton>
        {submit && showButton && (
          <Button
            text={'Ir para o GPS'}
            loading={!!loading}
            variant="primary"
            textColor="white"
          />
        )}
        {isProof && (
          <>
            <Margin />
            <Button
              text="Ir para o pagamento"
              hasIcon={false}
              textColor="white"
              variant="primary"
            />
            <Margin />
            <Button
              text="Registrar falha na entrega"
              hasIcon={false}
              textColor="white"
              variant="primary"
            />
            <Margin />
            <Button
              text="Retornar aos pedidos"
              hasIcon={false}
              textColor="white"
              variant="primary"
              onPress={navigateToOrderDataScreen}
            />
          </>
        )}
      </ContentButton>
    </BaseView>
  );
};

export default memo(ShowInfoTemplate);
