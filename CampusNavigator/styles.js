import { StyleSheet } from 'react-native';

export const colors = {
  oxfordBlue: '#0E1C36',
  jordyBlue: '#AFCBFF',
  lightCyan: '#D7F9FF',
  ivory: '#F9FBF2',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.ivory,
  },
  text: {
    fontFamily: 'Outfit', // replace with the actual name of the font
    color: colors.oxfordBlue,
  },
  // ...add more global styles as needed
});
