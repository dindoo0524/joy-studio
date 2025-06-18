import { Outlet } from '@tanstack/react-router';

export default function Root() {
  return (
    <div>
      <h1>Welcome!</h1>
      <Outlet />
    </div>
  );
}
