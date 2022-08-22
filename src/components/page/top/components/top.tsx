import { FC } from 'react';

import { EXAMPLE_PAGE_SETTINGS } from '../../../../config';
import { Link, Typography } from '../../../elements';

import styles from './styles.module.scss';

const Top: FC = () => {
  return (
    <section className={styles.container}>
      <Typography Tag="h1" className={styles.title}>
        Index
      </Typography>
      <ul className={styles.list}>
        {Object.keys(EXAMPLE_PAGE_SETTINGS).map((key: string, i: number) => {
          const data = EXAMPLE_PAGE_SETTINGS[key];

          return typeof data !== 'undefined' ? (
            <li className={styles.item} key={key}>
              <Link href={`/examples/${key}`}>{data.id}</Link>
            </li>
          ) : null;
        })}
      </ul>
    </section>
  );
};

export { Top };
