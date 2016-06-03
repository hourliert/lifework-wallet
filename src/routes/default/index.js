import { DEFAULT } from 'constants/routes';
import { DefaultPage } from 'routes/default/container';

export default function getRoute() {
  return {
    path: DEFAULT,
    component: DefaultPage,
  };
}
