import { Login } from "./Login";
import { ProfileProps } from "./Profile";

type PrivateProps = {
    isLoggedIn: boolean
    component: React.ComponentType<ProfileProps>
}

// Props are de-structured
export const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
  if(isLoggedIn) {
    return <Component name='Arvish' />
  } else {
    return <Login />
  }
}