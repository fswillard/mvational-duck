// Constants
const LINES = ['Nade!','Mergulhe!','Quack!|Quack!','Pense.|Pelo menos uma vez na vida','Pense.|Agora pense de novo','A vida é para|quem tem asas,|não nadadeiras','Acredite, as coisas|sempre podem piorar','A água é mais azul|na lagoa do vizinho,|mas pode estar|contaminada','Não importam as cores,|todos somos patos','Entre na lagoa|e nade, ou|afunde tentando','Mostre a eles!|Abra suas asas|e mergulhe até|o fundo do poço','Não deixe para|amanhã o que você|pode desistir de|fazer hoje','Não deixe para|amanhã o que você|pode deixar para|depois de amanhã','Não duvide do|seu potencial,|se você tiver algum','Se duvidarem de você,|duvide também','Não tente voar|por alguém que|só quer uma águia','Posso estar|derrotado hoje,|mas amanhã estarei|ainda pior!','Seja forte:|desista!','Desista de tentar|desistir, e comece|a desistir de|desistir de tentar|desistir','Um dia sem nadar|é um dia a mais entre|você e o fundo do poço','Lidar com mulher é fácil:|as vezes ela está certa,|e outras vezes você|está errado','Para chegar ao|fundo do poço,|é preciso mergulhar!','Não espere ficar rico|para ser feliz.|Se não você nunca será|feliz','Há sempre um novo|problema pela frente','Nada é impossível.|Pelo menos não|para um pato como eu!','O não você já tem,|agora é a hora de|buscar a humilhação','Acreditar no seu|potencial já é meio|caminho errado','Na vida,|nada é tão ruim|que não possa piorar','Nunca desista|de desistir!','Ninguém pode mudar o passado,|mas sempre tem|como estragar o futuro','Você é mais pato|do que imagina.|Seja isso bom ou ruim','Pode não ser fácil,|mas sei que você consegue|fracassar se tentar','A correnteza pode|estar contra você,|mas sei que você consegue|fracassar se tentar','O rio pode ser grande,|mas a derrota é certa','A vida te derruba|hoje para te preparar|para queda de amanhã','Seja o pato do|seu fracasso','Antes pato|do que pato','Nunca é cedo|demais para desistir','Levante seu bico e|prepare suas asas:|há sempre um novo|fracasso pela frente!','Quem não nada|não sai do lugar.|O que não é|necessariamente|algo ruim','Nunca subestime|seu bico','Você não é|um pato','Recomeçar é sempre uma|nova oportunidade|de fracassar','Até o momento|está tudo errado.|Conforme planejado','Não deixe que os|outros digam que|você não consegue.|Diga você mesmo:|EU NÃO CONSIGO!','A vida é como|um lago','Nade até|dar errado','Um dia você perde,|no outro perde de novo','O problema não é a|segunda-feira, mas sim|o fim de semana acabar','Nunca subestime|sua burrice','Nade como nunca,|afunde como sempre','Dinheiro não|compra felicidade,|mas compra um jet ski.|Você já viu um pato|triste de jet ski?','As vezes,|é preciso voar|para cair','Há momentos em que|é preciso mergulhar|para poder se afogar','Se você quer|nadar como um pato,|pare de voar com as águias','Procurando quem|pode mudar sua vida?|Olhe no espelho.|Ele é o culpado,|ele que corrija isso!','Deixe seus problemas|para o seu eu de amanhã','Culpe seu eu de ontem|pelos seus problemas de hoje','É sobre isso..|(o que?)|<br>|E está tudo bem..|(tudo bem o que?!)','Nadar, as vezes.|Vencer, quase nunca.|Desistir, sempre!','Ter bico de pato não|faz de você um pato.|Ornitorrincos também|tem bico de pato, e partes|de outros animais..|<br>|O que raios é aquele bicho|afinal?','Hidrate-se:|Beba água!','‌Já bebeu água hoje?|Beba novamente!','‌Seu signo não importa.|Só isso mesmo','‌Sua classe social não importa,|o fracasso não discrimina|ninguém e atinge a todos','‌Seja incompatavel|em tudo o que você faz!','‌‌Tenha orgulho|de seus fracassos','‌Nunca desista!|Busque a humilhação|até o fim','Se você começar algo,|desista','‌Estude para|ser um pato','‌Estude para|não ser um pato','‌Que Deus nos ajude.|Porque tá difícil','‌Que Deus nos ajude.|Porque vamos precisar','Que Deus nos ajude.|Porque eu mesmo|só atrapalho','‌‌Não almeje ser|o melhor em tudo|se você não é|bom em nada','É só uma fase ruim,|logo menos piora','Seus fracassos|te preparam para suas|próximas derrotas','Se não puder|ajudar, atrapalhe.|O importante é participar','Pare de pensar|nas derrotas passadas|e comece a planejar|as futuras','Acredite.|Você nasceu para|conquistar grandes|derrotas','Nada na vida é em vão.|Tudo vem para te|decepcionar','Só vai dar errado|se você tentar','Já usou a fórmula|de Bhaskara hoje?','Já procurou alguma coisa|numa enciclopédia hoje?','Já escreveu uma carta|para alguém esse ano?','Você pode se|confundir as vezes.|Mas tenha sempre a|certeza de estar|sempre errado','Não desista.|Uma hora da certo, ou não','Pense fora|do lago','Seja um pato|melhor que ontem','Se não puder mergulhar,|afunde com estilo','100% de você|não é nada comparado|a 0% de si mesmo','Você faz meu bico|ser mais alaranjado','Se a onda vier|até você, fuja.|Provavelmente é|um tsunami','Quando você|nada sem destino,|chegar em qualquer|lugar é uma conquista','Sempre pense antes|de mergulhar.|Especialmente se|você não souber nadar','Nada é impossível.|Pelo menos não|até você tentar e falhar','Não foque naquilo|que teria acontecido,|mas sim no que|vai acontecer','Veja sempre o lado|molhado das coisas','Cada segundo é único,|então nade!','Não tenha|medo de errar','Você já fracassou|tantas vezes,|uma derrota a mais|não vai importar|tanto assim'];

// Display module
var Display = {
  display_href: function(href) {
    var attributes = 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600';
    window.open(href, '', attributes);
  },

  display_line: function(index) {
    $('#line').html('<h1>' + LINES[index].split('|').join('</h1><h1>') + '</h1>')
  },

  random_display: function() {
    let index = Math.floor(Math.random() * 101),
        shr_code = CryptKey.encrypt_key(index);

    Display.display_line(index);
    Share.display_shr_code(shr_code);
  },

  search_display: function(param) {
    let index = CryptKey.decrypt_key(param),
        shr_code = param;

    Display.display_line(index);
    Share.display_shr_code(shr_code);
  }
}
