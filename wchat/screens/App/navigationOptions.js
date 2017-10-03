import SearchButton from './components/SearchButton/index.js'
import styles from './styles.js'

export function homeOptions() {
  return {
    headerStyle: styles.navbar,
    headerTitleStyle: styles.navtitle,
    headerRight: SearchButton(),
    title: 'W-Chat'
  }
}
