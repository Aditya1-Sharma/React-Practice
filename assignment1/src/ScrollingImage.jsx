import React, { useRef } from "react";

function ScrollingImage() {
  const listRef = useRef(null);

  const scrollToIndex = (index) => {
    if (listRef.current) {
      const imgNode = listRef.current.querySelectorAll("li > img")[index];
      console.dir(imgNode);
      if (imgNode) {
        imgNode.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  };

  return (
    <>
      <h2>Scrollable nav</h2>
      <nav>
        <button onClick={() => scrollToIndex(0)}>Tom</button>
        <button onClick={() => scrollToIndex(1)}>Maru</button>
        <button onClick={() => scrollToIndex(2)}>Jellylorum</button>
      </nav>

      <div>
        <ol ref={listRef}>
          <li>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIaraKUZEfaSTasUvrhg5ZMVAepZVSCPDOVQ&s"
              style={{ border: "2px solid yellow" }}
              alt="Tom"
            />
          </li>
          <li>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk6g0WWLp2QBWzxN6hw95ttacESw7kga_KjA&s"
              alt="Maru"
            />
          </li>
          <li>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi15z5npBUd7_ihqkrWEqs0IrHRPRxIDDIKw&s"
              alt="Jellylorum"
            />
          </li>
        </ol>
      </div>
    </>
  );
}

export default ScrollingImage;
