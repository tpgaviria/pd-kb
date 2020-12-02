import React from "react"

class CsatRating extends React.Component {
  constructor(props) {
    super(props)
    this.state = { csat: 'loading' }
  }

  componentDidMount() {
    require('scriptjs')('https://pagerduty.zendesk.com/satisfaction.js', () => {
        if (!window.Satisfaction) return

        this.setState({ csat: window.settings.ratings.good})
      })
  }

  render() {
  return <p className="zd-rating-number">{this.state.csat}%</p>
  }
}

export default CsatRating