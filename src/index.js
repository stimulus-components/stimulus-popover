import { Controller } from 'stimulus'
import tippy from 'tippy.js'

export default class extends Controller {
  static targets = ['content']

  connect () {
    this.fetch = this.fetch.bind(this)
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

    this.tippyInstance = this.popover(element, content)
  }

  mouseOut () {
    this.tippyInstance.destroy()
    this.tippyInstance = undefined
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
    const instance = tippy(element, {
      content: content,
      allowHTML: true
    })

    instance.show()

    return instance
  }
}
