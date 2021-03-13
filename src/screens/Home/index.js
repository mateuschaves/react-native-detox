import React from 'react';

import {Container, Title, Input, Form, Label} from './styles';
export default function Home() {
  return (
    <Container>
      <Title testID="login-title">Olá,{'\n'}Seja bem vindo</Title>
      <Form>
				<Label>Email</Label>
        <Input
          testID="email-input"
					placeholderTextColor="#d7d7d7"
          placeholder="Ex. joao@gmail.com"
				/>
				<Label>Senha</Label>
				 <Input
          testID="password-input"
				/>
      </Form>
    </Container>
  );
}
