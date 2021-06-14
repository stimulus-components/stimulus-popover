import { Controller } from 'stimulus'

export default class extends Controller {
  hasCardTarget: boolean
  hasContentTarget: boolean
  hasUrlValue: boolean
  contentTarget: HTMLElement
  cardTarget: HTMLElement
  urlValue: string
  remoteContent: string

  static targets = ['card', 'content']
  static values = {
    url: String
  }

  async show (event: Event): Promise<void> {
    let content: string = null

    if (this.hasContentTarget) {
      content = this.contentTarget.innerHTML
    } else {
      content = await this.fetch()
    }

    if (!content) return

    const fragment: DocumentFragment = document.createRange().createContextualFragment(content)
    // @ts-ignore
    event.currentTarget.appendChild(fragment)
  }

  hide (): void {
    if (this.hasCardTarget) {
      this.cardTarget.remove()
    }
  }

  async fetch (): Promise<string> {
    if (!this.remoteContent) {
      if (!this.hasUrlValue) {
        console.error('[stimulus-popover] You need to pass an url to fetch the popover content.')
        return
      }

      const response: Response = await fetch(this.urlValue)
      this.remoteContent = await response.text()
    }

    return this.remoteContent
  }
}
