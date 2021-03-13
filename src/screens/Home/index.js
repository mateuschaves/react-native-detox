import React from 'react';

import {Container, Title, Input, Form, Label} from './styles';
export default function Home() {
  return (
    <Container>
      <Title>Olá,{'\n'}Seja bem vindo</Title>
      <Form>
				<Label>Email</Label>
        <Input
					placeholderTextColor="#d7d7d7"
          placeholder="Ex. joao@gmail.com"
				/>
				<Label>Senha</Label>
				 <Input
				/>
      </Form>
    </Container>
  );
}
