import { createBrowserRouter } from 'react-router';
import PortfolioHome from './components/portfolio-home';
import CultuBAQProject from './components/cultubaq-project';
import DulceScrapProject from './components/dulcescrap-project';
import EditorialProjects from './components/editorial-projects';
import MagdalenaProject from './components/magdalena-project';
import SocialMediaProject from './components/social-media-project';
import GlobalError from './components/global-error';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: PortfolioHome,
    errorElement: <GlobalError />
  },
  {
    path: '/proyecto/cultubaq',
    Component: CultuBAQProject,
    errorElement: <GlobalError />
  },
  {
    path: '/proyecto/dulcescrap',
    Component: DulceScrapProject,
    errorElement: <GlobalError />
  },
  {
    path: '/proyecto/editorial',
    Component: EditorialProjects,
    errorElement: <GlobalError />
  },
  {
    path: '/proyecto/magdalena',
    Component: MagdalenaProject,
    errorElement: <GlobalError />
  },
  {
    path: '/proyecto/redes-sociales',
    Component: SocialMediaProject,
    errorElement: <GlobalError />
  }
]);
