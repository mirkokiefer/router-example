import { Redirect, Stack } from 'expo-router';
import { useAuth } from '@/lib/AuthContext';

export default function AppLayout() {
  const {isAuth, signIn, signOut } = useAuth();


  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!isAuth) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/signin" />;
  }

  // This layout can be deferred because it's not the root layout.
  return <Stack />;
}
