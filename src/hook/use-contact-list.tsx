import { DATA_CONTACT_LIST } from '../constant/data-localstroage';
import { TCreateList } from '../sections/contact/create/schema/create-schema';

const useContactList = () => {
  const getContact = localStorage.getItem(DATA_CONTACT_LIST) || '';

  const fianlContactData: TCreateList[] = getContact.length
    ? JSON.parse(getContact)
    : [];

  const onSaveData = (data: TCreateList) => {
    const body: TCreateList[] = [];
    let transformValueLocal: TCreateList[] | null = null;

    if (getContact) {
      transformValueLocal = JSON.parse(getContact);
    }

    if (transformValueLocal) {
      body.push(...transformValueLocal);
    }

    const addNewValue = [...body, data];

    setValuOnLocalStorage(addNewValue);
  };

  const onDeleteData = (idItem: string) => {
    const deleteData = fianlContactData.filter((item) => item.id !== idItem);

    setValuOnLocalStorage(deleteData);
  };

  const setValuOnLocalStorage = (data: TCreateList[]) => {
    const transformData = JSON.stringify(data);

    localStorage.setItem(DATA_CONTACT_LIST, transformData);
  };

  return {
    dataContactList: fianlContactData,
    onSaveData,
    onDeleteData,
  };
};

export { useContactList };
