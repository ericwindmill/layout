import { Switch, Route } from 'react-router-dom'
import React, { Component } from 'react'

import Intro_302 from './Intro'
import OneGridTerms from './OneGridTerms'
import TwoDefineAGrid  from './TwoDefineAGrid'
import ThreeFRUnit from './ThreeFRUnit'
import FourGridAutoColAndRow from './FourGridAuto'
import FiveGridGap from './FiveGridGap'
import SixRepeat from './SixRepeat'
import SevenMinMax from './SevenMinMax'
import EightAutoFillAndFit from './EightAutoFillAndFit'
import NineGridTemplateAreas from './NineGridTemplateAreas'
import TenPlacingItems from './TenPlacingItems'
import ElevenGridRowAndColumn from './ElevenGridRowAndColumn'
import TwelveSpan from './TwelveSpan'
import ThirteenNamedLines from 'ThirteenNamedLines'
import FourteenGridArea from 'FourteenGridArea'
import SixteenGridAutoPlacement from 'SixteenGridAutoPlacement'
import SeventeenGridAutoFlow from 'SeventeenGridAutoFlow'
import EighteenLayering from 'EighteenLayering'
import NineteenGridOrder from 'NineteenGridOrder'
import TwentyJustifyItems from 'TwentyJustifyItems'
import TwentyOneAlignItems from 'TwentyoneJustifyItems'
import TwentyTwoJustifyAndAlignContent from 'TwentyTwoJustifyAndAlignContent'
import TwentyThreeJustifyAndAlignSelf from 'TwentyThreeJustifyAndAlignSelft'



class Routes extends Component {
  render () {
    return(
      <Switch>
        <Route exact path='/302/' component={Intro_302} />
        <Route exact path='/302/grid-terms' component={OneGridTerms} />
        <Route exact path='/302/define-grid' component={ThreeFRUnit} />
        <Route exact path='/302/fr-unit' component={ThreeFRUnit} />
        <Route exact path='/302/grid-auto-col-and-row' component={FourGridAutoColAndRow} />
        <Route exact path='/302/grid-gap' component={FiveGridGap} />
        <Route exact path='/302/repeat' component={SixRepeat} />
        <Route exact path='/302/minmax' component={SevenMinMax} />
        <Route exact path='/302/autofill-autofit' component={EightAutoFillAndFit} />
        <Route exact path='/302/grid-template-areas' component={NineGridTemplateAreas} />
        <Route exact path='/302/placing-grid-items' component={TenPlacingItems} />
        <Route exact path='/302/grid-row-and-column' component={ElevenGridRowAndColumn} />
        <Route exact path='/302/span' component={TwelveSpan} />
        <Route exact path='/302/named-lines' component={ThirteenNamedLines} />
        <Route exact path='/302/grid-area' component={FourteenGridArea} />
        <Route exact path='/302/grid-auto-placement' component={SixteenGridAutoPlacement} />
        <Route exact path='/302/grid-auto-flow' component={SeventeenGridAutoFlow} />
        <Route exact path='/302/layering' component={EighteenLayering} />
        <Route exact path='/302/grid-order' component={NineteenGridOrder} />
        <Route exact path='/302/justify-items' component={TwentyJustifyItems} />
        <Route exact path='/302/align-items' component={TwentyOneAlignItems} />
        <Route exact path='/302/justify-align-content' component={TwentyTwoJustifyAndAlignContent} />
        <Route exact path='/302/justify-align-self' component={TwentyThreeJustifyAndAlignSelf} />
      </Switch>
    )
  }
}

export default Routes