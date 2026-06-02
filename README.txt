CORRE 4 AR PRO — SISTEMA GITHUB PAGES
======================================

Arquivos principais:
- index.html        -> tela principal premium com 3D 360°, ficha técnica e links
- comparador.html   -> comparador comercial de modelos GLB
- provador-pe.html  -> IA no pé: câmera + mira + lock + tracking automático
- models/corre4.glb -> modelo GLB temporário/funcional
- assets/           -> CSS, JS e imagens de referência

COMO SUBIR NO GITHUB PAGES
--------------------------
1. Envie todo o conteúdo desta pasta para o repositório GitHub.
2. Ative GitHub Pages.
3. Abra:
   https://SEU-USUARIO.github.io/SEU-REPO/index.html

COMO TESTAR A CÂMERA
--------------------
Abra pelo HTTPS do GitHub Pages:
- https://SEU-USUARIO.github.io/SEU-REPO/provador-pe.html

Não teste por file:// nem C:/Users/... porque a câmera do navegador depende de contexto seguro.

COMO FUNCIONA O IA NO PÉ
------------------------
1. Toque em "Abrir câmera agora".
2. Coloque o pé dentro da mira.
3. Mantenha parado por 5 segundos.
4. O sistema trava o pé e encaixa o tênis virtual.
5. Depois o tênis acompanha o pé em tempo real usando landmarks de tornozelo, calcanhar e ponta do pé.

O provador usa MediaPipe Pose Landmarker + Three.js. Quando o GLB profissional tiver âncoras TOE_ANCHOR, HEEL_ANCHOR, FOOT_ANCHOR, SOLE_CENTER, ANKLE_GUIDE e INSTEP_GUIDE, o alinhamento ficará melhor.

TROCAR O GLB TEMPORÁRIO PELO GLB PROFISSIONAL
---------------------------------------------
Quando você gerar o modelo perfeito em Meshy, Tripo, Polycam, KIRI ou modelagem manual:
1. Renomeie o arquivo para: corre4.glb
2. Substitua o arquivo em: models/corre4.glb
3. Não precisa mexer no HTML.

INFORMAÇÕES DO PRODUTO
----------------------
As informações do Corre 4 foram organizadas em assets/js/product-data.js.
Base usada em páginas públicas oficiais Olympikus consultadas em 29/05/2026:
- https://www.olympikus.com.br/corre-4
- https://www.olympikus.com.br/tenis-corre-4
- https://www.olympikus.com.br/familia-corre-50anos

LIMITAÇÃO HONESTA
-----------------
O sistema está pronto para visualização, comparação e provador. O modelo 3D atual é temporário/estilizado. Para apresentação a grandes marcas, o próximo passo é substituir models/corre4.glb por um GLB profissional.

PRÓXIMA ETAPA — RÉGUA / QR PARA MEDIR O PÉ
------------------------------------------
A ideia comercial é viável como próximo módulo:
- cliente imprime um marcador/régua com QR Code
- coloca o pé sobre o marcador
- câmera detecta o marcador com tamanho real conhecido
- sistema calcula comprimento e largura do pé
- aplica tabela do fabricante/revendedor para recomendar numeração

Isso exige uma tabela oficial de medidas por marca/modelo e calibração por marcador físico.

Powered by thIAguinho Soluções Digitais


NOVA PÁGINA PRINCIPAL — AR LIVRE + CALÇAR
-----------------------------------------
Arquivo novo:
- ar-livre-calcador.html

Fluxo:
1. Abrir câmera.
2. Ajustar o tênis manualmente em cima do pé.
3. Arrastar, pinçar, girar e usar botões finos.
4. Clicar em "Travar posição".
5. Clicar em "Calçar no pé".

Esta versão não fica presa em "procurando pé".
Ela prioriza o ajuste manual perfeito feito pelo usuário.
