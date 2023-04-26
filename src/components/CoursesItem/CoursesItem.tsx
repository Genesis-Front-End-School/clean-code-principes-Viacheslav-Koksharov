import Hls from 'hls.js';
import { useEffect } from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { onHoverElement } from '../../helpers/hoverHelper';
import { ICoursesItemComponentProps } from '../../interfaces/CoursesItem.interfaces';
import {
  ListItemS,
  LinkItemS,
  ImageContainerS,
  TitleS,
  TextS,
  SkillsListS,
  SkillTitleS,
  SkillsItemS,
} from './CoursesItem.styled';

const CoursesItem = ({ course }: ICoursesItemComponentProps) => {
  const { id, previewImageLink, meta, title, lessonsCount, rating } = course;
  const { courseVideoPreview, skills } = meta;

  useEffect(() => {
    if (
      window.Hls.isSupported() &&
      courseVideoPreview?.link &&
      courseVideoPreview?.duration
    ) {
      const video = document.getElementById(
        `id-${previewImageLink}-${title}`,
      ) as HTMLMediaElement;

      var hls = new Hls();
      hls.loadSource(courseVideoPreview.link);
      hls.attachMedia(video);

      video.setAttribute('poster', previewImageLink + '/cover.webp');
      onHoverElement(video);
    }
  }, [course, courseVideoPreview, previewImageLink, title]);

  useEffect(() => {
    const image = document.getElementById(`unavailable-${previewImageLink}`);

    if (image) {
      onHoverElement(image, `${previewImageLink + '/cover.webp'}`);
    }
  }, [previewImageLink]);

  return (
    <ListItemS key={id}>
      <LinkItemS to={`/courses/${id}`}>
        <ImageContainerS>
          {courseVideoPreview?.link && courseVideoPreview?.duration ? (
            <video
              id={`id-${previewImageLink}-${title}`}
              width="100%"
              height="100%"
              muted
            ></video>
          ) : (
            <img
              id={`unavailable-${previewImageLink}`}
              src={previewImageLink + '/cover.webp'}
              alt="banner"
            />
          )}
        </ImageContainerS>
        <TitleS>{title}</TitleS>
        <TextS>Available lessons: {lessonsCount}</TextS>
        <SkillTitleS>Skills:</SkillTitleS>
        <SkillsListS>
          {skills?.map(skill => (
            <SkillsItemS key={skill}>{skill} </SkillsItemS>
          ))}
        </SkillsListS>
        <TextS accent>
          Rating: {rating}
          <Typography component="legend" />
          <Rating
            name="read-only"
            value={rating}
            precision={0.1}
            size="small"
            readOnly
          />
        </TextS>
      </LinkItemS>
    </ListItemS>
  );
};

export default CoursesItem;
