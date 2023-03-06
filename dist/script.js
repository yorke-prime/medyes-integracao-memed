MdSinapsePrescricao.event.add('core:moduleInit', (module) => {
  if (module.name === 'plataforma.prescricao') {
    MdHub.command.send('plataforma.prescricao', 'setFeatureToggle', {
       deletePatient: false,
       removePatient: false,
       editPatient: false,
       buttonClose: false,
    }); 
                
    MdHub.command.send('plataforma.prescricao', 'setPaciente', {
      external_id: '12312312312',
      nome: 'José da Silva',
      cpf: '87671504203',
      telefone: '99999999999',
    }).then(function() {
      MdHub.module.show('plataforma.prescricao');
    });
                
    MdHub.event.add('prescricaoImpressa', function(prescriptionData) {
      console.log(prescriptionData)
    });
  }
});