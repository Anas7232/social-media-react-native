import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/screenWrapper'
import { StatusBar } from 'expo-status-bar'
import { wp, hp } from '@/helpers/common'
import { them } from '@/constants/theme'
import Button from '@/components/Button'

const welcome = () => {
  return (
    <ScreenWrapper bg='white'>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Image style={styles.welcomeImage} resizeMode='contain' source={require('../assets/images/welcome.png')} />
        <View style={{ gap: 20 }}>
          <Text style={styles.title}> LinkUp! </Text>
          <Text style={styles.desc}>
            Where every thought finds a home and every image tells a story.
          </Text>
        </View>
        <View style={styles.footer}>
          <Button
            title="Getting Started"
            buttonStyle={{ marginHorizontal: wp(3) }}
            onPress={() => {}}
          />
          <View style={styles.bottomTextContainer}>
            <Text style={styles.loginText}>
              Already have an account!
            </Text>
            <Pressable>
              <Text style={styles.logintext}>
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    paddingHorizontal: wp(4)
  },
  welcomeImage: {
    height: hp(30),
    width: wp(100),
    alignSelf: 'center'
  },
  title: {
    color: them.colors.text,
    fontSize: hp(5),
    textAlign: 'center',
    fontWeight: '800'
  },
  desc: {
    textAlign: 'center',
    paddingHorizontal: wp(10),
    fontSize: hp(1.7),
    color: them.colors.text
  },
  footer: {
    gap: 30,
    width: '100%'
  },
  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  loginText: {
    textAlign: 'center',
    color: them.colors.text,
    fontSize: hp(1.6)
  },
  logintext: {
    textAlign: 'center',
    color: them.colors.primaryDark,
    fontSize: hp(1.6),
    fontWeight: '900'
  }
})