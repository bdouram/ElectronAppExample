import { compose, lifecycle } from 'recompose';
import App from '../../components/App';
import { translate } from 'react-i18next';

const enhance = compose(
  lifecycle({
    componentWillMount() {
      console.log('May God help us!');
    }
  }),
  translate('mainPage')
);

export default enhance(App);
