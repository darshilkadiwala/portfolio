import { index, route, type RouteConfig } from '@react-router/dev/routes';

export default [
  index('routes/home.page.tsx'),
  route('/resume', 'routes/resume.page.tsx'),
  route('/contact', 'routes/contact.page.tsx'),
] satisfies RouteConfig;
