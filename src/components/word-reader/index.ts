import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import * as view from './word-reader.template.html';
const synth = window.speechSynthesis;

export class WordReader extends PolymerElement {
  word: string;
  voice: SpeechSynthesisVoice;

  static get properties() {
    return {
      voice: {
        type: Object
      },
      word: {
        type: String
      }
    }
  }

  static get template() {
    return view;
  }

  clickPlay() {
    const word = new SpeechSynthesisUtterance(this.word);
    word.voice = this.voice;
    word.rate = 0.8;
    synth.speak(word);
  }

  constructor() {
    super();
  }

  ready() {
    super.ready();
  }

}
