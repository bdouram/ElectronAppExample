import React from 'react';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';

const styles = {
  header: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '0.5em',
    color: 'white',
    backgroundColor: '#141127',
    justifyContent: 'space-between'
  }
};

const Header = ({ t }) => (
  <div style={styles.header}>
    <div className="logo ms-font-xl">
      <strong>MANUSCRITO</strong>
    </div>
    <div className="searchbox">
      <SearchBox
        placeholder={t('search')}
        onChange={newValue =>
          console.log('SearchBox onChange fired: ' + newValue)
        }
        onSearch={newValue =>
          console.log('SearchBox onSearch fired: ' + newValue)
        }
      />
    </div>
  </div>
);

export default Header;
