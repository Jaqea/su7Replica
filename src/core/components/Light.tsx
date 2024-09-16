import { SPOTLIGHT, AMBIENTLIGHT } from '@/constants';

export default function Light() {
  return (
    <>
      <spotLight {...SPOTLIGHT} />
      <ambientLight {...AMBIENTLIGHT} />
    </>
  );
}
