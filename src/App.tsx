import React, { Component, ErrorInfo } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import DetailsContainer from "./components/details/DetailsContainer";
import HomeContainer from "./components/home/HomeContainer";

class App extends Component<IAppProps, IAppState> {

  constructor(props : IAppProps) {
    super(props);
    this.state = { hasError: false };
  }

  render() {
    if(this.state.hasError)
    {
      return <h1>Unexpected error happened. Please, reload the page.</h1>
    }

    return (
      <BrowserRouter>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/details/:id" component={DetailsContainer} />
      </BrowserRouter>
    );
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error : Error, errorInfo : ErrorInfo) {
    //TODO: Send to centralized logging etc.    
    console.log(error);
  }

}

interface IAppProps
{
}

interface IAppState
{
  hasError: boolean
}

export default App;
