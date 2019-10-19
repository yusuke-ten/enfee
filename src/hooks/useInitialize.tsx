import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules/index';
import { initialize } from 'modules/intializer/actions';

const useInitialize = () => {
  const {
    intializer: { localstorgeChecked },
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localstorgeChecked) {
      dispatch(initialize.app());
    }
  }, [localstorgeChecked]);
};

export default useInitialize;
