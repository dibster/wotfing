const WfRouter = () => (
  <div className="App">
    <header className="App-header">
      <Router>
        <div>
          <Route exact path="/" component={NavBar} />
          <Route path="/admin" component={Admin} />
          <Route strict path="/logs" render={() => <h1>Logs</h1>} />
          <Route
            path="/children"
            children={props => {
              console.info(props);
              return null;
            }}
            children={NavBar}
          />
        </div>
      </Router>
    </header>

    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
);

export default WfRouter;
