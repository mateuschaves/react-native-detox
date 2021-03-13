import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 16px;
  align-items: center;
`;

export const Form = styled.View`
  flex: 1;
  width: 90%;
  justify-content: center;
  align-content: center;
`;

export const Label = styled.Text`
  color: #d7d7d7;
  font-size: 14px;
  margin: 16px 0px 5px 0px;
`;

export const Input = styled.TextInput`
  border-color: #d7d7d7;
  border-width: 1px;
  border-radius: 8px;
  padding: 8px;
  color: #000;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #d7d7d7;
  text-align: left;
  align-self: flex-start;
  margin-top: 20px;
`;
