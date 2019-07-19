import React,{Component} from 'react';
import { Link ,Switch, Route,} from "react-router-dom";
import Profile from './Profile';
import Comments from './Comments';
import Contact from './Contact';
class Hello extends Component {
  state={
    tabs:[{to:'',title:'Profile'},{to:'comments',title:'Comments'}]
  }
  addTabs=(to,title)=>{
    let tabs=[...this.state.tabs];
    tabs.push({to:to,title:title});
    this.setState({tabs});

  }
  render() {
    const { path } = this.props.match;
    return (
      <div>
        <h1>Hey welcome home!</h1>
         <div className="links">
         {this.state.tabs.map((tab,key)=>{
        return <Link to={`${path}/${tab.to}`} className="link">{tab.title}</Link>
         })}
          
        </div>
        <div className="tabs">
          <Switch>
            <Route path={`${path}`} exact  render={(routeProps) => (
    <Profile {...routeProps} addTabs={this.addTabs} />
  )} />
            <Route path={`${path}/comments`} component={Comments} />
            <Route path={`${path}/contact`} component={Contact} />
          </Switch>
          </div>
      </div>
    );
  }
};
export default Hello;
