import { Switch, Route } from 'react-router-dom'
import React, { Component } from 'react'

import Intro_301 from './Intro'
import OneDisplayFlex from './OneDisplayFlex'
import TwoFlexDirection from './TwoFlexDirection'
import ThreeFlexWrap from './ThreeFlexWrap'
import FourFlexFlow from './FourFlexFlow'
import FiveFlexTerms from './FiveFlexTerms'
import SixJustifyContent from './SixJustifyContent'
import SevenAlignItems from './SevenAlignItems'
import EightAlignBaseline from './EightAlignBaseline'
import NineAlignContent from './NineAlignContent'
import TenAlignSelf from './TenAlignSelf'
import ElevenFlexOrder from './ElevenFlexOrder'
import TwelveFlex from './TwelveFlex'
import ThirtreenFlexBasis from './ThirteenFlexBasis'
import FourteenFlexGrow from './FourteenFlexGrow'
import FifteenFlexShrink from './FifteenFlexShrink'
import SixteenFlexShorthand from './SixteenFlexShorthand'
import SeventeenBasisWrap from './SeventeenBasisWrap'

class Routes extends Component {
  render () {
    return(
      <Switch>
        <Route exact path='/301/' component={Intro_301} />
        <Route exact path='/301/display-flex' component={OneDisplayFlex} />
        <Route exact path='/301/flex-direction' component={TwoFlexDirection} />
        <Route exact path='/301/flex-wrap' component={ThreeFlexWrap} />
        <Route exact path='/301/flex-flow' component={FourFlexFlow} />
        <Route exact path='/301/flex-terms' component={FiveFlexTerms} />
        <Route exact path='/301/justify-content' component={SixJustifyContent} />
        <Route exact path='/301/align-items' component={SevenAlignItems} />
        <Route exact path='/301/align-baseline' component={EightAlignBaseline} />
        <Route exact path='/301/align-content' component={NineAlignContent} />
        <Route exact path='/301/align-self' component={TenAlignSelf} />
        <Route exact path='/301/flex-order' component={ElevenFlexOrder} />
        <Route exact path='/301/flex' component={TwelveFlex} />
        <Route exact path='/301/flex-basis' component={ThirtreenFlexBasis} />
        <Route exact path='/301/flex-grow' component={FourteenFlexGrow} />
        <Route exact path='/301/flex-shrink' component={FifteenFlexShrink} />
        <Route exact path='/301/flex-shorthand' component={SixteenFlexShorthand} />
        <Route exact path='/301/flex-basis-wrap' component={SeventeenBasisWrap} />
      </Switch>
    )
  }
}

export default Routes