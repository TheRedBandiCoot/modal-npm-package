import { Modal, ModalBtn, useAppContext } from '../';

function App() {
  const { value } = useAppContext();
  return (
    <>
      <ModalBtn />
      {value && <Modal />}
    </>
  );
}

export default App;
