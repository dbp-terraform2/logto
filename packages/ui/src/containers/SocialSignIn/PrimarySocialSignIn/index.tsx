import TermsOfUse from '@/containers/TermsOfUse';
import useNativeMessageListener from '@/hooks/use-native-message-listener';
import useSocial from '@/hooks/use-social';

import SocialSignInList from '../SocialSignInList';
import * as styles from './index.module.scss';

export const defaultSize = 3;

type Props = {
  className?: string;
};

const PrimarySocialSignIn = ({ className }: Props) => {
  const { socialConnectors } = useSocial();
  useNativeMessageListener();

  return (
    <>
      <TermsOfUse className={styles.terms} />
      <SocialSignInList className={className} socialConnectors={socialConnectors} />
    </>
  );
};

export default PrimarySocialSignIn;
