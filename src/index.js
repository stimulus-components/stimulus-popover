import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['card', 'content']

  async show (event) {
    let content = null

    if (this.hasContentTarget) {
      content = this.contentTarget.innerHTML
    } else {
      content = await this.fetch()
    }

    const fragment = document.createRange().createContextualFragment(content)
    event.target.appendChild(fragment)
  }

  hide () {
    if (this.hasCardTarget) {
      this.cardTarget.remove()
    }
  }

  async fetch () {
    if (!this.remoteContent) {
      const response = await fetch(this.data.get('url'))
      this.remoteContent = await response.text()
    }

    return this.remoteContent
  }
}
