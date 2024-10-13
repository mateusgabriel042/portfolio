import { getDictionaryUseClient } from '@/dictionaries/dictionary-use-client'
import { useRouter } from 'next/router';


export const returnDataPortfolio = (dict: any) => {
  return [
    {
      projectName: 'Simed',
      dir: 'simed',
      slides: ['simed_1.png', 'simed_2.png', 'simed_3.png', 'simed_4.png'],
      iconsSkills: [
        { icon: 'php', size: 30 },
        { icon: 'laravel', size: 20 },
        { icon: 'javascript', size: 25 },
        { icon: 'react', size: 27 },
        { icon: 'html5', size: 25 },
        { icon: 'css3', size: 25 },
        { icon: 'tailwindCss', size: 25 },
        { icon: 'mysql', size: 25 }
      ],
      description: dict.texts.description_simed
    },

    {
      projectName: 'SSSystem',
      dir: 'sssystem',
      slides: ['sssystem_1.png'],
      iconsSkills: [
        { icon: 'php', size: 30 },
        { icon: 'laravel', size: 20 },
        { icon: 'react', size: 27 },
        { icon: 'javascript', size: 25 },
        { icon: 'tailwindCss', size: 25 },
        { icon: 'html5', size: 25 },
        { icon: 'css3', size: 25 },
        { icon: 'mysql', size: 25 }
      ],
      description: dict.texts.description_sssystem
    },

    {
      projectName: 'Easit',
      dir: 'easit',
      slides: ['easit_1.png', 'easit_2.png', 'easit_3.png', 'easit_4.png'],
      iconsSkills: [
        { icon: 'php', size: 30 },
        { icon: 'laravel', size: 20 },
        { icon: 'javascript', size: 25 },
        { icon: 'react', size: 27 },
        { icon: 'html5', size: 25 },
        { icon: 'css3', size: 25 },
        { icon: 'tailwindCss', size: 25 },
        { icon: 'mysql', size: 25 }
      ],
      description: dict.texts.description_easit
    },

    {
      projectName: 'Snack Prompts',
      dir: 'snack_prompts',
      slides: ['snack_prompts_1.png'],
      iconsSkills: [
        { icon: 'vue', size: 25 },
        { icon: 'html5', size: 25 },
        { icon: 'css3', size: 25 },
        { icon: 'tailwindCss', size: 25 },
      ],
      description: dict.texts.description_snack_prompts
    }
  ]
}