"use client";

import type { FC } from "react";
import { HexColorPicker } from "react-colorful";
import styles from "./styles.module.scss";

type Props = {
  color: string;
  onChange: (color: string) => void;
};

export const ColorPicker: FC<Props> = ({ color, onChange }) => {
  return (
    <div className={styles.picker}>
      <HexColorPicker
        color={color}
        onChange={onChange}
      />
    </div>
  );
};
