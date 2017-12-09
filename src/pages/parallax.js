import React from 'react';
import styles from './parallax.module.scss'

const ParallaxPage = () => (
  <main className={styles.wrapper}>
    <section className={[styles.parallax, styles.bg1].join(' ')}>
      <h1>Such Adorableness</h1>
    </section>
    <section className={styles.static}>
      <h1>Boring</h1>
    </section>
    <section className={[styles.parallax, styles.bg2].join(' ')}>
      <h1>SO FWUFFY AWWW</h1>
    </section>
  </main>
);

export default ParallaxPage;




