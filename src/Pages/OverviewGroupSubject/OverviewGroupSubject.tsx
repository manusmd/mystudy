import { useEffect, useState } from 'react';
import { GroupsType, SubjectsType } from '../../utils/types';
import styles from './OverviewGroupSubject.module.css';
import TitleElement from '../../Components/TitleElement/TitleElement';
import EntryElement from '../../Components/EntryElement/EntryElement';
import PullToRefresh from 'pulltorefreshjs';
import { setGroupSubjectFetch } from '../../utils/helper';

type OverviewSocialProps = {
  category: 'groups' | 'subjects';
};

export default function OverviewGroupSubject({
  category,
}: OverviewSocialProps): JSX.Element {
  const [allEntries, setAllEntries] = useState<GroupsType[] | SubjectsType[]>(
    []
  );
  PullToRefresh.init({
    mainElement: 'div',
    onRefresh() {
      setGroupSubjectFetch(category, setAllEntries);
    },
  });

  useEffect(() => {
    let cancel = false;
    if (cancel) return;
    setGroupSubjectFetch(category, setAllEntries);

    return () => {
      cancel = false;
    };
  }, [category]);
  return (
    <>
      <TitleElement title={category} />
      <div className={styles.results}>
        {allEntries[0] ? (
          allEntries.map((entry) => (
            <EntryElement
              key={entry.id}
              category={category}
              id={entry.id}
              entryname={entry.name}
            />
          ))
        ) : (
          <span className={styles.noResult}>No entry found</span>
        )}
      </div>
    </>
  );
}
