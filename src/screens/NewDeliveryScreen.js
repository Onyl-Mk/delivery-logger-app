// screens/NewDeliveryScreen.js
import React, { useState } from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Alert, ScrollView } from 'react-native'
import { useDeliveries } from '../services/DeliveriesContext'
import { MainStyles } from '../styles/styles'
import { useTranslation } from 'react-i18next'

const FormInput = ({ label, value, onChangeText, placeholder }) => (
  <View>
    <Text>{label}</Text>
    <TextInput
      placeholderTextColor="#64748b"
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      style={styles.input}
    />
  </View>
)

const PrioritySelector = ({ label, selectedValue, onSelect }) => {
  const { t } = useTranslation();
  const option = ['Low', 'Medium', 'High', 'Urgent']

  return(
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.priorityContainer}>
        {option.map((opt) => (
          <TouchableOpacity key={opt} onPress={() => onSelect(opt)} style={[styles.priorityButton, selectedValue === opt && styles.priorityButtonSelected]}>
            <Text style={[styles.priorityButtonText, selectedValue === opt && styles.priorityButtonTextSelected]}>{t(`priority.${opt}`)}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}


export default function NewDeliveryScreen({ navigation }) {

  const { addDelivery } = useDeliveries()
  const { t } = useTranslation();

  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 2

  const [formData, setFormData] = useState({
    trackingNumber: '',
    priority: 'Medium',
    recipient: '',
    address: '',
  })

  const handleInputChange = (field, value) => {
    setFormData(prevState => ({
      ...prevState,
      [field]: value
    }))
  }

  const handleNext = () => {
    if(currentStep === 1 && !formData.trackingNumber.trim()) {
      Alert.alert('Missing Info', 'Please provide a tracking number.')
      return
    }

    if (currentStep < totalSteps) {
      setCurrentStep(prevStep => prevStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prevStep => prevStep - 1)
    }
  }

  const handleSave = () => {
    if (!formData.trackingNumber.trim() || !formData.recipient.trim()) {
      Alert.alert('Required', 'Please fill out the recipient and address fields.')
      return
    }

    addDelivery(formData)

    setFormData({ trackingNumber: '', priority: 'Medium', recipient: '', address: '' })
    setCurrentStep(1)
    navigation.navigate('Deliveries', { screen: 'DeliveriesList' })
  }

  return(
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{t('addScreen.title')}</Text>
        <Text style={styles.stepCounter}>{currentStep}/{totalSteps}</Text>
      </View>
      <View style={styles.progressBarBackground}>
        <View style={[styles.progressBarFill, { width: `${(currentStep / totalSteps) * 100}%` }]} />
      </View>
      {currentStep === 1 && (
        <View style={styles.card}>
          <Text style={styles.cardHeader}>{t('addScreen.trackingInfo')}</Text>
          <FormInput
            label={t('addScreen.trackingNumber')}
            value={formData.trackingNumber}
            onChangeText={text => handleInputChange('trackingNumber', text)}
            placeholder={t('addScreen.trackingNumber')}
          />
          <PrioritySelector
            label={t('addScreen.priority')}
            selectedValue={formData.priority}
            onSelect={value => handleInputChange('priority', value)}
          />
        </View>
      )}

      {currentStep === 2 && (
        <View style={styles.card}>
          <Text style={styles.cardHeader}>{t('addScreen.recipientInfo')}</Text>
          <FormInput
            label={t('addScreen.recipientName')}
            value={formData.recipient}
            onChangeText={text => handleInputChange('recipient', text)}
            placeholder={t('addScreen.recipientName')}
          />
          <FormInput
            label={t('addScreen.address')}
            value={formData.address}
            onChangeText={text => handleInputChange('address', text)}
            placeholder={t('addScreen.address')}
          />
        </View>
      )}

      <View style={styles.footer}>
        {currentStep < totalSteps ? (
          <TouchableOpacity onPress={handleNext} style={styles.button}>
            <Text style={styles.buttonText}>{t('addScreen.next')}</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.buttonRow}>
          <TouchableOpacity onPress={handleBack} style={[styles.button, styles.backButton]}>
            <Text style={[styles.buttonText, styles.backButtonText]}>{t('addScreen.back')}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSave} style={[styles.button, styles.saveButton]}>
            <Text style={styles.buttonText}>{t('addScreen.save')}</Text>
          </TouchableOpacity>
          </View>
        )}
      </View>

    </ScrollView>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: MainStyles.colors.background,
  },
  header: {
      flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  stepCounter: {
    fontSize: 16,
    color: '#94a3b8',
    fontWeight: '600',
  },
  progressBarBackground: {
    height: 8,
    backgroundColor: '#1e293b',
    borderRadius: 4,
    margin: 20,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: MainStyles.colors.accent,
  },
  card: {
    backgroundColor: '#1e293b',
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 20,
  },
  cardHeader: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    color: 'white',
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#334155',
    color: 'white',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
    fontSize: 16,
  },
  footer: {
    padding: 20,
    marginTop: 20,
  },
  button: {
    backgroundColor: MainStyles.colors.accent,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    backButton: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: '#334155',
        flex: 1, // take up half the space
        marginRight: 10,
    },
    backButtonText: {
        color: '#94a3b8',
    },
    saveButton: {
        flex: 1, // take up half the space
        marginLeft: 10,
    },
    priorityContainer: {
        flexDirection: 'row',
        backgroundColor: MainStyles.colors.background,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#334155',
        overflow: 'hidden', // Ensures the borderRadius is respected by children
    },
    priorityButton: {
        flex: 1,
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    priorityButtonSelected: {
        backgroundColor: MainStyles.colors.accent,
    },
    priorityButtonText: {
        color: '#94a3b8',
        fontWeight: '600',
    },
    priorityButtonTextSelected: {
        color: 'white',
    },

})
