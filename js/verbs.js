const changeOrder = verbs => {
  return verbs.map(v => {
    const { english, spanish, ...preset } = v;
    return {
      english,
      spanish,
      present: {
        ...preset
      }
    };
  });
};

const VERBS = [
  { english: 'eat', spanish: 'comer', present: { reg: true }, preterite: {} },
  { english: 'call', spanish: 'llamar', present: { reg: true }, preterite: {} },
  { english: 'show', spanish: 'mostrar', present: { group: 3 }, preterite: {} },
  {
    english: 'believe',
    spanish: 'creer',
    present: { reg: true },
    preterite: {}
  },
  {
    english: 'remember',
    spanish: 'recordar',
    present: { group: 3 },
    preterite: {}
  },
  {
    english: 'come over',
    spanish: 'venir',
    present: {
      group: 1,
      yo: 'vengo',
      tu: 'vienes',
      el: 'viene',
      noso: 'venimos',
      ellos: 'vienen'
    },
    preterite: {
      group: 1,
      stem: 'vin'
    }
  },
  {
    english: 'eat lunch',
    spanish: 'almorzar',
    present: { group: 3 },
    preterite: {}
  },
  {
    english: 'hear',
    spanish: 'oir',
    present: {
      group: 1,
      yo: 'oigo',
      tu: 'oyes',
      el: 'oye',
      noso: 'oimos',
      ellos: 'oyen'
    },
    preterite: {}
  },
  { english: 'laugh', spanish: 'reir', present: { group: 4 }, preterite: {} },
  { english: 'sell', spanish: 'vender', present: { reg: true }, preterite: {} },
  {
    english: 'leave',
    spanish: 'salir',
    present: { group: 5, yo: 'salgo' },
    preterite: {}
  },
  {
    english: 'confess',
    spanish: 'confesar',
    present: { group: 2 },
    preterite: {}
  },
  {
    english: 'know',
    spanish: 'saber',
    present: { group: 5, yo: 'sé' },
    preterite: {
      group: 1,
      stem: 'sup'
    }
  },
  {
    english: 'take out',
    spanish: 'sacar',
    present: { reg: true },
    preterite: {}
  },
  { english: 'run', spanish: 'correr', present: { reg: true }, preterite: {} },
  { english: 'die', spanish: 'morir', present: { group: 3 }, preterite: {} },
  { english: 'serve', spanish: 'servir', present: { group: 4 }, preterite: {} },
  {
    english: 'promise',
    spanish: 'prometer',
    present: { reg: true },
    preterite: {}
  },
  {
    english: 'travel',
    spanish: 'viajar',
    present: { reg: true },
    preterite: {}
  },
  {
    english: 'teach',
    spanish: 'enseñar',
    present: { reg: true },
    preterite: {}
  },
  {
    english: 'recommend',
    spanish: 'recomendar',
    present: { group: 2 },
    preterite: {}
  },
  {
    english: 'play',
    spanish: 'jugar',
    present: { group: 3, ueIndex: 1 },
    preterite: {}
  },
  {
    english: 'give',
    spanish: 'dar',
    present: { group: 5, yo: 'doy' },
    preterite: {
      yo: 'di',
      tu: 'diste',
      el: 'dió',
      noso: 'dimos',
      ellos: 'dieron'
    }
  },
  {
    english: 'write',
    spanish: 'escribir',
    present: { reg: true },
    preterite: {}
  },
  {
    english: 'speak',
    spanish: 'hablar',
    present: { reg: true },
    preterite: {}
  },
  {
    english: 'answer',
    spanish: 'contestar',
    present: { reg: true },
    preterite: {}
  },
  {
    english: 'be',
    spanish: 'estar',
    present: {
      yo: 'estoy',
      tu: 'estas',
      el: 'esta',
      noso: 'estamos',
      ellos: 'estan'
    },
    preterite: {
      group: 1,
      stem: 'estuv'
    }
  },
  { english: 'think', spanish: 'pensar', present: { group: 2 }, preterite: {} },
  {
    english: 'lose/waste/miss (the bus)',
    spanish: 'perder',
    present: { group: 2 },
    preterite: {}
  },
  { english: 'look', spanish: 'mirar', present: { reg: true }, preterite: {} },
  { english: 'win', spanish: 'ganar', present: { reg: true }, preterite: {} },
  {
    english: 'learn',
    spanish: 'aprender',
    present: { reg: true },
    preterite: {}
  },
  { english: 'sing', spanish: 'contar', present: { reg: true }, preterite: {} },
  { english: 'read', spanish: 'leer', present: { reg: true }, preterite: {} },
  { english: 'cost', spanish: 'costar', present: { group: 3 }, preterite: {} },
  {
    english: 'permit',
    spanish: 'permitir',
    present: { reg: true },
    preterite: {}
  },
  {
    english: 'visit',
    spanish: 'visitar',
    present: { reg: true },
    preterite: {}
  },
  {
    english: 'understand',
    spanish: 'comprender',
    present: { reg: true },
    preterite: {}
  },
  { english: 'live', spanish: 'vivir', present: { reg: true }, preterite: {} },
  {
    english: 'give back',
    spanish: 'devolver',
    present: { group: 3 },
    preterite: {}
  },
  {
    english: 'finish',
    spanish: 'terminar',
    present: { reg: true },
    preterite: {}
  },
  {
    english: 'decorate',
    spanish: 'decorar',
    present: { reg: true },
    preterite: {}
  },
  {
    english: 'receive',
    spanish: 'recibir',
    present: { reg: true },
    preterite: {}
  },
  { english: 'close', spanish: 'cerrar', present: { group: 2 }, preterite: {} },
  {
    english: 'reply/respond',
    spanish: 'responder',
    present: { reg: true },
    preterite: {}
  },
  {
    english: 'begin',
    spanish: 'comenzar',
    present: { group: 2 },
    preterite: {}
  },
  { english: 'stay', spanish: 'quedar', present: { reg: true }, preterite: {} },
  {
    english: 'put',
    spanish: 'poner',
    present: { group: 5, yo: 'pongo' },
    preterite: {
      group: 1,
      stem: 'pus'
    }
  },
  {
    english: 'make a sound',
    spanish: 'sonar',
    present: { group: 3 },
    preterite: {}
  },
  { english: 'count', spanish: 'contar', present: { group: 3 }, preterite: {} },
  { english: 'fly', spanish: 'volar', present: { group: 3 }, preterite: {} },
  {
    english: 'leave',
    spanish: 'partir',
    present: { reg: true },
    preterite: {}
  },
  {
    english: 'decide',
    spanish: 'decidir',
    present: { reg: true },
    preterite: {}
  },
  { english: 'pay', spanish: 'pagar', present: { reg: true }, preterite: {} },
  {
    english: 'do',
    spanish: 'hacer',
    present: { group: 5, yo: 'hago' },
    preterite: {
      group: 1,
      stem: 'hic',
      el: 'hizo'
    }
  },
  {
    english: 'assist/attend',
    spanish: 'asistir',
    present: { reg: true },
    preterite: {}
  },
  {
    english: 'insist',
    spanish: 'insistir',
    present: { reg: true },
    preterite: {}
  },
  {
    english: 'know knowledge',
    spanish: 'conocer',
    present: { group: 5, yo: 'conozco' },
    preterite: {}
  },
  {
    english: 'hide',
    spanish: 'esconder',
    present: { reg: true },
    preterite: {}
  },
  {
    english: 'enter',
    spanish: 'entrar',
    present: { reg: true },
    preterite: {}
  },
  {
    english: 'repeat',
    spanish: 'repetir',
    present: { group: 4 },
    preterite: {}
  },
  {
    english: 'erase',
    spanish: 'borrar',
    present: { reg: true },
    preterite: {}
  },
  { english: 'sleep', spanish: 'dormir', present: { group: 3 }, preterite: {} },
  {
    english: 'come back/return',
    spanish: 'volver',
    present: { group: 3 },
    preterite: {}
  },
  {
    english: 'resolve',
    spanish: 'resolver',
    present: { group: 3 },
    preterite: {}
  },
  {
    english: 'cover',
    spanish: 'cubrir',
    present: { reg: true },
    preterite: {}
  },
  {
    english: 'fix',
    spanish: 'arreglar',
    present: { reg: true },
    preterite: {}
  },
  {
    english: 'can',
    spanish: 'poder',
    present: { group: 3 },
    preterite: {
      group: 1,
      stem: 'pud'
    }
  },
  {
    english: 'celebrate',
    spanish: 'celebrar',
    present: { reg: true },
    preterite: {}
  },
  {
    english: 'find/meet',
    spanish: 'encontrar',
    present: { group: 3 },
    preterite: {}
  },
  {
    english: 'need',
    spanish: 'necesitar',
    present: { reg: true },
    preterite: {}
  },
  {
    english: 'explain',
    spanish: 'explicar',
    present: { reg: true },
    preterite: {}
  },
  {
    english: 'ask for/demand/require',
    spanish: 'pedir',
    present: { group: 4 },
    preterite: {}
  },
  { english: 'wear', spanish: 'llevar', present: { reg: true }, preterite: {} },
  {
    english: 'hear',
    spanish: 'escuchar',
    present: { reg: true },
    preterite: {}
  },
  {
    english: 'start',
    spanish: 'empezar',
    present: { group: 2 },
    preterite: {}
  },
  {
    english: 'have/be',
    spanish: 'tener',
    present: {
      group: 1,
      yo: 'tengo',
      tu: 'tienes',
      el: 'tiene',
      noso: 'tenemos',
      ellos: 'tienen'
    },
    preterite: {
      group: 1,
      stem: 'tuv'
    }
  },
  {
    english: 'rest',
    spanish: 'descansar',
    present: { reg: true },
    preterite: {}
  },
  {
    english: 'feel/be sorry',
    spanish: 'sentir',
    present: { group: 2 },
    preterite: {}
  },
  {
    english: 'skate',
    spanish: 'patinar',
    present: { reg: true },
    preterite: {}
  },
  {
    english: 'walk',
    spanish: 'cominar',
    present: { reg: true },
    preterite: {}
  },
  { english: 'drink', spanish: 'beber', present: { reg: true }, preterite: {} },
  { english: 'help', spanish: 'ayudar', present: { reg: true }, preterite: {} },
  {
    english: 'study',
    spanish: 'estudiar',
    present: { reg: true },
    preterite: {}
  },
  {
    english: 'invite',
    spanish: 'invidar',
    present: { reg: true },
    preterite: {}
  },
  {
    english: 'smile',
    spanish: 'sonreir',
    present: { group: 4 },
    preterite: {}
  },
  { english: 'buy', spanish: 'comprar', present: { reg: true }, preterite: {} },
  {
    english: 'measure',
    spanish: 'medir',
    present: { group: 4 },
    preterite: {}
  },
  {
    english: 'return',
    spanish: 'regrasar',
    present: { reg: true },
    preterite: {}
  },
  {
    english: 'refer',
    spanish: 'referir',
    present: { group: 2 },
    preterite: {}
  },
  {
    english: 'happen/to spend time',
    spanish: 'pasar',
    present: { reg: true },
    preterite: {}
  },
  {
    english: 'understand',
    spanish: 'entender',
    present: { group: 2 },
    preterite: {}
  },
  { english: 'ride', spanish: 'montar', present: { reg: true }, preterite: {} },
  { english: 'touch', spanish: 'tocar', present: { reg: true }, preterite: {} },
  {
    english: 'say',
    spanish: 'decir',
    present: {
      group: 1,
      yo: 'digo',
      tu: 'dices',
      el: 'dice',
      noso: 'decimos',
      ellos: 'dicen'
    },
    preterite: {}
  },
  {
    english: 'admire',
    spanish: 'admirar',
    present: { reg: true },
    preterite: {}
  },
  {
    english: 'prepare',
    spanish: 'preparar',
    present: { reg: true },
    preterite: {}
  },
  {
    english: 'draw',
    spanish: 'dibujar',
    present: { reg: true },
    preterite: {}
  },
  {
    english: 'suffer',
    spanish: 'sufrir',
    present: { reg: true },
    preterite: {}
  },
  { english: 'use', spanish: 'usar', present: { reg: true }, preterite: {} },
  {
    english: 'forget',
    spanish: 'ovidar',
    present: { reg: true },
    preterite: {}
  },
  {
    english: 'dance',
    spanish: 'bailar',
    present: { reg: true },
    preterite: {}
  },
  {
    english: 'cook',
    spanish: 'cocinar',
    present: { reg: true },
    preterite: {}
  },
  { english: 'take', spanish: 'tomar', present: { reg: true }, preterite: {} },
  {
    english: 'defend',
    spanish: 'defender',
    present: { group: 2 },
    preterite: {}
  },
  { english: 'open', spanish: 'abrir', present: { reg: true }, preterite: {} },
  {
    english: 'shout',
    spanish: 'gritar',
    present: { reg: true },
    preterite: {}
  },
  {
    english: 'want',
    spanish: 'querer',
    present: { group: 2 },
    preterite: { group: 1, stem: 'quis' }
  },
  {
    english: 'prefer',
    spanish: 'preferir',
    present: { group: 2 },
    preterite: {}
  },
  {
    english: 'go up/climb',
    spanish: 'subir',
    present: { reg: true },
    preterite: {}
  },
  {
    english: 'search/look for',
    spanish: 'buscar',
    present: { reg: true },
    preterite: {}
  },
  {
    english: 'change',
    spanish: 'cambiar',
    present: { reg: true },
    preterite: {}
  },
  {
    english: 'be',
    spanish: 'ser',
    present: {
      yo: 'soy',
      tu: 'eres',
      el: 'es',
      noso: 'somos',
      ellos: 'son',
    },
    preterite: {
      yo: 'fui',
      tu: 'fuiste',
      el: 'fue',
      noso: 'fuimos',
      ellos: 'fueron'
    }
  },
  {
    english: 'go',
    spanish: 'ir',
    present: {
      group: 1,
      yo: 'voy',
      tu: 'vas',
      el: 'va',
      noso: 'vamos',
      ellos: 'van'
    },
    preterite: {
      yo: 'fui a',
      tu: 'fuiste a',
      el: 'fue a',
      noso: 'fuimos',
      ellos: 'fueron a'
    }
  },
  {
    english: 'question',
    spanish: 'preguntar',
    present: { reg: true },
    preterite: {}
  },
  {
    english: 'descend/go down',
    spanish: 'bajar',
    present: { reg: true },
    preterite: {}
  },
  { english: 'swim', spanish: 'nadar', present: { reg: true }, preterite: {} },
  { english: 'wish', spanish: 'desear', present: { reg: true }, preterite: {} },
  { english: 'wash', spanish: 'lavar', present: { reg: true }, preterite: {} },
  {
    english: 'work',
    spanish: 'trabajar',
    present: { reg: true },
    preterite: {}
  },
  { english: 'sing', spanish: 'cantar', present: { reg: true }, preterite: {} },
  { english: 'cut', spanish: 'cortar', present: { reg: true }, preterite: {} },
  {
    english: 'practice',
    spanish: 'practicar',
    present: { reg: true },
    preterite: {}
  },
  {
    english: 'bring',
    spanish: 'traer',
    present: { group: 5, yo: 'traigo' },
    preterite: {}
  }
];

window.VERBS = VERBS.map(verb => ({
  ...verb,
  english: verb.english.split('/')
}));
