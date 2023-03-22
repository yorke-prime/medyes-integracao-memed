MdSinapsePrescricao.event.add('core:moduleInit', (module) => {
  document.getElementById('status').innerHTML=`Carregando: ${module.name}`
  if (module.name === 'plataforma.prescricao') {
    document.getElementById('status').innerHTML="Carregando: Iniciado"
    MdHub.command.send('plataforma.prescricao', 'setFeatureToggle', {
      deletePatient: false,
      removePatient: false,
      editPatient: false,
      buttonClose: true,
    });
    
                
    MdHub.command.send('plataforma.prescricao', 'setPaciente', {
      external_id: paciente.external_id || '',
      nome: paciente.nome || '',
      cpf: paciente.cpf || '',
      telefone: paciente.cpf || '',
    }).then(function() {
      document.getElementById('status').innerHTML="Carregando: Paciente enviado"
      MdHub.module.show('plataforma.prescricao');
    });
                
    MdHub.event.add('prescricaoImpressa', function(prescriptionData) {});
  } else if (module.name === 'platform.digital-signature') {
    const button = document.createElement('button');
    button.innerHTML="Abrir a Memed"
    button.classList.add('refresh')
    button.addEventListener('click', () => {
      document.getElementById('status').innerHTML="Carregando: Iniciado"
      MdHub.command.send('plataforma.prescricao', 'setFeatureToggle', {
        deletePatient: false,
        removePatient: false,
        editPatient: false,
        buttonClose: true,
      });
      
                  
      MdHub.command.send('plataforma.prescricao', 'setPaciente', {
        external_id: paciente.external_id || '',
        nome: paciente.nome || '',
        cpf: paciente.cpf || '',
        telefone: paciente.cpf || '',
      }).then(function() {
        document.getElementById('status').innerHTML="Carregando: Paciente enviado"
        MdHub.module.show('plataforma.prescricao');
      });
                  
      MdHub.event.add('prescricaoImpressa', function(prescriptionData) {});
    })
    document.getElementById('caixa').appendChild(button)
    }
});
 