import { FC } from 'react';

import { Container } from '../../../../../layouts/container';
import { Button } from './button';

const Props: FC = () => {
  return (
    <Container isShowTopButton title="props">
      <Button color="red">ボタン</Button>
    </Container>
  );
};

export { Props };
