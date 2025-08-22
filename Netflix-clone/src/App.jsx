import React from 'react'
import MainSection from './Components/Component-1/MainSection'
import TrendingComponent from './Components/Component-2/TrendingComponent'
import FeatureComponent from './Components/Component-3/FeatureComponent'
import QuestionComponent from './Components/Component-4/QuestionComponent'
import Footer from './Components/Component-5/footer'

const App = () => {
  return (
    <div>
      <MainSection/>
      <TrendingComponent/>
      <FeatureComponent/>
      <QuestionComponent/>
      <Footer/>
    </div>
  )
}

export default App