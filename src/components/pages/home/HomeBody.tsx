import React from 'react';
import { css } from '@emotion/react';
import ProfileImage from './ProfileImage';
import ShadowedText from '../../text/ShadowedText';
import VerticalBlank from '../../blank/VerticalBlank';
import IconButton from '../../button/IconButton';
import GitHub from '../../../assets/icons/GitHub';
import Instagram from '../../../assets/icons/Instagram';
import EMail from '../../../assets/icons/EMail';

function HomeBody() {
  const iconSize = 40;

  return (
    <div
      css={css({
        width: '100%',
        height: 'calc(100% - 120)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 120,
      })}
    >
      <ProfileImage imageUrl={'https://avatars.githubusercontent.com/u/81283634?v=4'} size={250} />
      <VerticalBlank size={29} />
      <ShadowedText text={'Ji-In Park'} fontSize={120} />
      <ShadowedText text={'Developer'} fontSize={32} />
      <VerticalBlank size={48} />
      <div
        css={css({
          width: 350,
          display: 'flex',
          justifyContent: 'space-between',
        })}
      >
        <IconButton iconElement={<GitHub size={iconSize} />} clickUrl={'https://github.com/Ji-InPark'} />
        <IconButton iconElement={<Instagram size={iconSize} />} clickUrl={'https://www.instagram.com/j_n._.88/'} />
        <IconButton iconElement={<EMail size={iconSize} />} clickUrl={'test'} />
      </div>
    </div>
  );
}

export default HomeBody;
