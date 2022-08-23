import { FC } from 'react';

import { Container } from '../../../../../layouts/container';
import { Button } from './button';

const Props: FC = () => {
  return (
    <Container isShowTopButton>
      <section>
        <h1>props</h1>
        <Button color="red">ボタン</Button>
      </section>
    </Container>
  );
};

export { Props };
