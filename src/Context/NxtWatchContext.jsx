import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkMode: false,
  changeTheme: () => {},
  addSavedVideos: () => {},
  activeTabItem: () => {},
  activeTab: '',
  savedVideos: [],
})

export default NxtWatchContext
