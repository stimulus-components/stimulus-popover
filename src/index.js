import { Controller } from 'stimulus'
import tippy from 'tippy.js'

export default class extends Controller {
  static targets = ['content']

  initialize () {
    this.fetch = this.fetch.bind(this)
  }

  disconnect () {
    if (this.tippyInstance) {
      this.tippyInstance.destroy()
    }
  }

  async mouseOver (event) {
    let element = null
    let content = null

    if (this.hasContentTarget) {
      element = event.target
      content = this.contentTarget.innerHTML
    } else {
      await this.fetch()

      element = this.element
      content = this.remoteContent
    }

    this.popover(element, content)
  }

  async fetch () {
    if (this.remoteContent) {
      return this.remoteContent
    }

    const response = await fetch(this.data.get('url'))
    const html = await response.text()

    this.remoteContent = html
  }

  popover (element, content) {
    if (!this.tippyInstance) {
      this.tippyInstance = tippy(element, this.tippyOptions)
      this.tippyInstance.show()
    }

    this.tippyInstance.setContent(content)
  }

  get tippyOptions () {
    return {
      allowHTML: true
    }
  }
}
