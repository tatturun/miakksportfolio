// app/mvv/page.tsx
"use client";
import { useEffect, useRef, useState } from 'react';
import { mvvData } from '@/data/mvv';
import styles from './mvv.module.css'; // スタイルを適用

// 各セクションを監視するためのカスタムフック
const useOnScreen = (options: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // 一度表示されたら監視を解除
        observer.unobserve(entry.target);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, isVisible] as const;
};

export default function MvvPage() {
  const mission = mvvData.find((item) => item.id === 'mission');
  const vision = mvvData.find((item) => item.id === 'vision');
  const value = mvvData.find((item) => item.id === 'value');

  const options = {
    threshold: 0.5,
  };

  const [missionRef, isMissionVisible] = useOnScreen(options);
  const [visionRef, isVisionVisible] = useOnScreen(options);
  const [valueRef, isValueVisible] = useOnScreen(options);

  return (
    <div className={styles.pageContainer}>
      {/* Mission Section */}
      {mission && (
        <section 
          ref={missionRef}
          className={`${styles.section} ${styles.missionSection} ${isMissionVisible ? styles.isVisible : ''}`}
        >
          <div className={styles.content}>
            <div className={styles.titleArea}>
              <h2 className={styles.title}>{mission.title}</h2>
              <p className={styles.subtitle}>{mission.subtitle}</p>
            </div>
            <div className={styles.descriptionArea}>
              <p>{mission.description}</p>
            </div>
          </div>
        </section>
      )}
      {/* Vision Section */}
      {vision && (
        <section 
          ref={visionRef}
          className={`${styles.section} ${styles.visionSection} ${isVisionVisible ? styles.isVisible : ''}`}
        >
          <div className={styles.content}>
            <div className={styles.descriptionArea}>
              <p>{vision.description}</p>
            </div>
            <div className={styles.titleArea}>
              <h2 className={styles.title}>{vision.title}</h2>
              <p className={styles.subtitle}>{vision.subtitle}</p>
            </div>
          </div>
        </section>
      )}
      {/* Value Section */}
      {value && value.items && (
        <section 
          ref={valueRef}
          className={`${styles.section} ${styles.valueSection} ${isValueVisible ? styles.isVisible : ''}`}
        >
          <div className={styles.content}>
            <div className={styles.titleArea}>
              <h2 className={styles.title}>{value.title}</h2>
            </div>
            <div className={styles.valueGrid}>
              {value.items.map((item) => (
                <div key={item.title} className={styles.valueItem}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      <br />
    </div>
  );
}