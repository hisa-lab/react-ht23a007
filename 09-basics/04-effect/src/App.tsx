import type { FC } from 'react';
import { Heading } from '@chakra-ui/react';
import Counter from 'components/Timer';
import './App.css';

const App: FC = () => (
  <>
    <Heading size="lg" as="h1" my={8}>
      カウンター
    </Heading>
    <Counter />
  </>
);

export default App;
