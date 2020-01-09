import React, { useEffect, useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { getLoggedUser } from 'YesterTech/localStorage'
import PrimaryHeader from 'YesterTech/PrimaryHeader'
import PrimaryFooter from 'YesterTech/PrimaryFooter'
// import useAuth from 'YesterTech/useAuth'
import 'YesterTech/PrimaryLayout.scss'

// Route Targets
import Home from 'YesterTech/Home'
import Signup from 'YesterTech/Signup'
import Login from 'YesterTech/Login'
import Account from 'YesterTech/Account'
import ProductsLayout from 'YesterTech/ProductsLayout'
import ProductSubNav from 'YesterTech/ProductSubNav'
import Checkout from 'YesterTech/Checkout'
import { useShoppingCartState } from 'YesterTech/ShoppingCartState'

function PrimaryLayout() {
  const { cart } = useShoppingCartState()
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    if (!authenticated) {
      const user = getLoggedUser()
      if (user) {
        setAuthenticated(true)
      }
    }
  }, [authenticated])

  return (
    <div className="primary-layout">
      <div>
        <PrimaryHeader />
        <Route path="/products">
          <ProductSubNav />
        </Route>
        <main className="primary-content">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/signup" exact>
              <Signup />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/products">
              <ProductsLayout />
            </Route>
            {cart.length > 0 && (
              <Route path="/checkout">
                <Checkout />
              </Route>
            )}
            {authenticated && (
              <Route path="/account">
                <Account />
              </Route>
            )}
            <Redirect to="/" />
          </Switch>
        </main>
        <PrimaryFooter />
      </div>
    </div>
  )
}

export default PrimaryLayout
