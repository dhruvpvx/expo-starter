export const redirectSystemPath = ({
  initial,
  path,
}: {
  initial: boolean;
  path: string;
}) => {
  if (path.includes('firebaseauth')) {
    return '/sign-in';
  } else {
    return path;
  }
};
