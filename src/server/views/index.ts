import { render } from '../../common/components/stateful_component.js';
import { INITIAL_STATE } from '../../store/state.js';
import { renderPage } from './page.js';

export const indexPage = renderPage(INITIAL_STATE, render(INITIAL_STATE));
