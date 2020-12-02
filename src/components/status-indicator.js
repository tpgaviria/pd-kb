import React from "react"

class StatusIndicator extends React.Component {
  constructor(props) {
    super(props)
    this.state = { status: 'loading' }
  }

  componentDidMount() {
    require('scriptjs')('https://cdn.statuspage.io/se-v2.js', () => {
      if (!window.StatusPage) return

      // eslint-disable-next-line no-undef
      const sp = new StatusPage.page({ page: '33yy6hwxnwr3' })

      sp.summary({
        success: data => {
          this.setState({ status: data.status.indicator })
        },
      })
    })
  }

  render() {
    return <span className={`status-dot ${this.state.status}`} />
  }
}

export default StatusIndicator 
