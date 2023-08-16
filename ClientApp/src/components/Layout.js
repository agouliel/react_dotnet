import { Container } from 'reactstrap';
import NavMenu from './NavMenu';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
      <div>
        <NavMenu />
        <Container>
          <Outlet />
        </Container>
      </div>
    );
}
