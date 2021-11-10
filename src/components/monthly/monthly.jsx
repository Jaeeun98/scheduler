import React from 'react';
import styles from './monthly.module.css'
import Header from './header';
import Section from './section';

const Monthly = (props) => {
    
    return (
        <section className={styles.section}>
            <Header />
            <Section />
        </section>
)}

export default Monthly;