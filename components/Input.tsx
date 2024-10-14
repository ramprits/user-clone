import {
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
import { InputFieldProps } from '~/types/types';

const InputField = ({
  label,
  icon,
  secureTextEntry = false,
  labelStyle,
  containerStyle,
  inputStyle,
  iconStyle,
  className,
  ...props
}: InputFieldProps) => {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="my-2 w-full">
          <Text className={`font-JakartaSemiBold mb-3 text-lg ${labelStyle}`}>{label}</Text>
          <View
            className={`focus:border-primary-500 relative flex flex-row items-center justify-start rounded-full border border-neutral-100 bg-neutral-100  ${containerStyle}`}>
            {icon && <Image source={icon} className={`ml-4 h-6 w-6 ${iconStyle}`} />}
            <TextInput
              className={`font-JakartaSemiBold flex-1 rounded-full p-4 text-[15px] ${inputStyle} text-left`}
              secureTextEntry={secureTextEntry}
              {...props}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default InputField;
