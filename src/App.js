import React from "react";
import { HomePage } from "./pages/homepage/homepage.component";
import { Switch, Route, Redirect } from "react-router-dom";
import ShopPage from "./pages/shoppage/shop-page.component";
import Header from "./components/header/header.component";
import "./App.css";
import { SinginSignup } from "./pages/signin-signup/signin-signup.component";
import { auth } from "./firebase/firebase.utils";
import { createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { connect } from "react-redux";
import Checkout from "./pages/checkout/checkout.component";

class App extends React.Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     currentUser: null
  //   }

  // }

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        // console.log(userAuth);
        const userRef = await createUserProfileDocument(userAuth);

        //  console.log(userRef.get());
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });

          setCurrentUser(userAuth);

          // console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
      // console.log(this.state);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route
            exact
            path="/sigin-signup"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SinginSignup />
            }
          />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </div>
      // <Switch>
      //   <Route exact path='/' component={Home} />
      //   <Route exact path='/blog/aswdq/topics' component={TopicList} />
      //   <Route exact path='/blog/aswdq/topics/:topicId' component={TopicDetail} />
      // </Switch>
    );
  }
}

// function Home(props) {
//   console.log(props);
//   return (
//     <div>
//       <Link to='/blog/aswdq/topics'>
//         Topic List
//       </Link>
//       <h1>
//         This is home page
//       </h1>
//       <button onClick={() => props.history.push('/blog/aswdq/topics')}>
//         Topic List
//       </button>
//     </div>
//   )
// }

// function TopicList(props) {
//   console.log(props)
//   return (
//     <div>
//       <h1>
//         This is topic list page
//       </h1>
//       <Link to={`${props.match.url}/13`}> To topic 13</Link>
//       Topic List
//     </div>
//   )
// }

// function TopicDetail(props) {
//   console.log(props)
//   return (
//     <div>
//       Topic Detail {props.match.params.topicId}
//     </div>
//   )
// }

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

// There are three functions here
//1. mapDispathchToProps function: connnector between dispatch function and the action creator
//2. dispatch function: this is the inbuilt function from redux which dispatch action to action creator
//3. action creator function: this is the fuction called from user action i.e setCurrentuser
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

//connect is the connector between react and redux where react is the app, redux is
export default connect(mapStateToProps, mapDispatchToProps)(App);
