import { useEffect, useState } from 'react';
import FormElement from '../../Components/FormElement/FormElement';
import TitleElement from '../../Components/TitleElement/TitleElement';
import fetchAPI from '../../utils/api';
import { PrepareStudentsType, PrepareTeachersType } from '../../utils/types';

export default function Details() {
  const [entry, setEntry] = useState<
    PrepareStudentsType | PrepareTeachersType
  >();
  useEffect(() => {
    const detailFetch = async () => {
      const response = await fetchAPI(
        `https://server.manu-web.de/${sessionStorage.getItem(
          'activeCategory'
        )}/${sessionStorage.getItem('activeEntry')}`
      );
      setEntry(response);
    };
    detailFetch();
  }, []);
  console.log(entry);
  return (
    <>
      <TitleElement title={'Details'} />
      {entry && (
        <FormElement
          person={{
            id: entry.id,
            lastname: entry.lastname,
            surname: entry.surname,
            gender: entry.gender,
            address: entry.address,
            phone: entry.phone,
            groups: entry.groups.map((group) => group.name),
            subjects: entry.subjects.map((subject) => subject.name),
          }}
        />
      )}
    </>
  );
}
