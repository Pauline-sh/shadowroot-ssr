// import '../../common/components/stateful_component';
import { incrementCounter } from '../../store/actions/counter';
import { store } from '../../store/store';

export class StatefulComponent extends HTMLElement {
  public count: number = 0;

  private handleClickBound = this.handleClick.bind(this);
  private storeUpdatedBound = this.storeUpdated.bind(this);

  constructor() {
    super();
  }

  connectedCallback() {
    this.addEventListener('click', this.handleClickBound);

    store.subscribe(this.storeUpdatedBound);
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.handleClickBound);
  }

  storeUpdated() {
    this.count = store.getState().counterReducer.value;
    this.render();
  }

  render() {
    this.setCounter();
  }

  setCounter() {
    if (this.counterElement) {
      this.counterElement.textContent = this.count.toString();
    }
  }

  handleClick() {
    store.dispatch(incrementCounter(1));
  }

  get counterElement() {
    return this.shadowRoot?.querySelector('#counter');
  }
}

customElements.define('stateful-component', StatefulComponent);
