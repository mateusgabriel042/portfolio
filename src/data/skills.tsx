import { BiLogoPhp, BiLogoReact, BiLogoJavascript, BiLogoHtml5, BiLogoCss3, BiLogoVuejs, BiLogoTailwindCss, BiLogoGithub, BiLogoDocker, BiLogoFigma } from 'react-icons/bi'
import { SiNextdotjs, SiLaravel, SiBootstrap, SiMysql, SiPostgresql, SiJquery } from 'react-icons/si'

export const iconMap = {
  php: BiLogoPhp,
  react: BiLogoReact,
  javascript: BiLogoJavascript,
  html5: BiLogoHtml5,
  css3: BiLogoCss3,
  vue: BiLogoVuejs,
  tailwindCss: BiLogoTailwindCss,
  github: BiLogoGithub,
  docker: BiLogoDocker,
  figma: BiLogoFigma,
  next: SiNextdotjs,
  laravel: SiLaravel,
  bootstrap: SiBootstrap,
  mysql: SiMysql,
  postgresql: SiPostgresql,
  jquery: SiJquery,
};

interface IconName {
  icon: 
    'php'
  | 'react'
  | 'javascript'
  | 'html5'
  | 'css3'
  | 'vue'
  | 'tailwindCss'
  | 'github'
  | 'docker'
  | 'figma'
  | 'next'
  | 'laravel'
  | 'bootstrap'
  | 'mysql'
  | 'postgresql'
  | 'jquery'
}

interface SkillIconSelectorProps {
  iconName: IconName['icon'];
  size: number;
}

export const SkillIconSelector: React.FC<SkillIconSelectorProps> = ({ iconName, size }) => {
  const SelectedIcon = iconMap[iconName];
  return <SelectedIcon size={size} />;
};