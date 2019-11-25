import React from 'react'
import PropTypes from 'prop-types'
import { TeamPageTemplate } from '../../templates/team-page'

const TeamPagePreview = ({ entry, widgetFor }) => {
  const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  return (
    <TeamPageTemplate
      image={entry.getIn(['data', 'image'])}
      content={widgetFor('body')}
      intro={{ blurbs }}
    />
  )
}

TeamPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default TeamPagePreview
