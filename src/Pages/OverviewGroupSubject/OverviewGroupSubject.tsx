import { useEffect, useState } from 'react';
import { GroupsType, SubjectsType } from '../../utils/types';
import styles from './OverviewGroupSubject.module.css';
import TitleElement from '../../Components/TitleElement/TitleElement';
import EntryElement from '../../Components/EntryElement/EntryElement';
import PullToRefresh from 'pulltorefreshjs';
import { setGroupSubjectFetch } from '../../utils/helper';
import { Link } from 'react-router-dom';

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
    sessionStorage.setItem('addPost', category);

    let cancel = false;
    if (cancel) return;
    setGroupSubjectFetch(category, setAllEntries);

    return () => {
      cancel = false;
    };
  });
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
      <div className={styles.addWrap}>
        <Link className={styles.add} to={'/addorga'}>
          +
        </Link>
      </div>
    </>
  );
}
