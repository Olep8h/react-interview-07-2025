import React from 'react'
import {
  VariableSizeList as List,
} from 'react-window'
import type {
  VariableSizeList as VariableSizeListType,
  ListChildComponentProps,
} from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'
import Spinner from '@/components/Spinner'
import Container from '@/components/Container'
import Video from './components/Video'
import VideoFilter from './components/VideoFilter'

export interface PlaylistVideo {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  open?: boolean;
  completed?: boolean;
}

export interface CoursePageProps {
  title: string;
  loading: boolean;
  error: string | null;
  playlistVideos: PlaylistVideo[];
  missingPlaylistId?: boolean;
}

class CoursePage extends React.PureComponent<CoursePageProps> {
  listRef = React.createRef<VariableSizeListType>()

  componentDidUpdate(prev: CoursePageProps) {
    const prevIds = prev.playlistVideos.map(v => v.id).join('|');
    const currIds = this.props.playlistVideos.map(v => v.id).join('|');
    if (prevIds !== currIds || prev.playlistVideos.length !== this.props.playlistVideos.length) {
      this.listRef.current?.resetAfterIndex(0, true);
    }
  }

  private static readonly ROW_HEIGHT_COLLAPSED = 140;
  private static readonly ROW_HEIGHT_EXPANDED = 540;

  getRowHeight = (index: number) => {
    const item = this.props.playlistVideos[index];
    return item && item.open
        ? CoursePage.ROW_HEIGHT_EXPANDED
        : CoursePage.ROW_HEIGHT_COLLAPSED;
  }

  toggleOpenCallback = (index: number) => {
    this.listRef.current?.resetAfterIndex(index, true);
  }

  Row = ({ index, style, data }: ListChildComponentProps<PlaylistVideo[]>) => {
    const item = data[index];
    return (
        <div style={style}>
          <Video
              index={index}
              id={item.id}
              title={item.title}
              thumbnail={item.thumbnail}
              description={item.description}
              toggleOpenCallback={this.toggleOpenCallback}
          />
        </div>
    );
  }

  render() {
    const { title, loading, error, playlistVideos, missingPlaylistId } = this.props;

    if (missingPlaylistId) {
      return (
          <article>
            <Container>
              <h1>You will see this Course in future</h1>
            </Container>
          </article>
      );
    }

    return (
        <article>
          <Container>
            <VideoFilter />
            <h1>{title}</h1>

            {!loading && playlistVideos.length > 0 && (
                <div style={{ height: '60vh' }}>
                  <AutoSizer>
                    {({ height, width }: { height: number; width: number }) => (
                        <List
                            ref={this.listRef}
                            height={height}
                            width={width}
                            itemCount={playlistVideos.length}
                            itemSize={this.getRowHeight}
                            itemData={playlistVideos}
                            itemKey={(index, data) => data[index].id}
                        >
                          {this.Row}
                        </List>
                    )}
                  </AutoSizer>
                </div>
            )}

            {!loading && playlistVideos.length === 0 && <p>No videos to show.</p>}
            {loading && <Spinner />}
            {error && <p role="alert">Error loading playlist</p>}
          </Container>
        </article>
    );
  }
}

export default CoursePage