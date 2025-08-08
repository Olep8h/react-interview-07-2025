import Video from './Video'
import { connect } from 'react-redux'
import { isCompletedSelector, isOpenSelector } from '../../selectors'
import { toggleVideoCompleted, toggleVideoOpen } from '../../actions'
import type { RootState, AppDispatch } from '@/modules/course/store';

interface VideoContainerProps {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  index: number;
  toggleOpenCallback: (index: number) => void;
}

const mapStateToProps = (state: RootState, props: VideoContainerProps) => ({
  isCompleted: isCompletedSelector(state, props.id),
  isOpen: isOpenSelector(state, props.id),
});

const mapDispatchToProps = (dispatch: AppDispatch, props: VideoContainerProps) => ({
  toggleCompleted: () => {
    dispatch(toggleVideoCompleted({ id: props.id }))
  },
  toggleOpen: () => {
    dispatch(toggleVideoOpen({ id: props.id }))
    props.toggleOpenCallback(props.index)
  },
});

export default connect<
  ReturnType<typeof mapStateToProps>,
  ReturnType<typeof mapDispatchToProps>,
  VideoContainerProps,
  RootState
>(mapStateToProps, mapDispatchToProps)(Video);
