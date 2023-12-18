import { HTMLAttributes } from 'react';
import { useAppContext } from '../AppProvider';
import styles from './styles.module.css';
import { IoClose } from 'react-icons/io5';
import './style.css';
export function Modal(props: HTMLAttributes<HTMLDivElement>) {
  const {
    // className,
    // ...restProps
  } = props;
  const { unmounted, setValue, setUnmounted } = useAppContext();

  const closeBtn = () => {
    setTimeout(() => {
      setValue(false);
    }, 200);
    setUnmounted(true);
  };

  return (
    <>
      <div className="modal">
        <div className={`${styles['modal-layout']}`} onClick={closeBtn} />
        <div className={`${styles['modal-content']} ${unmounted && styles['unmounted']}`}>
          <header className={`${styles['modal-content--header']}`}>
            <div className={`${styles['main-header']}`}>
              <h1 className="text-red-500 font-bold text-3xl">Chicken Recipe</h1>
            </div>
            <div className={`${styles['close-btn-layout']}`}>
              <button type="button" className={`${styles['close-btn']}`} onClick={closeBtn}>
                <IoClose />
              </button>
            </div>
          </header>
        </div>
      </div>
    </>
  );
}

export function ModalBtn() {
  const { setValue, setUnmounted } = useAppContext();
  return (
    <button
      onClick={() => {
        setValue(true);
        setUnmounted(false);
      }}
    >
      Modal
    </button>
  );
}
