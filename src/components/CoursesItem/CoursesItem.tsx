import { useEffect, useRef } from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { HLS_IS_SUPPORTED } from 'helpers/constants';
import { handleElementFormat } from 'helpers/formatHelper';
import { handleElementHover } from 'helpers/hoverHelper';
import { ICourseProps } from 'interfaces/CoursesItem.interface';
import {
  ListItemStyles,
  LinkItemStyles,
  ImageContainerStyles,
  TitleStyles,
  TextStyles,
  SkillsTitleStyles,
  SkillsListStyles,
  SkillsItemStyles,
} from 'components/CoursesItem/CoursesItem.styled';

const CoursesItem = ({ course }: ICourseProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const imageRef = useRef(null);
  const { id, previewImageLink, meta, title, lessonsCount, rating } = course;
  const { courseVideoPreview, skills } = meta;
  const courseVideoLink = courseVideoPreview?.link;
  const courseVideoDuration = courseVideoPreview?.duration;

  useEffect(() => {
    if (HLS_IS_SUPPORTED && courseVideoLink && courseVideoDuration) {
      const video = videoRef.current;

      if (video) {
        video.setAttribute('poster', previewImageLink + '/cover.webp');
        handleElementFormat(video, courseVideoLink);
        handleElementHover(video);
      }
    }
  }, [course, courseVideoLink, courseVideoDuration, previewImageLink]);

  useEffect(() => {
    const image = imageRef.current;

    if (image) {
      handleElementHover(image, `${previewImageLink + '/cover.webp'}`);
    }
  }, [previewImageLink]);

  return (
    <ListItemStyles key={id}>
      <LinkItemStyles to={`/courses/${id}`}>
        <ImageContainerStyles>
          {courseVideoLink && courseVideoDuration ? (
            <video ref={videoRef} width='100%' height='100%' muted />
          ) : (
            <img
              ref={imageRef}
              src={previewImageLink + '/cover.webp'}
              alt='banner'
            />
          )}
        </ImageContainerStyles>
        <TitleStyles>{title}</TitleStyles>
        <TextStyles>Available lessons: {lessonsCount}</TextStyles>
        <SkillsTitleStyles>Skills:</SkillsTitleStyles>
        <SkillsListStyles>
          {skills?.map(skill => (
            <SkillsItemStyles key={skill}>{skill}</SkillsItemStyles>
          ))}
        </SkillsListStyles>
        <TextStyles accent>
          Rating: {rating}
          <Typography component='legend' />
          <Rating
            name='read-only'
            value={rating}
            precision={0.1}
            size='small'
            readOnly
          />
        </TextStyles>
      </LinkItemStyles>
    </ListItemStyles>
  );
};

export default CoursesItem;
