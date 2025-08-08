import VideoFilter from './VideoFilter'
import { connect } from 'react-redux'
import { videoFilterSelector } from '../../selectors'
import { setVideoFilter } from '../../actions'
import type { RootState, AppDispatch } from '@/modules/course/store';
import React from 'react';

interface Filter {
  onFilterSet: () => void;
  name: string;
  active: boolean;
}

interface StateProps {
  videoFilter: string;
}

interface DispatchProps {
  setVideoFilter: (payload: { filterValue: string }) => void;
}

type Props = StateProps & DispatchProps;

const mapStateToProps = (state: RootState): StateProps => ({
  videoFilter: videoFilterSelector(state),
});

const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => ({
  setVideoFilter: (payload) => {
    dispatch(setVideoFilter(payload));
  },
});

const VideoFilterContainer: React.FC<Props> = ({ setVideoFilter, videoFilter }) => {
  const filters: Filter[] = [
    {
      onFilterSet: () => setVideoFilter({ filterValue: 'all' }),
      name: 'All',
      active: videoFilter === 'all',
    },
    {
      onFilterSet: () => setVideoFilter({ filterValue: 'completed' }),
      name: 'Completed',
      active: videoFilter === 'completed',
    },
    {
      onFilterSet: () => setVideoFilter({ filterValue: 'not-completed' }),
      name: 'Not completed',
      active: videoFilter === 'not-completed',
    },
  ];
  return <VideoFilter filters={filters} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoFilterContainer);
