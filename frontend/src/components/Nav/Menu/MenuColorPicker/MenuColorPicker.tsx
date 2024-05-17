import React from 'react';
import { Dropdown } from 'components/common/Dropdown';
import ColorPickerIcon from 'components/common/Icons/ColorPickerIcon';
import { ClusterColorKey } from 'theme/theme';

import * as S from './MenuColorPicker.styled';

interface MenuColorPickerProps {
  setColorKey: (key: ClusterColorKey) => void;
}

const COLOR_KEYS: ClusterColorKey[] = [
  'transparent',
  'gray',
  'red',
  'orange',
  'lettuce',
  'green',
  'turquoise',
  'blue',
  'violet',
  'pink',
];

const MenuColorPicker = ({ setColorKey }: MenuColorPickerProps) => {
  const handleCircleCLick = (colorKey: ClusterColorKey) => () => {
    setColorKey(colorKey);
  };

  return (
    <Dropdown offsetY={5} label={<ColorPickerIcon />}>
      <S.Container>
        {COLOR_KEYS.map((key) => (
          <S.ColorCircle
            onClick={handleCircleCLick(key)}
            $colorKey={key}
            key={key}
          />
        ))}
      </S.Container>
    </Dropdown>
  );
};

export default MenuColorPicker;
