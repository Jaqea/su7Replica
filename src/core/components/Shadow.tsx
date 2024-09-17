import { ContactShadows } from '@react-three/drei';
import { CONTACTSHADOWS } from '@/constants';

export default function Shadow() {
  return <ContactShadows {...CONTACTSHADOWS} />;
}
