import React from 'react';
import styles from './Loader.module.css'
import {ClipLoader} from "react-spinners";


const Loader = ({loading}) => {
  return (
    <div className={styles.container}>
      <ClipLoader
        loading={loading}
        className={styles.loader}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;