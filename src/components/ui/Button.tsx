import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

// CSS Modulesを使う場合は、別途 Button.module.css を作成
// import styles from './Button.module.css';

export default function Button({ children }: Props) {
  // return <button className={styles.button}>{children}</button>;
  return <button>{children}</button>;
}