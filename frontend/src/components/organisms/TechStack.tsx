import React from 'react';
import { Icon } from '@iconify/react';
import { Text } from '../atoms';

type IconKey = keyof typeof iconMap;

interface StackItem {
  label: string;
  iconKey: IconKey | string;
}

const iconMap = {
  figma: 'logos:figma',
  materialdesign: 'logos:material-design',
  canva: 'logos:canva-icon',
  openai: 'skill-icons:openai-light',
  react: 'logos:react',
  nextjs: 'logos:nextjs-icon',
  vue: 'logos:vue',
  tailwind: 'logos:tailwindcss-icon',
  typescript: 'logos:typescript-icon',
  javascript: 'logos:javascript',
  html5: 'logos:html-5',
  css3: 'logos:css-3',
  flutter: 'logos:flutter',
  dart: 'logos:dart',
  sql: 'logos:mysql',
  azuredevops: 'skill-icons:azure-light',
  java: 'logos:java',
  node: 'logos:nodejs-icon',
  express: 'skill-icons:expressjs-light',
  python: 'logos:python',
  mongodb: 'logos:mongodb-icon',
  githubactions: 'logos:github-actions',
  netlify: 'logos:netlify-icon',
} as const;

interface StackCategory {
  title: string;
  items: StackItem[];
}

interface TechStackProps {
  categories: StackCategory[];
  softSkills: string[];
}

const TechStack: React.FC<TechStackProps> = ({ categories, softSkills }) => {
  return (
    <div className="space-y-12">
      <div className="grid gap-6 md:grid-cols-3">
        {categories.map(category => (
          <div
            key={category.title}
            className="bg-navy-900/40 border border-brand-500/15 rounded-3xl p-6 shadow-lg hover:border-brand-400/40 transition-colors duration-300"
          >
            <Text variant="h4" className="text-xl font-semibold text-white mb-4 tracking-wide">
              {category.title}
            </Text>
            <div className="flex flex-wrap gap-3">
              {category.items.map(item => (
                <div
                  key={item.label}
                  className="flex items-center space-x-2 px-3 py-2 bg-white/5 rounded-2xl border border-white/10 text-sm text-gray-200"
                >
                  <Icon
                    icon={iconMap[item.iconKey as IconKey] || 'solar:star-bold'}
                    className="text-xl text-brand-300"
                    aria-hidden="true"
                  />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-navy-900/50 border border-brand-500/10 rounded-3xl p-6">
        <Text variant="h4" className="text-xl font-semibold text-white mb-4 text-center">
          Soft Skills
        </Text>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-200">
          {softSkills.map(skill => (
            <span
              key={skill}
              className="flex items-center space-x-2 px-3 py-2 bg-white/5 rounded-full border border-white/10"
            >
              <span className="text-brand-300">•</span>
              <span>{skill}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
