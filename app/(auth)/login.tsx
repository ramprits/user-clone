import { View, Text } from 'react-native';
import React from 'react';
import { Container } from '~/components/Container';
import InputField from '~/components/Input';

const LoginPage = () => {
  return (
    <Container>
      <Text>Login Page</Text>
      <InputField label="Email" />
    </Container>
  );
};

export default LoginPage;
