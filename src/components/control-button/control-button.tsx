import styles from "./control-button.module.css";
import { FC, useEffect, ReactElement, ReactNode } from "react";

type TControlButtonProps = {
  name: string;
  value: string;
  handlerPress: (value: string) => void;
  children?: ReactNode;
};

export const ControlButton = ({ name, value, handlerPress, children }: TControlButtonProps) => {
  function handleOnClick(){
    handlerPress(value)
  }
  return (
  
    <div className={styles.controlButton} onClick = {handleOnClick}>
      <p>{name}</p>
      {children}
    </div>
  );
};
