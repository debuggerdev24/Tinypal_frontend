import React, { useContext } from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { ProgressProvider, ProgressContext } from './src/component/ProgressContext';
import { DoYouKnow } from './src/screens/DoYouKnow';
import { FlashCard } from './src/screens/FlashCard';

function App() {
  return (
    <ProgressProvider>
      <SafeAreaProvider>
        <AppContent />
      </SafeAreaProvider>
    </ProgressProvider>
  );
}

function AppContent() {
  const { visible, setVisible } = useContext(ProgressContext);
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: safeAreaInsets.top,
          paddingBottom: safeAreaInsets.bottom,
        },
      ]}
    >
      <StatusBar
        backgroundColor={visible === 'doyouknow' ? '#470019' : '#002433'}
        barStyle={'light-content'}
      />

      {visible === 'menu' && (
        <>
          <Text style={styles.title}>Welcome 👋</Text>
          <Text style={styles.subtitle}>Choose a section to get started</Text>

          <TouchableOpacity
            onPress={() => setVisible('doyouknow')}
            activeOpacity={0.8}
            style={styles.button}
          >
            <Text style={styles.buttonText}>✨ Do You Know?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setVisible('flashcard')}
            activeOpacity={0.8}
            style={[styles.button, styles.altButton]}
          >
            <Text style={[styles.buttonText, styles.altButtonText]}>📖 Flash Card</Text>
          </TouchableOpacity>
        </>
      )}

      {visible === 'doyouknow' && <DoYouKnow />}
      {visible === 'flashcard' && <FlashCard />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002433',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFFFFF99',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    width: '85%',
    paddingVertical: 16,
    borderRadius: 12,
    backgroundColor: '#4C7B9E',
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  altButton: {
    backgroundColor: '#E7809E',
  },
  altButtonText: {
    color: '#002433',
    fontWeight: '700',
  },
});

export default App;
