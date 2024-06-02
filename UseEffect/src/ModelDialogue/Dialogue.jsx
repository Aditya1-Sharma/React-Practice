import React, { useRef } from "react";
import { useEffect } from "react";
function Dialogue({ isOpen, children, style }) {
  const ref = useRef();
  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const dialog = ref.current;
    dialog.showModal();
    return () => {
      dialog.close();
    };
  }, [isOpen]);
  console.log(isOpen);

  return (
    <>
      <dialog ref={ref} style={style}>
        {children}
      </dialog>
    </>
  );
}

export default Dialogue;
