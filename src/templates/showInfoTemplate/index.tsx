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
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  RequestStackParamList,
  SelectSaleStackParamList,
} from '../../navigation/interfaces';

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
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RequestStackParamList>>();
  const navigateProductDataScreen = useCallback(() => {
    navigate('ProductDataScreen');
  }, [navigate]);

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

  // const {navigate} =
  //   useNavigation<NativeStackNavigationProp<RequestStackParamList>>();
  // const navigateProductDataScreen = useCallback(() => {
  //   navigate('ProductDataScreen');
  // }, [navigate]);

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
            text={'Aceitar pedido'}
            loading={!!loading}
            variant="primary"
            textColor="white"
            onPress={navigateProductDataScreen}
          />
        )}
        {isProof && (
          <>
            <Margin />
            <Button
              text="Cancelar pedido"
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
            <Margin />
            {/* <Button
              text="Retornar aos pedidos"
              hasIcon={false}
              textColor="white"
              variant="primary"
              onPress={navigateToOrderDataScreen}
            /> */}
          </>
        )}
      </ContentButton>
    </BaseView>
  );
};

export default memo(ShowInfoTemplate);
