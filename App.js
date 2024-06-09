// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookSearchPage from './pages/BookSearchPage';
import PersonalBookshelfPage from './pages/PersonalBookshelfPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/search">
          <BookSearchPage />
        </Route>
        <Route path="/bookshelf">
          <PersonalBookshelfPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
