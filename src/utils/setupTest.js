require('react-native-gesture-handler/jestSetup');

jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));

jest.mock('react-native/Libraries/Animated/Easing', () => ({
  bezier: () => (t) => t,
  ease: (t) => t,
  linear: (t) => t,
}));

jest.mock('@react-native-async-storage/async-storage', () => {
    return {
        getItem: async (...args) => args,
        setItem: async (...args) => args,
        removeItem: async (...args) => args,
    }
});

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
    return {
        ...jest.requireActual('@react-navigation/native'),
        useFocusEffect: jest.fn(),
        useIsFocused: () => true,
        useNavigation: () => ({
            navigate: mockedNavigate,
        })
    }
});