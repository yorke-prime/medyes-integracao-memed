console.log(MdSinapsePrescricao);
if (MdSinapsePrescricao)
  MdSinapsePrescricao.event.add('core:moduleInit', (module) => {
    if (module.name === 'plataforma.prescricao') {
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
        MdHub.module.show('plataforma.prescricao');
      });
                  
      MdHub.event.add('prescricaoImpressa', function(prescriptionData) {
        console.log(prescriptionData)
      });
    }
  });

