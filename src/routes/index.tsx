import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { RoutesGR, RoutesHolerite } from "./../modules";

function Login() {
  return isLoggedIn ? <Main /> : <Login />;
}

function Main() {
  return (
    <Container>
      <Sidebar/>
      <Header />
      <Content>
        <Router>
          <Switch>
            <Route path="/gr" component={RoutesGR} />
            <Route path="/holerite" component={RoutesHolerite} />
          </Switch>
        </Router>
      </Content>
    </Container>
  );
}


export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        switch (routeIndex) {
          case 0:
            <RoutesGR />
            break;
          default:
            break;
        }
        <ContainerMain>
          <Header>

          </Header>
          <Sidebar>

          </Sidebar>
          <Content>

          </Content>
        </ContainerMain>


        <Switch>
          <Route path="/about">
            <RoutesGR />
          </Route>
          <Route path="/about">
            <RoutesHolerite />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
