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

  getItemSize = (index: number) => {
    const { playlistVideos } = this.props
    return playlistVideos[index].open ? 540 : 140
  }

  toggleOpenCallback = (index: number) => {
    this.listRef.current?.resetAfterIndex(index)
  }

  Row = ({ index, style, data }: ListChildComponentProps<PlaylistVideo[]>) => {
    const item = data[index]
    return (
        <div style={style}>
          <Video
              key={item.id}
              index={index}
              id={item.id}
              title={item.title}
              thumbnail={item.thumbnail}
              description={item.description}
              toggleOpenCallback={this.toggleOpenCallback}
          />
        </div>
    )
  }

  render() {
    const { title, loading, error, playlistVideos, missingPlaylistId } = this.props

    if (missingPlaylistId) {
      return (
          <article>
            <Container>
              <h1>You will see this Course in future</h1>
            </Container>
          </article>
      )
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
                            itemSize={this.getItemSize}
                            itemData={playlistVideos}
                        >
                          {this.Row}
                        </List>
                    )}
                  </AutoSizer>
                </div>
            )}

            {loading && <Spinner />}
            {error && 'Error loading playlist'}
          </Container>
        </article>
    )
  }
}

export default CoursePage