import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardGrid, Container, Header } from "./Elements";
import "./App.css";

import ModalTut from "./modal.js"
import Menu from "./Menu";
import blue from "./blue.png";
import purp from "./purp.png";
import black from "./black.png";
import green from "./green.png";

//by default all transforms are 3d.
// you should only animate transforms and opacity
// translate shortcuts x y z
// translate : translateX, translateY, translateZ
// Scale: scale, scaleX, scaleY
// Rotate: rotate, rotateX, rotateY, rotateZ
// Skew: skew, skewX, skewY

function App() {
  const [value, setValue] = useState(0)
  const [isToggled, setToggle] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Header>
        <Menu />
        <h1>Header</h1>
      </Header>
      <Container>
        <h2> Super Cool </h2>
        {/* <button onClick={() =>
           setToggle((prevValue) => prevValue ? 0 : 1)}>
          Toggle
        </button> */}
        <button onClick={() =>
           setToggle(!isToggled)}>
          Toggle
        </button>
        <input type="range" min="-100" max="100" value={value} onChange={(e) => setValue(e.target.value)}></input>
        <ModalTut isToggled={isToggled} setToggle={setToggle}>
        <Card style={{ background: "var(--green)" }}>
            <h3>Some card</h3>
            <img src={purp} />
          </Card>
        </ModalTut>
        <CardGrid>
          <Card style={{ background: "var(--purp)" }}>
            <h3>Some card</h3>
            <img src={purp} />
          </Card>
          <Card style={{ background: "var(--blue)" }}>
            <h3>Some card</h3>
            <img src={blue} />
          </Card>
          <Card style={{ background: "var(--black)" }}>
            <h3>Some card</h3>
            <img src={black} />
          </Card>
          <Card style={{ background: "var(--green)" }}>
            <h3>Some card</h3>
            <img src={green} />
          </Card>
        </CardGrid>
      </Container>
    </motion.div>
  );
}

export default App;
