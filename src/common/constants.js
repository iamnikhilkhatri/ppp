/* ROUTERS  */
export const ROUTES = {
  MAIN: '/dashboard',
  SIGNUP: '/signup',
  LOGIN: '/login',
  TRANSACTION: '/dashboard/transactions',
  SETTINGS: '/dashboard/settings',
  SUPPORT: '/dashboard/support',
};

/*  Modules */
export const MODULES = {
  DASHBOARD: 'Dashboard',
  MOVIES: 'Movies',
  SAMPLE: 'Sample',
};

/* Authentication */
export const TOKEN = 'TOKEN';
export const REFRESH_TOKEN = 'REFRESH_TOKEN';
export const USER = 'USER';

export const ROLES = {
  SUPER_ADMIN: 'Super admin',
  ADMIN: 'Admin',
};

export const ROLE_KEYS = {
  SUPER_ADMIN: 'SUPER_ADMIN',
  ADMIN: 'ADMIN',
};

/* Date and time */
export const defaultDateFormat = 'MM/DD/YYYY';

export const REGEX = {
  NAME: /^[a-z ,.'-]+$/i,
  ZIPCODE: /^[0-9]{5,6}$/,
  CITY: /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/,
  WEB_URL: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi,
  PASSWORD: /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]{8,16}$/,
  PHONE: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
  EMAIL: /^(([^<>()[\]\\.,;:!#$*%^'`~={}?/&\s@"]+(\.[^<>()[\]\\.,;:!#$*%^'`~={}?/&\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  AMOUNT: /^\d+$|^\d+\.\d*$/,
  OPTIONALNEGATIVEAMOUNT: /^[-]?\d+$|^[-]?\d+\.\d*$/,
  NUMBER: /^\d+$/,
  COUNTRY_CODE_PHONE: /^[0-9]{7,12}$/,
};

export const LIMIT = 10;
export const SCROLL_PERCENT = 0.85;

export const MOVIES_SORT_FIELD = [
  { name: 'Created At', value: 'createdAt' },
  { name: 'Updated At', value: 'updatedAt' },
  { name: 'Release Date', value: 'releaseDate' },
  { name: 'Popularity', value: 'popularity' },
  { name: 'Rate', value: 'voteAverage' },
];
export const ORDER = [
  { name: 'Ascending', value: 'ASC' },
  { name: 'Descending', value: 'DESC' },
];

export const CREDIT_TYPE = [
  { name: 'Cast', value: 'CAST' },
  { name: 'Crew', value: 'CREW' },
];

export const GENDER = [
  { name: 'Female', value: 'FEMALE' },
  { name: 'Male', value: 'MALE' },
  { name: 'Other', value: 'OTHER' },
];
export const ERROR_PAGE_TITLE = 'Oops! An error occurred!';
export const ERROR_PAGE_SUBTITLE =
  'Something is broken. Please let us know what you were doing when this error occurred. We will fix it as soon as possible. Sorry for any inconvenience caused.';

export const GUTTER_VARIATIONS = { xs: 16, sm: 16, md: 24, lg: 32 };

export const MOVIE_STATUS = {
  PENDING: 'Pending',
  RELEASED: 'Released',
};

export const BREAKPOINTS = {
  mobile: 550,
  tablet: 767,
  desktop: 1000,
  hd: 1200,
};

/* Message */
export const SOMETHING_WENT_WRONG = 'Something went wrong!';

/* Toast Type */
export const TOAST_TYPES = {
  ERROR: 'error',
  SUCCESS: 'success',
  INFO: 'info',
  WARNING: 'warning',
};

export function debounce(func, delay) {
  let timerId;

  return function (...args) {
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      func?.apply(this, args);
    }, delay);
  };
}

export const getUniqueValueFromArray = (array, key) => {
  const uniqueValues = [];
  const arrayList = [];
  array?.forEach((obj) => {
    const value = obj?.[key];
    if (!uniqueValues?.includes(value)) {
      uniqueValues?.push(value);
      arrayList?.push(obj);
    }
  });

  return arrayList;
};
