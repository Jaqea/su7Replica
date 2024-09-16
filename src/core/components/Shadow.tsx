import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';
import { SHADOWCONFIG, RANDOMIZEDLIGHTCONFIG } from '@/constants';

export default function shadow() {
  return (
    <AccumulativeShadows {...SHADOWCONFIG}>
      <RandomizedLight {...RANDOMIZEDLIGHTCONFIG} />
    </AccumulativeShadows>
  );
}
