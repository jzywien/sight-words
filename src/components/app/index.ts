import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import '@polymer/polymer/lib/elements/dom-repeat';
import * as view from './app.template.html';

const synth = window.speechSynthesis;

export class MyApp extends PolymerElement {
  voices: SpeechSynthesisVoice[];
  selectedVoice: SpeechSynthesisVoice;
  lang: String = 'en-US';
  words: String[];

  static get template() {
    return view;
  }

  constructor() {
    super();
    this.voicesChanged = this.voicesChanged.bind(this);
    this.words = [
      'there', 'use', 'an', 'each', 'which', 'she', 'do', 'how', 'their', 'if'
    ];
  }

  ready() {
    super.ready();
  }

  connectedCallback() {
    super.connectedCallback();
    if ('onvoiceschanged' in synth)
    {
      synth.addEventListener('voiceschanged', this.voicesChanged);
    } else {
      this.voicesChanged();
    }

  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if ('onvoiceschanged' in synth)
    {
      synth.removeEventListener('voiceschanged', this.voicesChanged);
    }
  }

  voicesChanged() {
    const voices = synth.getVoices().filter(voice => voice.lang === this.lang);
    this.setVoices(voices);
  }

  setVoices(voices) {
    this.voices = voices;
    this.selectedVoice = this.voices.find(voice => voice.name === 'Alex');
  }

}
