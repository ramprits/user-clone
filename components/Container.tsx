import { SafeAreaView } from 'react-native-safe-area-context';
import { View, ViewProps } from 'react-native';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
} & ViewProps;

export const Container = ({ children, className = '', ...props }: ContainerProps) => {
  return (
    <View className="flex-1 bg-white">
      <SafeAreaView className={`flex-1 ${className}`} {...props}>
        {children}
      </SafeAreaView>
    </View>
  );
};
