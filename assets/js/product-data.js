window.CORRE4 = {
  produto: 'Olympikus Corre 4',
  subtitulo: 'Rodagem • treinos diários • provas • AR no pé',
  modelo3d: 'models/corre4.glb',
  fonteConsulta: 'Informações públicas consultadas em 29/05/2026 em páginas oficiais Olympikus e documentação técnica pública.',
  resumo: 'Tênis de rodagem da família Corre, pensado para treinos frequentes, longões e provas, com proposta de conforto, durabilidade, resposta e versatilidade.',
  ficha: [
    ['Categoria', 'Rodagem'],
    ['Peso', '219 g'],
    ['Drop', '8 mm'],
    ['Cabedal', 'Oxitec 2.0'],
    ['Entressola', 'Eleva Pro 2.0'],
    ['Palmilha', 'NT-X'],
    ['Placa', 'Não possui'],
    ['Solado', 'Gripper Plus'],
    ['World Athletics', 'Aprovado, conforme página oficial Corre 4']
  ],
  tecnologias: {
    cabedal: {
      titulo: 'Cabedal • Oxitec 2.0',
      texto: 'Tecnologia localizada no cabedal e na lingueta, com composição de fios de monofilamento e poliéster. A proposta é leveza e respirabilidade.',
      venda: 'Use quando o cliente reclama de calor, quer ajuste confortável ou vai correr com frequência.'
    },
    entressola: {
      titulo: 'Entressola • Eleva Pro 2.0',
      texto: 'Espuma com foco em resiliência, conforto e responsividade, equilibrando amortecimento e retorno para rodagem.',
      venda: 'Argumento para treinos diários, longões e cliente que quer conforto sem perder resposta.'
    },
    solado: {
      titulo: 'Solado • Gripper Plus',
      texto: 'Borracha antiderrapante para contato firme com o solo. A página oficial destaca fórmula com mais durabilidade e resistência ao deslizamento.',
      venda: 'Use para explicar segurança, durabilidade e confiança no asfalto.'
    },
    contraforte: {
      titulo: 'Contraforte e calcanhar',
      texto: 'Região traseira estruturada para estabilidade, encaixe e sensação de segurança no calcanhar durante a passada.',
      venda: 'Bom para cliente que quer o calcanhar firme e não gosta de tênis “sambando”.'
    },
    placa: {
      titulo: 'Placa / apoio',
      texto: 'O Corre 4 não é apresentado como tênis de placa. A proposta é rodagem versátil, amortecimento e resposta equilibrada.',
      venda: 'Evita vender promessa errada. Para cliente que quer naturalidade, é ponto positivo.'
    }
  },
  indicacoes: [
    'Rodagem e treinos regulares',
    'Longões e preparação para meia maratona/maratona',
    'Cliente que quer tênis único para grande parte dos treinos',
    'Corredor que busca conforto, durabilidade e resposta sem placa'
  ],
  observacoes: [
    'O arquivo GLB atual é temporário/estilizado. Quando você gerar um GLB profissional em Meshy, Tripo, Polycam ou KIRI, substitua models/corre4.glb mantendo o mesmo nome.',
    'O provador no pé usa câmera + MediaPipe + Three.js. Ele melhora o encaixe automaticamente por landmarks, mas depende de iluminação, enquadramento e qualidade do GLB.',
    'Para medição de numeração com régua/QR impresso, o próximo módulo deve usar calibração por marcador físico de tamanho conhecido.'
  ],
  sources: [
    { label: 'Olympikus • Corre 4', url: 'https://www.olympikus.com.br/corre-4' },
    { label: 'Olympikus • Tênis Corre 4', url: 'https://www.olympikus.com.br/tenis-corre-4' },
    { label: 'Olympikus • Família Corre', url: 'https://www.olympikus.com.br/familia-corre-50anos' },
    { label: 'MediaPipe Pose Landmarker', url: 'https://ai.google.dev/edge/mediapipe/solutions/vision/pose_landmarker' },
    { label: 'model-viewer AR', url: 'https://modelviewer.dev/examples/augmentedreality/' }
  ]
};
