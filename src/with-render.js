import { HTMLElement } from './util';

export function withRender (Base = HTMLElement) {
  return class extends Base {
    // Called to render the component.
    renderCallback () {}

    // Called after the component has rendered.
    renderedCallback () {}

    // Called to render the component.
    rendererCallback (render) {
      if (!this.shadowRoot) {
        this.attachShadow({ mode: 'open' });
      }
      render(this.renderCallback(this), this.shadowRoot);
      this.renderedCallback();
    }
  };
}
