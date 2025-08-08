import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import { fetchPlaylistRequest } from '../actions'

const withFetchPlaylistRequest = connect(
  null,
  (dispatch, { playlistId }) => {
    if (!playlistId) {
      return { missingPlaylistId: true };
    }
    return {
      fetchPlaylistRequest: () => {
        dispatch(fetchPlaylistRequest({playlistId}))
      },
      missingPlaylistId: false
    }
  },
)

const fetchPlaylistOnMount = lifecycle({
  componentDidMount() {
    if (!this.props.missingPlaylistId && this.props.fetchPlaylistRequest) {
      this.props.fetchPlaylistRequest()
    }
  },
})

export default compose(
  withFetchPlaylistRequest,
  fetchPlaylistOnMount,
)
