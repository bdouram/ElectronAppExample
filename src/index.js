import React from 'react';
import { render } from 'react-dom';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { I18nextProvider } from 'react-i18next';
import i18next from '../services/i18next';
import './styles/App.css';
import App from './containers/App';
import '../services/FabricMS';

const Application = () => (
  <I18nextProvider i18n={i18next}>
    <Fabric>
      <App />
    </Fabric>
  </I18nextProvider>
);
// Render the application into the DOM, the div inside index.html
render(<Application />, document.getElementById('root'));
