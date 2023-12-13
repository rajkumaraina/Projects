import './index.css'

const TabItem = props => {
  const {tabDetails, ChangeProjects, isActive} = props
  const {tabId, displayText} = tabDetails
  const onChange = () => {
    ChangeProjects(tabId)
  }
  const activeTabClassName = isActive ? 'active-tab-btn' : ''
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={onChange}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
