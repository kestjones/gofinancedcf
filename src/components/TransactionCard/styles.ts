import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import  {RFValue} from 'react-native-responsive-fontsize';

interface TransactionProps {
  type: 'positive' | 'negative';

}


export const Container = styled.View`
background-color: ${({theme}) => theme.colors.shape};
border-radius: 5px;
padding:17px 24px;

margin-bottom: 16px;
`;


export const Title = styled.Text `
font-family: ${({theme})=> theme.fonts.regular};
font-size: ${RFValue(14)}px;
`;

export const Amount = styled.Text<TransactionProps> `
font-size: ${RFValue(20)}px;
font-family: ${({theme})=> theme.fonts.regular};
color: ${({theme, type})=> 
type === 'positive' ? theme.colors.success : theme.colors.attention};

margin-top: 2px;

`;

export const Footer = styled.View ` 
 flex-direction: row;  /*coloca um ao lado do outro */
justify-content: space-between;
align-items:center; /*ajusta no centra pa posicao vertical */
margin-top: 19px;
`;

export const Category = styled.View `
 flex-direction: row;  /*coloca um ao lado do outro */
 align-items:center; /*ajusta no centra pa posicao vertical */

`;

export const Icon = styled(Feather)`
font-size:  ${RFValue(20)}px;
color: ${({theme}) => theme.colors.text};
`;

export const CategoryName = styled.Text `

font-size:  ${RFValue(14)}px;
color: ${({theme}) => theme.colors.text};
margin-left: 17px;
`;

export const Date = styled.Text ` 
font-size:  ${RFValue(14)}px;
color: ${({theme}) => theme.colors.text};


`;
