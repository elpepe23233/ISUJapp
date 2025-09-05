import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Modal, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const carreras = [
  {
    icon: 'truck',
    titulo: 'Logística',
    descripcion: 'Forma profesionales capaces de gestionar y optimizar procesos logísticos.',
    detalle: 'La carrera de Logística prepara a profesionales para planificar, coordinar y controlar los procesos de transporte, distribución, almacenamiento e inventarios en empresas nacionales e internacionales.',
  },
  {
    icon: 'code',
    titulo: 'Ingeniería en Sistemas',
    descripcion: 'Prepara expertos en el desarrollo y gestión de sistemas informáticos.',
    detalle: 'La Ingeniería en Sistemas forma profesionales en programación, redes, bases de datos, ciberseguridad e inteligencia artificial, con alta demanda en el sector tecnológico.',
  },
  {
    icon: 'edit-3',
    titulo: 'Ingeniería Civil',
    descripcion: 'Prepara expertos en el diseño y construcción de obras civiles.',
    detalle: 'Los ingenieros civiles diseñan, planifican y supervisan proyectos de infraestructura como carreteras, puentes, edificios y sistemas hidráulicos.',
  },
  {
    icon: 'bar-chart-2',
    titulo: 'Ciencia de Datos',
    descripcion: 'Prepara expertos en el análisis y gestión de datos para la toma de decisiones.',
    detalle: 'La Ciencia de Datos combina matemáticas, estadística y programación para analizar grandes volúmenes de datos y generar soluciones estratégicas.',
  },
  {
    icon: 'users',
    titulo: 'Gestión de Recursos Humanos',
    descripcion: 'Forma profesionales en la gestión de recursos humanos y relaciones laborales.',
    detalle: 'La carrera en RRHH enseña técnicas de reclutamiento, capacitación, motivación y gestión del talento humano para potenciar el rendimiento organizacional.',
  },
];

export default function CarrerasScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [carreraSeleccionada, setCarreraSeleccionada] = useState(null);

  const abrirModal = (carrera) => {
    setCarreraSeleccionada(carrera);
    setModalVisible(true);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
        <TextInput
          placeholder="Buscar carreras"
          style={styles.searchBar}
          placeholderTextColor="#888"
        />

        {carreras.map((item, index) => (
          <TouchableOpacity key={index} style={styles.card} onPress={() => abrirModal(item)}>
            <View style={styles.iconBox}>
              <Icon name={item.icon} size={22} color="#000" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.titulo}>{item.titulo}</Text>
              <Text style={styles.descripcion}>{item.descripcion}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

     
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {carreraSeleccionada && (
              <>
                <Text style={styles.modalTitulo}>{carreraSeleccionada.titulo}</Text>
                <Text style={styles.modalDetalle}>{carreraSeleccionada.detalle}</Text>

                <Pressable style={styles.btnCerrar} onPress={() => setModalVisible(false)}>
                  <Text style={styles.btnCerrarText}>Cerrar</Text>
                </Pressable>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 80,
    flex: 1,
  },
  searchBar: {
    backgroundColor: '#F0F0F0',
    padding: 12,
    borderRadius: 12,
    marginBottom: 20,
    fontSize: 16,
    color: '#000',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 18,
  },
  iconBox: {
    backgroundColor: '#F1F1F1',
    padding: 12,
    borderRadius: 12,
    marginRight: 12,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  descripcion: {
    fontSize: 14,
    color: '#555',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    width: '100%',
    maxWidth: 400,
    elevation: 5,
  },
  modalTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  modalDetalle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  btnCerrar: {
    backgroundColor: '#5a00d8ff',
    padding: 12,
    borderRadius: 10,
    alignSelf: 'flex-end',
  },
  btnCerrarText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
