import Home from '@/src/views/home/Home';
import { HomePageAttributes } from '@/src/types';

export default function Page() {
  const pageData: HomePageAttributes = {
    greeting: 'Hey Authentic Intelligent Beings,',
    title: 'Emotional AI ',
    subtitle: 'The Emotional AI is RAG Processing Generative Content that support a React Native Expo Chat App. It is a platform for introspection, journaling and relationship analysis, serving as an API server and providing an admin UI for data management. Future plans include a cross-platform mobile version for public users. By leveraging IBM RAG, we benefit from its proven framework, advanced metrics, scalability, integration capabilities, and robust community support, making it an ideal foundation for a sophisticated AI solution. ',
    subtitleLink: {
      content: 'Learn More',
      href: 'https://github.com/kentoverse/emoai-rag-data',
      openInNewTab: true,
    },
    cards: [
      {
        title: 'Visualize',
        text: 'Experience analytics capabilities.',
        href: '/visualize',
        actionText: 'Try it out',
        tag: null,
        icon: 'CHART_MULTITYPE', // Ensure this matches the specific string literal
        openInNewTab: false,
      },
      {
        title: 'Examples',
        text: 'See how analytics platform can help you identify issues with the model faster.',
        href: '/examples',
        actionText: 'Explore',
        tag: null,
        icon: 'MICROSCOPE', // Ensure this matches the specific string literal
        openInNewTab: false,
      },
      {
        title: 'Data collection cookbooks',
        text: 'A guide for collecting human & algorithmic evaluations.',
        href: '/cookbooks',
        actionText: 'Start cooking',
        tag: 'coming soon',
        icon: 'NOODLE_BOWL', // Ensure this matches the specific string literal
        openInNewTab: false,
        disabled: true,
      },
      {
        title: 'Documentation',
        text: 'Access developer resources',
        href: '/documentation',
        actionText: 'Read the docs',
        tag: 'coming soon',
        icon: 'BOOK', // Ensure this matches the specific string literal
        openInNewTab: false,
        disabled: true,
      },
    ],
  };

  return <Home page={pageData} />;
}