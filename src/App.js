import React, { Component, Fragment } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import Home from './pages/Home/Home';
import GitHubApp from './projetos/pg/src/GithubApp';
import TodoList from './projetos/todo_/src/TodoApp'
import Pesquisa_de_livros from './projetos/pesquisa_de_livros/Pesquisa_de_livros';
import PortalNews from './projetos/portal-news/PortalNews';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Projetos from './pages/Projetos/Projetos';

class App extends Component {
  render() {
    return (
          <Fragment>
                      <Switch>
                        <Route exact={ true} path="/" component={Home} />
                        <Route exact={ true} path="/projetos/" component={Projetos} />
                        <Route path="/projetos/git-app/:name"  component={GitHubApp} />
                        <Route exact={ true} path="/projetos/todo-app/"  component={TodoList} />
                        <Route exact={ true} path="/projetos/pesquisa_de_livros" component={Pesquisa_de_livros} />
                        <Route exact={ true} path="/projetos/portal-news" component={PortalNews} />
                      </Switch>
          </Fragment>
      );
    }
}

export default App;
