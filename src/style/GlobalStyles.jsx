import { StyleSheet } from 'react-native';

export const placeholderColor = '#B1977A';

const globalStyles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 24,
    backgroundColor: '#FFF8F0',
  },

  titulo: {
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 26,
    color: '#8B5E3C',
    fontWeight: 'bold',
    letterSpacing: 1.1,
    backgroundColor: '#F9E0BB',
    paddingVertical: 16,
    borderRadius: 12,
  },

  texto: {
    fontSize: 16,
    color: '#6D4C41',
    marginBottom: 14,
    lineHeight: 24,
  },

  error: {
    color: '#B71C1C',
    backgroundColor: '#FFEBEE',
    padding: 12,
    borderRadius: 8,
    textAlign: 'center',
    fontWeight: '600',
    marginTop: 20,
  },

  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#E6CFC1',
    borderRadius: 10,
    paddingHorizontal: 14,
    backgroundColor: '#FFFDF9',
    color: '#6D4C41',
    fontSize: 16,
  },

  botonPrimario: {
    backgroundColor: '#F4A261',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },

  textoBoton: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  imagenFoco: {
    width: 140,
    height: 140,
    marginVertical: 24,
    borderRadius: 12,
    backgroundColor: '#F9E0BB',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#E6CFC1',
    resizeMode: 'contain',
  },

  navigator: {
    backgroundColor: '#FFF8F0',
  },
  header: {
    backgroundColor: '#F9E0BB',
    borderBottomWidth: 1,
    borderBottomColor: '#E6CFC1',
  },
  headerTitle: {
    color: '#8B5E3C',
    fontSize: 20,
    fontWeight: 'bold',
  },
  screenContainer: {
    flex: 1,
    backgroundColor: '#FFF8F0',
    padding: 20,
  },
});

export default globalStyles;
