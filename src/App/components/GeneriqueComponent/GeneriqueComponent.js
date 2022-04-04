import React from 'react';
import PropTypes from 'prop-types';
import styles from './GeneriqueComponent.module.scss';

const GeneriqueComponent = () => (
  <div className={styles.GeneriqueComponent} data-testid="GeneriqueComponent">
    GeneriqueComponent Component
  </div>
);

GeneriqueComponent.propTypes = {};

GeneriqueComponent.defaultProps = {};

export default GeneriqueComponent;
