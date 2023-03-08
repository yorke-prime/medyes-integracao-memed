console.log(MdSinapsePrescricao);
MdSinapsePrescricao.event.add('core:moduleInit', (module) => {
  if (module.name === 'plataforma.prescricao') {
    document.getElementById('status').innerHTML="Status: Iniciado"
    MdHub.command.send('plataforma.prescricao', 'setFeatureToggle', {
      deletePatient: true,
      removePatient: true,
      editPatient: true,
      buttonClose: true,
    });
    
                
    MdHub.command.send('plataforma.prescricao', 'setPaciente', {
      external_id: paciente.external_id || '',
      nome: paciente.nome || '',
      cpf: paciente.cpf || '',
      telefone: paciente.cpf || '',
    }).then(function() {
      document.getElementById('status').innerHTML="Status: Paciente enviado"
      MdHub.module.show('plataforma.prescricao');
    });
                
    MdHub.event.add('prescricaoImpressa', function(prescriptionData) {
      console.log(prescriptionData)
    });
  }
});
 