import {makeAutoObservable} from 'mobx';

class Invation {
  invationModal = ''
  constructor() {
    makeAutoObservable(this)
  }

  showInvationModal() {
    this.invationModal = true
  }

  hidenInvationModal() {
    this.invationModal = false
  }
}

export default new Invation()
