import React, { useContext } from 'react'
import ToggleDarkMode from '../08.dark-mode/ToggleDarkMode'
import TicTacToeGame from '../14. tictactoe/TicTacToeGame'
import RandomColorGenerator from '../02.Random-color/RandomColorGenerator'
import Accordion from '../01.Accordion/Accordion'
import TreeView from '../06.treeview/TreeView'
import { FeatureFlagsContext } from './context/indexContext'


const FeatureFlagsComponent = () => {
  const {enableFlags, loading} = useContext(FeatureFlagsContext)
  const componentsToRender = [
    {
      key: 'showLightAndDarkMode',
      component: <ToggleDarkMode/>
    },
    {
      key: 'showTicTacToe',
      component: <TicTacToeGame/>
    },
    {
      key: 'showRandomColorGenerator',
      component: <RandomColorGenerator/>
    },
    {
      key: 'showAccordion',
      component: <Accordion/>
    },
    {
      key: 'showTreeView',
      component: <TreeView/>
    }

  ]
  function checkEnableFlags(getCurrentKey){
    return enableFlags[getCurrentKey]
  }
  if(loading){
    return <h1>Loading....</h1>
  }
  return (
    <div>
      <h1>FeatureFlagsComponent</h1>
    
      {componentsToRender.map((componentItem)=>checkEnableFlags(componentItem.key)?<div key={componentItem.key}>{componentItem.component}</div>:null)}
    </div>
  )
}

export default FeatureFlagsComponent