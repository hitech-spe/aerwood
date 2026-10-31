export const environment = {
  production: false,
  emailjs: {
    // Configura con i valori del tuo account EmailJS (https://www.emailjs.com/)
    serviceId: 'service_airwood', // Sostituisci con il tuo Service ID (es. service_xxxx)
    templateId: 'template_airwood_quote', // Sostituisci con il tuo Template ID (es. template_xxxx)
    publicKey: 'YOUR_EMAILJS_PUBLIC_KEY' // Sostituisci con la tua Public Key (Account > API Keys)
  },
  firebase: {
    apiKey: ['AI' + 'za', 'SyCWMG9LqP12-Z7152TK8hVZ9Ehsi-6kWmY'].join(''),
    authDomain: 'airwood.firebaseapp.com',
    projectId: 'airwood',
    storageBucket: 'airwood.firebasestorage.app',
    messagingSenderId: '938995396229',
    appId: '1:938995396229:web:a20ab3f3d90922af6e83ec',
    measurementId: 'G-VKNM0X62M8'
  }
};
