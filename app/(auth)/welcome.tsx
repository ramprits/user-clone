import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useRef, useState } from 'react';
import { Container } from '~/components/Container';
import Swiper from 'react-native-swiper';
import { useRouter } from 'expo-router';
import { onboarding } from '~/constants';
import { Button } from '~/components/Button';

const Welcome = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();
  const isLastSlide = activeIndex === onboarding.length - 1;

  return (
    <Container className="mx-3 flex items-center justify-center">
      <View className="flex flex-1">
        <View className="flex items-end justify-end">
          <TouchableOpacity onPress={() => router.push('/(auth)/register')}>
            <Text>Skip</Text>
          </TouchableOpacity>
        </View>
        <Swiper
          ref={swiperRef}
          loop={false}
          dot={<View className="mx-1 h-[4px] w-[32px] rounded-full bg-[#E2E8F0]" />}
          activeDot={<View className="mx-1 h-[4px] w-[32px] rounded-full bg-[#0286FF]" />}
          onIndexChanged={(index) => setActiveIndex(index)}>
          {onboarding.map((onboard) => (
            <View key={onboard.id} className="mt-4 flex items-center justify-center p-4">
              <Image source={onboard.image} className="h-[300px] w-full" resizeMode="contain" />
              <Text className="text-center text-3xl font-bold">{onboard.title}</Text>
              <Text className="mt-2.5 text-center text-lg font-medium text-slate-600">
                {onboard.description}
              </Text>
            </View>
          ))}
        </Swiper>

        <Button
          title={isLastSlide ? 'Get Started' : 'Next'}
          onPress={() => {
            isLastSlide ? router.replace('/(auth)/register') : swiperRef.current?.scrollBy(1);
          }}
          variant="secondary"
        />
      </View>
    </Container>
  );
};

export default Welcome;
