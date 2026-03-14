import { createBrowserRouter } from 'react-router';
import PortfolioHome from './components/portfolio-home';
import CultuBAQProject from './components/cultubaq-project';
import DulceScrapProject from './components/dulcescrap-project';
import EditorialProjects from './components/editorial-projects';
import MagdalenaProject from './components/magdalena-project';
import SocialMediaProject from './components/social-media-project';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: PortfolioHome,
  },
  {
    path: '/proyecto/cultubaq',
    Component: CultuBAQProject,
  },
  {
    path: '/proyecto/dulcescrap',
    Component: DulceScrapProject,
  },
  {
    path: '/proyecto/editorial',
    Component: EditorialProjects,
  },
  {
    path: '/proyecto/magdalena',
    Component: MagdalenaProject,
  },
  {
    path: '/proyecto/redes-sociales',
    Component: SocialMediaProject,
  }
]);
