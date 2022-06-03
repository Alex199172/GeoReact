import {makeAutoObservable} from 'mobix';

class Language {
  languageChange = false
  constructor() {
    makeAutoObservable(this)
  }

  languageChangeStore() {
    this.languageChange = true
  }
}
