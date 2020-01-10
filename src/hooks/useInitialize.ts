import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules/reducer';
import { initialize } from 'modules/initializer/actions';
import { toggleLoadingPage } from 'modules/app/actions';

const useInitialize = () => {
  const {
    intializer: { localstorgeChecked },
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleLoadingPage(true));
  }, []);

  useEffect(() => {
    if (localstorgeChecked) {
      dispatch(initialize.app());
    }
  }, [localstorgeChecked]);
};

export default useInitialize;
