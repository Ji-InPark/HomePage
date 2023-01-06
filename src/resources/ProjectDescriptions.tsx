import GitHub from '../assets/icons/GitHub';
import Notion from '../assets/icons/Notion';
import PlayStore from '../assets/icons/PlayStore';
import Chain from '../assets/icons/Chain';
import { Project } from '../types';
import IconButton from '../components/button/IconButton';

const iconSize = 40;

export const KuLeumBridge: Project = {
  imageUrl: 'https://github.com/Ji-InPark/KULEUM_BRIDGE/blob/master/KuleumBridge/app/src/main/res/drawable/kuleum_icon.png?raw=true',
  title: '쿠름다리 - KU:LeumBridge',
  subTitle: '건국대학교 비공식 앱',
  links: [
    {
      icon: <IconButton iconElement={<GitHub size={iconSize} />} openUrl={'https://github.com/Ji-InPark/KULEUM_BRIDGE'} />,
      description: 'GitHub',
    },
    {
      icon: (
        <IconButton iconElement={<PlayStore size={iconSize} />} openUrl={'https://play.google.com/store/apps/details?id=com.KonDuckJoa.kuleumbridge&pli=1'} />
      ),
      description: 'PlayStore',
    },
    {
      icon: <IconButton iconElement={<Notion size={iconSize} />} openUrl={'https://ji-in.notion.site/447ea17b6fee408ea13c426008315404'} />,
      description: 'About Project',
    },
  ],
};

export const KAgent: Project = {
  imageUrl: 'https://github.com/Ji-InPark/ForImage/blob/master/k-agent/k-agent-1.png?raw=true',
  title: 'K-Agent',
  subTitle: '병역특례 업체 조회 웹사이트',
  links: [
    {
      icon: <IconButton iconElement={<GitHub size={iconSize} />} openUrl={'https://github.com/Ji-InPark/k-agent.service'} />,
      description: 'FrontEnd GitHub',
    },
    {
      icon: <IconButton iconElement={<GitHub size={iconSize} />} openUrl={'https://github.com/Ji-InPark/k-agent.service-api'} />,
      description: 'BackEnd GitHub',
    },
    {
      icon: <IconButton iconElement={<Chain size={iconSize} />} openUrl={'https://k-agent.services'} />,
      description: 'Link',
    },
  ],
};

export const LCTP: Project = {
  imageUrl:
    'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fck7rvv%2FbtrnbJuGRZJ%2FGE5R89HSQtRL1LeSKdkKjK%2Fimg.png',
  title: 'LCTP',
  subTitle: 'LeetCode 오늘의 문제 Redirect service',
  links: [
    {
      icon: <IconButton iconElement={<GitHub size={iconSize} />} openUrl={'https://github.com/Ji-InPark/LeetCodeTodayProblem'} />,
      description: 'FrontEnd GitHub',
    },
    {
      icon: <IconButton iconElement={<GitHub size={iconSize} />} openUrl={'https://github.com/Ji-InPark/LCTP'} />,
      description: 'BackEnd GitHub',
    },
    {
      icon: <IconButton iconElement={<Chain size={iconSize} />} openUrl={'https://leetcode.click'} />,
      description: 'Link',
    },
  ],
};
