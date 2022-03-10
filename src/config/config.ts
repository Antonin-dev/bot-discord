import { Actions, Config, Log } from '../type/type';

export const randomSentence = [
  "Vous n'avez jamais vu votre vrai visage, seulement des photos et votre reflet.",
  "Vous pouvez toujours voir votre nez, mais votre cerveau fait comme s'il n'était pas là.",
  'Vous ne pouvez pas imaginer une nouvelle couleur.',
  'Vous ne pouvez pas respirer et avaler en même temps.',
  "Votre langue n'est jamais vraiment au repos dans votre bouche.",
];

export const config: Config = {
  sentenceOfTheDay: 'La phrase du jour est :',
};

export const log: Log = {
  randomBegin: 'sequence random begin',
  citationBegin: 'sequence citation begin',
  mentionBegin: 'sequence mention begin',
};

export const actions: Actions = {
  citation: '!citation',
  random: '!random',
  note: '!note',
};
