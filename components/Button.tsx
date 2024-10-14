import { forwardRef } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

type ButtonProps = {
  title: string;
  variant?: ButtonVariant;
} & TouchableOpacityProps;

export const Button = forwardRef<TouchableOpacity, ButtonProps>(
  ({ title, variant = 'primary', ...touchableProps }, ref) => {
    return (
      <TouchableOpacity
        ref={ref}
        {...touchableProps}
        className={`${styles.button} ${styles[variant]} ${touchableProps.className}`}>
        <Text className={`${styles.buttonText} ${styles[`${variant}Text`]}`}>{title}</Text>
      </TouchableOpacity>
    );
  }
);

const styles = {
  button: 'items-center rounded-[28px] shadow-md p-4',
  primary: 'bg-yellow-600',
  secondary: 'bg-blue-500',
  outline: 'bg-transparent border-2 border-yellow-600',
  buttonText: 'text-lg font-semibold text-center',
  primaryText: 'text-white',
  secondaryText: 'text-white',
  outlineText: 'text-yellow-600',
};
