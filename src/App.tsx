import React from 'react';
import './App.scss';
import RoutesApp from './router/routesApp';
import AlertISBoolean from './components/ui/alertISBoolean/alertISBoolean';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { setIsOpenAlertIsBoolean } from './store/slices/pageSlice';

function App() {
  const isOpenAlertIsBoolean = useAppSelector(state => state.pageSlice.isOpenAlertIsBoolean.isOpen)
  const fun = useAppSelector(state => state.pageSlice.isOpenAlertIsBoolean.fun)
  const dispatch = useAppDispatch()
  return (
    <div className="App">
      {isOpenAlertIsBoolean ? <AlertISBoolean isClick={fun ? fun : () => { }} isExit={() => { dispatch(setIsOpenAlertIsBoolean()) }} /> : undefined}
      <RoutesApp />
    </div>
  );
}

export default App;
