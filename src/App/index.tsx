import { h, FunctionalComponent } from "preact";

import './App.scss';

const handleClick = () => {
  window['badButtonClick']();
};

const App: FunctionalComponent = () => (
  <div class="app">
    <header class="app__header"></header>
    <div class="app__content">
      <p>Hello preact!</p>
    </div>
    <footer class="app__footer"></footer>
  </div>
);

export default App;
