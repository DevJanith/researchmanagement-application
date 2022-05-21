// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  // {
  //   title: 'user',
  //   path: '/dashboard/user',
  //   icon: getIcon('eva:people-fill'),
  // },
  // {
  //   title: 'Item',
  //   path: '/dashboard/item',
  //   icon: getIcon('eva:activity-fill'),
  // },
  // {
  //   title: 'Product',
  //   path: '/dashboard/product',
  //   icon: getIcon('eva:shopping-bag-fill'),
  // },
  // {
  //   title: 'Product List',
  //   path: '/dashboard/productList',
  //   icon: getIcon('eva:shopping-bag-outline'),
  // },
  // {
  //   title: 'blog',
  //   path: '/dashboard/blog',
  //   icon: getIcon('eva:file-text-fill'),
  // },
  {
    title: 'user management',
    path: '/dashboard/user-management',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'item management',
    path: '/dashboard/item-management',
    icon: getIcon('eva:activity-fill'),
  },
  {
    title: 'shop management',
    path: '/dashboard/shop-management',
    icon: getIcon('eva:shopping-cart-fill'),
  },
  {
    title: 'payment management',
    path: '/dashboard/payment-management',
    icon: getIcon('eva:paper-plane-fill'),
  },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: getIcon('eva:lock-fill'),
  // },
  // {
  //   title: 'register',
  //   path: '/register',
  //   icon: getIcon('eva:person-add-fill'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: getIcon('eva:alert-triangle-fill'),
  // },
];

export default navConfig;
