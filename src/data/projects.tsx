import { ShoppingCart, Users, CheckSquare, UtensilsCrossed, CalendarCheck } from 'lucide-react';

export interface ProjectType {
  title: string;
  description: string;
  technologies: string[];
  icon: () => JSX.Element; // ✅ بدلاً من JSX.Element
  gradient: string;
  github: string;
  demo: string;
}

export const projects: ProjectType[] = [
  {
    title: 'Ecommerce: Storezy',
    description: 'Storezy  Responsive e-commerce SPA built with React & Vite, featuring multi-page navigation and payment integration.',
    technologies: ['React', 'Vite', 'React Router DOM', 'TailwindCSS', 'React Helmet', 'Yup', 'ESLint','React Slick', 'Formik', 'Axios', 'JWT Decode', 'GitHub Pages'],
    icon: () => <ShoppingCart size={32} />, // ✅ دالة ترجع JSX بدل JSX مباشر
    gradient: 'from-pink-500 to-orange-500',
    github: 'https://github.com/enasmohmed/Ecommerce-React.git',
    demo: 'https://enasmohmed.github.io/Ecommerce-React/',
  },
  {
    title: 'Meal App (React + API)',
    description: 'Meal App is a dynamic food recipe web application built with React that fetches categorized meals and detailed ingredients from an external API with smooth navigation.',
    technologies: ['React', 'React Router DOM', 'Vite', 'Tailwind CSS', 'Material-UI', 'SASS', 'Axios', 'Heroicons', 'Lucide React'],
    icon: () => <UtensilsCrossed size={32} />,
    gradient: 'from-blue-500 to-purple-600',
    github: 'https://github.com/enasmohmed/MealApp.git',
    demo: 'https://enasmohmed.github.io/MealApp/',
  },
  {
    title: 'Hotel Booking (Django + DRF)',
    description: 'A full-stack hotel room reservation system with user authentication, room listings, booking logic, admin dashboard, and RESTful API support.',
    technologies: ['Python', 'Django', 'HTML5', 'CSS3','Django REST Framework', 'Bootstrap 4', 'Celery', 'Redis','JS', 'django-filter' ,'django-allauth'],
    icon: () => <CalendarCheck size={32} />,
    gradient: 'from-green-500 to-teal-600',
    github: 'https://github.com/enasmohmed/django_airbnb.git',
    demo: 'https://enasdev.pythonanywhere.com/',
  },
];
