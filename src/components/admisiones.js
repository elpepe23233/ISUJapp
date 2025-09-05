import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; // Puedes usar cualquier set

export default function AdmisionesScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      
      <Text style={styles.sectionTitle}>Proceso de Admisión</Text>
      <Text style={styles.description}>
        Sigue estos pasos para aplicar al Instituto Superior Universitario Japón:
      </Text>

      {[
        {
          icon: 'edit',
          title: 'Solicitud en línea',
          note: 'Completa el formulario en línea',
        },
        {
          icon: 'file-text',
          title: 'Documentos requeridos',
          note: 'Envía los documentos necesarios',
        },
        {
          icon: 'calendar',
          title: 'Entrevista',
          note: 'Participa en una entrevista',
        },
        {
          icon: 'check-circle',
          title: 'Resultados',
          note: 'Consulta los resultados de tu aplicación',
        },
      ].map((item, index) => (
        <View key={index} style={styles.stepItem}>
          <Icon name={item.icon} size={20} color="#000" style={{ marginRight: 12 }} />
          <View>
            <Text style={styles.stepTitle}>{item.title}</Text>
            <Text style={styles.stepNote}>{item.note}</Text>
          </View>
        </View>
      ))}

      
      <Text style={styles.sectionTitle}>Documentos Requeridos</Text>
      <Text style={styles.description}>Asegúrate de tener los siguientes documentos listos para la aplicación:</Text>

      {[
        'Copia de la cédula de identidad',
        'Certificado de estudios secundarios',
        'Foto tamaño carnet',
        'Formulario de aplicación completo',
      ].map((doc, index) => (
        <View key={index} style={styles.checkboxItem}>
          <View style={styles.checkbox} />
          <Text style={styles.checkboxLabel}>{doc}</Text>
        </View>
      ))}

      
      <Text style={styles.sectionTitle}>Fechas Importantes</Text>

      {[
        { label: 'Fecha límite de aplicación', value: '30 de junio de 2024' },
        { label: 'Publicación de resultados', value: 'Agosto de 2024' },
        { label: 'Fecha de entrevistas', value: 'Julio de 2024' },
      ].map((item, index) => (
        <View key={index} style={styles.dateItem}>
          <Text style={styles.dateLabel}>{item.label}</Text>
          <Text style={styles.dateValue}>{item.value}</Text>
        </View>
      ))}

      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Aplicar Ahora</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#444',
    marginBottom: 10,
  },
  stepItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  stepTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  stepNote: {
    fontSize: 14,
    color: '#555',
  },
  checkboxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
    borderRadius: 4,
  },
  checkboxLabel: {
    fontSize: 14,
    color: '#444',
  },
  dateItem: {
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 8,
  },
  dateLabel: {
    fontSize: 14,
    color: '#888',
  },
  dateValue: {
    fontSize: 15,
    color: '#000',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#002D72', // Azul oscuro
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});