import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu';
import AccountContent from '../../components/MainContent/AccountContent/AccountContent';
class Account extends Component {
  render() {
      return (
        <div>
                <Header />
                <div id="layoutSidenav">
                    <NavigationMenu />
                    <AccountContent />
                </div>
        </div>
    );
  }
}

export default Account;
